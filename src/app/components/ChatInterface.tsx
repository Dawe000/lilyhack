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
      // Send the conversation history to the API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].filter(msg => msg.role !== 'system'),
        }),
      });
      
      let data;
      try {
        const text = await response.text();
        // Add additional logging for debugging
        console.log('API Response status:', response.status);
        console.log('API Response text:', text.substring(0, 200) + (text.length > 200 ? '...' : ''));
        
        try {
          data = JSON.parse(text);
        } catch (jsonError) {
          console.error('JSON parse error for text:', text);
          throw new Error('Failed to parse server response as JSON');
        }
      } catch (parseError) {
        console.error('Error parsing response:', parseError);
        throw new Error('Failed to parse server response');
      }
      
      if (!response.ok) {
        throw new Error(data?.error || `Server error: ${response.status}`);
      }
      
      // Add assistant response to the chat
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.message || 'I received your message but couldn\'t generate a proper response.' }
      ]);
    } catch (error: any) {
      console.error('Error sending message:', error);
      setMessages((prev) => [
        ...prev,
        { 
          role: 'assistant', 
          content: `Sorry sweetheart, I encountered an error: ${error.message || 'Unknown error'}. Please try again later.` 
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