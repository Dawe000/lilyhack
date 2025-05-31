import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Specify Edge Runtime for Cloudflare Pages compatibility
export const runtime = 'edge';

// Additional config specific for Cloudflare Pages
export const preferredRegion = 'auto';
export const dynamic = 'force-dynamic';

// Create a simple fallback response for when the API fails
const createFallbackResponse = () => {
  return {
    message: "I'm sorry, I'm having trouble connecting to my AI service right now. Please try again in a moment. Remember that I'm here to help you with Python programming for the LilyHack 2025 hackathon! ❤️"
  };
};

// Create a simplified context to reduce token usage
const simpleHackathonContext = `
LilyHack 2025: Mini Python hackathon with Productivity, Financial, Fun projects.
Projects use basic Python libraries (os, csv, json, datetime, etc).
Projects should be saved as .py files and run in VS Code terminal.
`;

export async function POST(req: NextRequest) {
  console.log('[CHAT API] Received request');
  
  // Check if request is a preflight request for CORS
  if (req.method === 'OPTIONS') {
    console.log('[CHAT API] Handling OPTIONS request');
    return new NextResponse(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',
      },
    });
  }

  try {
    // Initialize OpenAI client
    console.log('[CHAT API] Initializing OpenAI client');
    const apiKey = process.env.OPENAI_API_KEY || '';
    const apiBase = process.env.OPENAI_API_BASE || 'https://api.openai.com/v1';
    
    // Log environment variable presence (not the actual values for security)
    console.log(`[CHAT API] API Key available: ${!!apiKey}`);
    console.log(`[CHAT API] API Base URL available: ${!!apiBase}`);
    console.log(`[CHAT API] API Base URL: ${apiBase.substring(0, 10)}...`); // Show just the beginning
    
    let openai;
    try {
      openai = new OpenAI({
        apiKey,
        baseURL: apiBase,
        timeout: 15000, // 15 second timeout
        maxRetries: 1,
      });
      console.log('[CHAT API] OpenAI client initialized successfully');
    } catch (e) {
      console.error('[CHAT API] Failed to initialize OpenAI client:', e);
      return new NextResponse(JSON.stringify(createFallbackResponse()), {
        status: 200, // Return 200 even on error for Cloudflare compatibility
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }
    
    // Parse the request JSON with error handling
    let messages;
    try {
      console.log('[CHAT API] Parsing request body');
      const body = await req.json();
      console.log('[CHAT API] Request body parsed successfully');
      
      if (!body.messages) {
        console.log('[CHAT API] No messages found in request body');
        throw new Error('Missing messages array');
      }
      
      if (!Array.isArray(body.messages)) {
        console.log(`[CHAT API] Messages is not an array, type: ${typeof body.messages}`);
        throw new Error('Invalid messages format - not an array');
      }
      
      messages = body.messages;
      console.log(`[CHAT API] Found ${messages.length} messages in request`);
    } catch (parseError) {
      console.error('[CHAT API] Error parsing request JSON:', parseError);
      return new NextResponse(JSON.stringify({ 
        message: 'Sorry, I couldn\'t understand your message format. Please try again.'
      }), { 
        status: 200, // Use 200 for all responses in Cloudflare for better compatibility
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // Add the context as a system message if it's not already there
    console.log('[CHAT API] Checking for system message');
    if (!messages.some((msg: any) => msg.role === 'system')) {
      console.log('[CHAT API] No system message found, adding one');
      messages.unshift({
        role: 'system',
        content: `You are Mini Dawid, a loving boyfriend assistant for the LilyHack Python hackathon.
        Be warm, supportive, patient, and encouraging while helping with Python.
        Use affectionate terms occasionally and celebrate progress.
        Explain code clearly without being condescending.
        Here's context about the hackathon: ${simpleHackathonContext}`
      });
    } else {
      console.log('[CHAT API] System message already exists');
    }

    // Call the OpenAI API with simplified error handling for Cloudflare
    try {
      console.log('[CHAT API] Calling OpenAI API with model: gpt-3.5-turbo');
      console.log(`[CHAT API] Sending ${messages.length} messages to OpenAI`);
      
      // Simplified model parameters
      const startTime = Date.now();
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: messages,
        temperature: 0.7,
        max_tokens: 500, // Reduced to prevent timeouts
      });
      const endTime = Date.now();
      
      console.log(`[CHAT API] OpenAI API call successful in ${endTime - startTime}ms`);
      console.log(`[CHAT API] Response tokens: ${response.usage?.total_tokens || 'unknown'}`);

      // Return the AI response with explicit headers
      return new NextResponse(JSON.stringify({ 
        message: response.choices[0].message.content || "I'm here to help with your Python projects!"
      }), { 
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    } catch (apiError: any) {
      console.error('[CHAT API] Error calling OpenAI API:', apiError);
      console.error('[CHAT API] Error details:', JSON.stringify({
        name: apiError.name,
        message: apiError.message,
        status: apiError.status,
        type: apiError.type,
        code: apiError.code
      }));
      
      // If there's a response object in the error, log it
      if (apiError.response) {
        console.error('[CHAT API] Error response:', JSON.stringify({
          status: apiError.response.status,
          statusText: apiError.response.statusText,
          headers: apiError.response.headers,
          data: apiError.response.data
        }));
      }
      
      // Return a friendly error message
      return new NextResponse(JSON.stringify(createFallbackResponse()), { 
        status: 200, // Return 200 even on error to prevent client issues
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }
  } catch (error: any) {
    console.error('[CHAT API] General error in chat API:', error);
    console.error('[CHAT API] Error type:', typeof error);
    console.error('[CHAT API] Error name:', error.name);
    console.error('[CHAT API] Error message:', error.message);
    console.error('[CHAT API] Error stack:', error.stack);
    
    // Log any additional properties that might be helpful
    try {
      console.error('[CHAT API] Additional error properties:', 
        JSON.stringify(Object.getOwnPropertyNames(error).reduce((obj: Record<string, any>, prop) => {
          obj[prop] = error[prop];
          return obj;
        }, {}))
      );
    } catch (jsonError) {
      console.error('[CHAT API] Could not stringify error properties:', jsonError);
    }
    
    return new NextResponse(JSON.stringify(createFallbackResponse()), { 
      status: 200, // Use 200 for all responses in Cloudflare for better compatibility
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}
