import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Absolute minimum configuration for Cloudflare
export const runtime = 'edge';

// Create a simple fallback response for when the API fails
const createFallbackResponse = (details?: string) => {
  return {
    message: "I'm sorry, I'm having trouble connecting to my AI service right now. Please try again in a moment. Remember that I'm here to help you with Python programming for the LilyHack 2025 hackathon! ❤️",
    success: false,
    error: details || 'Unknown error'
  };
};

// Create a hardcoded response for development/testing or when OpenAI fails
const createHardcodedResponse = (userMessage?: string) => {
  const defaultResponses = [
    "I'd love to help you with that Python project! Remember to start simple and build up your code step by step.",
    "Python is such a fun language to work with! Let me know if you need help with any specific concepts.",
    "That's a great question about Python! Remember that indentation is very important in Python syntax.",
    "For your hackathon project, remember to test your code often and break problems down into smaller parts.",
    "When debugging Python code, print statements are your best friend! Use them to see what's happening."
  ];
  
  return {
    message: defaultResponses[Math.floor(Math.random() * defaultResponses.length)],
    success: true,
    fallback: true
  };
};

// Main POST handler - extremely simplified for Cloudflare
export async function POST(req: NextRequest) {
  // Basic response headers for all responses
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
  };
  
  // Handle OPTIONS requests (CORS preflight)
  if (req.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 204,
      headers: {
        ...headers,
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',
      },
    });
  }
  
  try {
    // Get API key 
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return new NextResponse(
        JSON.stringify(createFallbackResponse('API key not configured')),
        { status: 200, headers }
      );
    }
    
    // Get request body
    let messages;
    let userMessage = '';
    try {
      const body = await req.json();
      messages = body.messages || [];
      
      // Save the last user message for potential fallback
      const lastUserMsg = messages.findLast((msg: any) => msg.role === 'user');
      if (lastUserMsg) {
        userMessage = lastUserMsg.content;
      }
      
    } catch (error) {
      // If we can't parse the request, return a fallback
      return new NextResponse(
        JSON.stringify(createFallbackResponse('Invalid request format')),
        { status: 200, headers }
      );
    }
    
    // Add system message - extremely simplified
    messages.unshift({
      role: 'system',
      content: 'You are Mini Dawid, a loving boyfriend assistant for LilyHack 2025, a mini Python hackathon.'
    });
    
    // Try OpenAI with minimal settings
    try {
      const openai = new OpenAI({
        apiKey,
        baseURL: process.env.OPENAI_API_BASE || 'https://api.openai.com/v1',
        timeout: 5000, // Extremely short timeout for Cloudflare
        maxRetries: 0,  // No retries
      });
      
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: messages.slice(0, 5), // Limit context to last 5 messages
        temperature: 0.7,
        max_tokens: 150, // Extremely conservative token limit
        presence_penalty: 0,
        frequency_penalty: 0,
      });
      
      if (response?.choices?.[0]?.message?.content) {
        return new NextResponse(
          JSON.stringify({ 
            message: response.choices[0].message.content,
            success: true
          }),
          { status: 200, headers }
        );
      } else {
        // Fall back to hardcoded response if no content
        return new NextResponse(
          JSON.stringify(createHardcodedResponse(userMessage)),
          { status: 200, headers }
        );
      }
    } catch (apiError: any) {
      // Try the fallback mechanism with hardcoded responses
      return new NextResponse(
        JSON.stringify(createHardcodedResponse(userMessage)),
        { status: 200, headers }
      );
    }
  } catch (error: any) {
    // Ultimate fallback - always returns valid JSON
    return new NextResponse(
      JSON.stringify(createFallbackResponse('Internal server error occurred')),
      { status: 200, headers }
    );
  }
}
