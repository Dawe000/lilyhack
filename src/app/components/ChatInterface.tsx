'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export default function ChatInterface() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: 'Hey sweetheart! 👋 I\'m Mini Dawid, your loving guide to Python programming. Dawid created me to help you through this hackathon with all the patience and support you need. What Python project would you like to work on today?' 
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom of the chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message to the chat
    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      // Send the conversation history to the API with a timeout
      console.log('Sending request to API...');
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout (reduced)
      
      // Add retry logic
      let retries = 2; // Increased to 2 retries
      let response: Response | undefined;
      let lastError;
      
      while (retries >= 0) {
        try {
          response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              messages: [...messages, userMessage].filter(msg => msg.role !== 'system'),
            }),
            cache: 'no-store',
            signal: controller.signal
          });
          
          // Check if we got a 500 status - if so, retry
          if (response.status === 500) {
            console.log(`Received 500 error, retries left: ${retries}`);
            if (retries <= 0) {
              throw new Error('Server returned a 500 error');
            }
            retries--;
            // Small wait before retry
            await new Promise(resolve => setTimeout(resolve, 1500));
            continue;
          }
          
          // If we got a successful response, break out of retry loop
          break;
        } catch (err: any) {
          lastError = err;
          console.log(`API request failed, retries left: ${retries}`, err);
          
          if (retries <= 0 || err.name === 'AbortError') {
            throw err;
          }
          
          retries--;
          // Small wait before retry with increasing delay
          await new Promise(resolve => setTimeout(resolve, 1500 + (2 - retries) * 1000));
        }
      }
      
      // If we didn't get a response and have an error, throw it
      if (!response && lastError) {
        throw lastError;
      }
      
      clearTimeout(timeoutId);
      
      // Make sure we have a response
      if (!response) {
        throw new Error('No response received from server');
      }
      
      console.log('API response received, status:', response.status);
      console.log('API response headers:', 
        Array.from(response.headers.entries())
          .map(([key, value]) => `${key}: ${value}`)
          .join(', ')
      );
      
      // Process the response
      const text = await response.text();
      console.log('API response text length:', text.length);
      console.log('API response text preview:', text.substring(0, 150));
      
      let data;
      
      try {
        // First, check if we got plain text (like "Internal Server Error")
        if (text.trim() && !text.includes('{') && !text.includes('}')) {
          console.error('Received plain text instead of JSON:', text);
          
          // If we received a plain text response, create our own JSON
          // This handles Cloudflare's raw error messages
          data = {
            message: "I'm having trouble connecting to my brain right now. Please try again in a moment!",
            success: false,
            error: text
          };
        } else if (text.trim()) {
          try {
            data = JSON.parse(text);
            console.log('Successfully parsed API response JSON:', data);
          } catch (jsonError: any) {
            console.error('JSON parse error:', jsonError);
            console.error('Raw text that failed to parse:', text);
            
            // If JSON parsing fails, create a fallback response
            data = {
              message: "Sorry, I received a response I couldn't understand. Let's try again!",
              success: false,
              error: 'JSON parse error'
            };
          }
        } else {
          console.error('Empty response from server');
          data = {
            message: "I didn't receive any response from my brain. Let's try again!",
            success: false,
            error: 'Empty response'
          };
        }
      } catch (parseError: any) {
        console.error('Error parsing response:', parseError);
        
        // Final fallback if everything else fails
        data = {
          message: "Something went wrong with our conversation. Let's start fresh!",
          success: false,
          error: parseError.message
        };
      }
      
      // Add assistant response to the chat
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.message || 'I received your message but couldn\'t generate a proper response.' }
      ]);
    } catch (error: any) {
      console.error('Error sending message:', error);
      console.error('Error type:', typeof error);
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      
      if (error.stack) {
        console.error('Error stack:', error.stack);
      }
      
      // Log network details if available
      if (error.cause) {
        console.error('Error cause:', error.cause);
      }
      
      // Provide a friendly error message based on the type of error
      let errorMessage = 'Unknown error';
      
      if (error.name === 'AbortError') {
        errorMessage = 'The request took too long to complete. Please try again.';
      } else if (error.message?.includes('Server returned: Internal Server Error')) {
        errorMessage = 'The AI service is currently experiencing difficulties. Please try again in a few minutes.';
      } else if (error.message) {
        // Simplify the error message if it contains technical details
        errorMessage = error.message
          .replace('Failed to parse server response as JSON', 'There was a communication problem')
          .replace('Failed to parse server response:', 'There was a problem:');
      }
      
      setMessages((prev) => [
        ...prev,
        { 
          role: 'assistant', 
          content: `Sorry sweetheart, I encountered a problem: ${errorMessage}. Let's try again in a moment! ❤️` 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto border border-black/[.08] dark:border-white/[.145] rounded-lg overflow-hidden shadow-md">
      <div className="bg-pink-600 text-white p-4">
        <h2 className="text-xl font-bold">Mini Dawid - Your Python Companion ❤️</h2>
        <p className="text-sm opacity-80">I'm here to help you with all your Python questions, sweetheart!</p>
      </div>
      
      {/* Chat messages */}
      <div className="h-[400px] overflow-y-auto p-4 bg-gray-50 dark:bg-gray-800">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`mb-4 ${
              message.role === 'user' ? 'text-right' : 'text-left'
            }`}
          >              <div 
              className={`inline-block max-w-[80%] p-3 rounded-lg ${
                message.role === 'user' 
                  ? 'bg-blue-500 text-white rounded-tr-none' 
                  : 'bg-pink-100 dark:bg-pink-900 text-gray-800 dark:text-gray-200 rounded-tl-none'
              }`}
            >
              <p className="whitespace-pre-wrap break-words">{message.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="text-left mb-4">
            <div className="inline-block max-w-[80%] p-3 rounded-lg bg-pink-100 dark:bg-pink-900 text-gray-800 dark:text-gray-200 rounded-tl-none">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-pink-400 animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-pink-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 rounded-full bg-pink-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input form */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything about Python, love..."
          className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-pink-600 text-white px-4 py-2 rounded-r-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 disabled:opacity-50 transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
}