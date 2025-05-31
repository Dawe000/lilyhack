import Link from "next/link";
import ChatInterface from "@/app/components/ChatInterface";

export default function AssistantPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center w-full max-w-4xl">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Mini Dawid</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            Your loving Python guide created just for you ❤️
          </p>
          <Link 
            href="/"
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to Hackathon
          </Link>
        </div>

        <ChatInterface />

        <div className="w-full border border-black/[.08] dark:border-white/[.145] rounded-lg p-6 hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold mb-4">How Mini Dawid Can Help You</h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p>Hi Lily! I'm Mini Dawid, your virtual programming companion. I'm here to support your Python journey with lots of love and patience! Here's how I can help:</p>
            
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Learn together:</strong> "Can you help me understand how the File Organizer project works?"</li>
              <li><strong>Solve problems:</strong> "I'm stuck on this error message. What am I doing wrong?"</li>
              <li><strong>Get creative:</strong> "How can I customize the Command Line Journal to track my workouts?"</li>
              <li><strong>Take it step by step:</strong> "Walk me through creating my first Python script, please"</li>
              <li><strong>Build confidence:</strong> "I feel overwhelmed by the Text Analyzer code. Can you explain it simply?"</li>
            </ul>
            
            <div className="bg-pink-50 dark:bg-pink-900/30 p-4 rounded-md mt-4">
              <p className="text-sm text-pink-800 dark:text-pink-300">
                <span className="font-bold">💖 From Dawid:</span> I created Mini Dawid just for you, Lily! He knows all about the projects in this hackathon and will be just as patient and supportive as I would be. Don't hesitate to ask for help whenever you need it!
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <Link 
            href="/"
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8"
          >
            Back to Hackathon
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          LilyHack 2025
        </p>
      </footer>
    </div>
  );
}