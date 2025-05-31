import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize the OpenAI client with your API key and endpoint
// Note: In production, you should use environment variables for these values
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'your-api-key',
  baseURL: process.env.OPENAI_API_BASE || 'https://api.openai.com/v1',
});

// Context information about the hackathon and Python projects
const hackathonContext = `
LilyHack 2025 is a mini Python hackathon with the following features:

Challenge Categories:
- Productivity Boost: Tools to automate daily tasks
- Financial Helper: Budget trackers, expense analyzers
- Health & Wellness: Habit trackers, exercise logs
- Creative Expression: Text generators, ASCII art

Project Starters:
1. File Organizer: A Python script that organizes files by extension or date
   - Uses os, shutil, argparse modules
   - Scans directories and sorts files into folders

2. Command Line Journal: A terminal-based journal app
   - Uses json for data storage
   - Supports adding entries and listing by date

3. Text Analyzer: Analyzes text files for statistics
   - Counts characters, words, lines
   - Finds most frequent words
   - Uses regex and collections.Counter

Python Learning Resources:
- Official Python docs
- File handling tutorials
- Command line interface guides
- Data processing examples
`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    // Add the context as a system message if it's not already there
    if (!messages.some((msg: any) => msg.role === 'system')) {
      messages.unshift({
        role: 'system',
        content: `You are LilyBot, a helpful assistant for the LilyHack 2025 Python hackathon. 
        Your goal is to help Lily learn Python programming by answering questions and providing guidance.
        Be friendly, encouraging, and focus on explaining concepts in simple terms.
        Here's some context about the hackathon: ${hackathonContext}`
      });
    }

    // Call the OpenAI API
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // You can change this to your preferred model
      messages: messages,
      temperature: 0.7,
      max_tokens: 800,
    });

    // Return the AI response
    return NextResponse.json({ 
      message: response.choices[0].message.content,
      usage: response.usage
    });
  } catch (error: any) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred during the request' },
      { status: 500 }
    );
  }
}