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
                Create an app that helps improve daily productivity and time
                management.
              </p>
              <ul className="list-disc list-inside text-sm space-y-2 text-gray-700 dark:text-gray-300">
                <li>Must include a task organization feature</li>
                <li>Should have visual progress tracking</li>
                <li>Bonus: Integrate with calendar</li>
              </ul>
            </div>

            <div className="border border-black/[.08] dark:border-white/[.145] rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Financial Helper</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Build a tool to assist with personal finances and budgeting.
              </p>
              <ul className="list-disc list-inside text-sm space-y-2 text-gray-700 dark:text-gray-300">
                <li>Include expense tracking functionality</li>
                <li>Create visual budget breakdowns</li>
                <li>Bonus: Savings goal visualization</li>
              </ul>
            </div>

            <div className="border border-black/[.08] dark:border-white/[.145] rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Health & Wellness</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Design an application focused on improving physical or mental
                wellbeing.
              </p>
              <ul className="list-disc list-inside text-sm space-y-2 text-gray-700 dark:text-gray-300">
                <li>Track habits or wellness activities</li>
                <li>Include motivational elements</li>
                <li>Bonus: Integrate relaxation techniques</li>
              </ul>
            </div>

            <div className="border border-black/[.08] dark:border-white/[.145] rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Creative Expression</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Create a tool that facilitates artistic or creative projects.
              </p>
              <ul className="list-disc list-inside text-sm space-y-2 text-gray-700 dark:text-gray-300">
                <li>Provide a way to create or showcase artwork</li>
                <li>Include sharing or collaboration features</li>
                <li>Bonus: Incorporate AI assistance</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Project Ideas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-black/[.08] dark:border-white/[.145] rounded-lg p-4 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition-colors">
              <h3 className="font-semibold">Shared To-Do List</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                A collaborative task manager for couples
              </p>
            </div>

            <div className="border border-black/[.08] dark:border-white/[.145] rounded-lg p-4 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition-colors">
              <h3 className="font-semibold">Expense Splitter</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                App to track shared expenses and split costs
              </p>
            </div>

            <div className="border border-black/[.08] dark:border-white/[.145] rounded-lg p-4 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition-colors">
              <h3 className="font-semibold">Mood Tracker</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Track daily moods with insights and patterns
              </p>
            </div>

            <div className="border border-black/[.08] dark:border-white/[.145] rounded-lg p-4 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition-colors">
              <h3 className="font-semibold">Digital Memory Book</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Create a shared journal of memories and photos
              </p>
            </div>

            <div className="border border-black/[.08] dark:border-white/[.145] rounded-lg p-4 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition-colors">
              <h3 className="font-semibold">Recipe Collector</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Save and organize favorite recipes with shopping lists
              </p>
            </div>

            <div className="border border-black/[.08] dark:border-white/[.145] rounded-lg p-4 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition-colors">
              <h3 className="font-semibold">Date Night Planner</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Generate fun date ideas and plan activities
              </p>
            </div>
          </div>
        </div>

        <div className="border border-black/[.08] dark:border-white/[.145] rounded-lg p-6 w-full">
          <h2 className="text-2xl font-bold mb-4">Hackathon Rules</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Projects should take 2-4 hours to complete</li>
            <li>
              Use any programming language or framework you're comfortable with
            </li>
            <li>Presentation time: 10 minutes per project</li>
            <li>Have fun and be creative!</li>
          </ul>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8">
            Start Hacking!
          </button>
          <button className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8">
            View Resources
          </button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          LilyHack 2025 - A Mini Hackathon for Two
        </p>
      </footer>
    </div>
  );
}
