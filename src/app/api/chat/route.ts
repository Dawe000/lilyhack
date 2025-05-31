import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Absolute minimum configuration for Cloudflare
export const runtime = 'edge';

// Create a simple fallback response for when the API fails
const createFallbackResponse = () => {
  return {
    message: "I'm sorry, I'm having trouble connecting to my AI service right now. Please try again in a moment. Remember that I'm here to help you with Python programming for the LilyHack 2025 hackathon! ❤️"
  };
};

// Create a simplified context to reduce token usage
const simpleHackathonContext = "LilyHack 2025: Mini Python hackathon with basic Python projects";

// Main POST handler
export async function POST(req: NextRequest) {
  // Basic response headers for all responses
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
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
  
  // We'll wrap everything in a try/catch to ensure we always return valid JSON
  try {
    // Get API key - if missing, return a friendly message
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return new NextResponse(
        JSON.stringify({
          message: "Sorry, the AI service isn't configured properly. Please check the API key configuration."
        }),
        { status: 200, headers }
      );
    }
    
    // Create a minimal OpenAI client
    const openai = new OpenAI({
      apiKey,
      baseURL: process.env.OPENAI_API_BASE || 'https://api.openai.com/v1',
      timeout: 8000, // Very short timeout for Cloudflare
      maxRetries: 0,  // No retries
    });
    
    // Parse request body - any parsing error returns a friendly message
    let messages;
    try {
      const body = await req.json();
      if (!body.messages || !Array.isArray(body.messages)) {
        throw new Error('Invalid messages format');
      }
      messages = body.messages;
    } catch (error) {
      return new NextResponse(
        JSON.stringify({ 
          message: 'Sorry, I couldn\'t understand your message. Please try again.'
        }),
        { status: 200, headers }
      );
    }
    
    // Add system message
    if (!messages.some((msg: any) => msg.role === 'system')) {
      messages.unshift({
        role: 'system',
        content: `You are Mini Dawid, a loving boyfriend assistant for the LilyHack Python hackathon. ${simpleHackathonContext}`
      });
    }
    
    // Call OpenAI API
    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages,
        temperature: 0.7,
        max_tokens: 300, // Very conservative token limit for Cloudflare
      });
      
      return new NextResponse(
        JSON.stringify({ 
          message: response.choices[0].message.content || "I'm here to help with your Python projects!"
        }),
        { status: 200, headers }
      );
    } catch (apiError) {
      // API error - return fallback
      return new NextResponse(
        JSON.stringify(createFallbackResponse()),
        { status: 200, headers }
      );
    }
  } catch (error) {
    // Catch-all handler - ensures we always return valid JSON
    return new NextResponse(
      JSON.stringify(createFallbackResponse()),
      { status: 200, headers }
    );
  }
}
