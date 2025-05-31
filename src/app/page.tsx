import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center w-full max-w-4xl">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">LilyHack 2025</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A Mini Hackathon Just for Us
          </p>
        </div>

        <div className="w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Challenge Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-black/[.08] dark:border-white/[.145] rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Productivity Boost</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Create a Python script that helps automate repetitive tasks.
              </p>
              <ul className="list-disc list-inside text-sm space-y-2 text-gray-700 dark:text-gray-300">
                <li>Use Python's <code>os</code> and <code>shutil</code> modules</li>
                <li>Create a simple command-line interface with <code>argparse</code></li>
                <li>Bonus: Add basic error handling with try/except</li>
              </ul>
            </div>

            <div className="border border-black/[.08] dark:border-white/[.145] rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Financial Helper</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Build a Python expense tracker using CSV files.
              </p>
              <ul className="list-disc list-inside text-sm space-y-2 text-gray-700 dark:text-gray-300">
                <li>Use <code>csv</code> module or <code>pandas</code> for data handling</li>
                <li>Calculate statistics with <code>statistics</code> module</li>
                <li>Bonus: Generate a simple report with <code>matplotlib</code></li>
              </ul>
            </div>

            <div className="border border-black/[.08] dark:border-white/[.145] rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Health & Wellness</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Create a Python habit or water intake tracker.
              </p>
              <ul className="list-disc list-inside text-sm space-y-2 text-gray-700 dark:text-gray-300">
                <li>Use <code>datetime</code> module for tracking dates</li>
                <li>Store data in JSON format with <code>json</code> module</li>
                <li>Bonus: Add notifications using <code>plyer</code> package</li>
              </ul>
            </div>

            <div className="border border-black/[.08] dark:border-white/[.145] rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Creative Expression</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Create a Python script that generates ASCII art.
              </p>
              <ul className="list-disc list-inside text-sm space-y-2 text-gray-700 dark:text-gray-300">
                <li>Generate patterns with Python string manipulation</li>
                <li>Add color with <code>colorama</code> package</li>
                <li>Bonus: Convert images to ASCII with <code>Pillow</code></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Python Project Ideas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-black/[.08] dark:border-white/[.145] rounded-lg p-4 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition-colors">
              <h3 className="font-semibold">File Organizer</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Python script to organize files by type, date, or size
              </p>
            </div>

            <div className="border border-black/[.08] dark:border-white/[.145] rounded-lg p-4 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition-colors">
              <h3 className="font-semibold">Command Line Journal</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Python-based text diary with date stamping
              </p>
            </div>

            <div className="border border-black/[.08] dark:border-white/[.145] rounded-lg p-4 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition-colors">
              <h3 className="font-semibold">Text File Analyzer</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Python tool to analyze text patterns and statistics
              </p>
            </div>

            <div className="border border-black/[.08] dark:border-white/[.145] rounded-lg p-4 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition-colors">
              <h3 className="font-semibold">Todo CLI</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Python command-line todo list manager 
              </p>
            </div>

            <div className="border border-black/[.08] dark:border-white/[.145] rounded-lg p-4 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition-colors">
              <h3 className="font-semibold">Backup Script</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Python tool to backup files with versioning
              </p>
            </div>

            <div className="border border-black/[.08] dark:border-white/[.145] rounded-lg p-4 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition-colors">
              <h3 className="font-semibold">Quote Generator</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Python CLI for displaying random quotes
              </p>
            </div>
          </div>
        </div>

        <div className="border border-black/[.08] dark:border-white/[.145] rounded-lg p-6 w-full">
          <h2 className="text-2xl font-bold mb-4">Hackathon Rules</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Focus on command line tools and simple file handling</li>
            <li>Scripts should solve a real problem in your daily workflow</li>
            <li>Have fun and be creative!</li>
          </ul>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8">
            View Resources
          </button>
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
