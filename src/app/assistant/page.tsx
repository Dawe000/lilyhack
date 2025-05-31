import Link from "next/link";
import ChatInterface from "@/app/components/ChatInterface";

export default function AssistantPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center w-full max-w-4xl">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Python Assistant</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            Get help with your Python project from LilyBot
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
          <h2 className="text-2xl font-bold mb-4">How LilyBot Can Help You</h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p>LilyBot is your Python learning assistant! Here are some ways it can help:</p>
            
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Explain Python concepts:</strong> "How do I use list comprehensions?"</li>
              <li><strong>Debug your code:</strong> "Why is my for loop not working correctly?"</li>
              <li><strong>Suggest ideas:</strong> "How can I improve my file organizer project?"</li>
              <li><strong>Learn about libraries:</strong> "What can I do with the pandas library?"</li>
              <li><strong>Get step-by-step guidance:</strong> "Show me how to read and write JSON files"</li>
            </ul>
            
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-md mt-4">
              <p className="text-sm text-blue-800 dark:text-blue-300">
                <span className="font-bold">💡 Tip:</span> Be specific with your questions to get the most helpful responses. If you're stuck, share what you've tried already!
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