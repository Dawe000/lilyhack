import Link from "next/link";

export default function GettingStarted() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center w-full max-w-4xl">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Getting Started with VS Code</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            A quick guide for using VS Code with Python and Git
          </p>
          <Link 
            href="/resources"
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to Resources
          </Link>
        </div>

        <div className="w-full border border-black/[.08] dark:border-white/[.145] rounded-lg p-6 hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold mb-4">Using the Terminal in VS Code</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            VS Code has a built-in terminal that makes it easy to run Python scripts and Git commands.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Opening the Terminal</h3>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Use the keyboard shortcut: <code>Control + `</code> (backtick key, usually under Esc)</li>
            <li>Or go to the menu: <code>Terminal → New Terminal</code></li>
            <li>Or use the Command Palette: <code>Cmd+Shift+P</code> and type "Terminal: Create New Terminal"</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">Running Python in the Terminal</h3>
          <ol className="list-decimal list-inside space-y-2 mb-6">
            <li>Create a new file called <code>hello.py</code></li>
            <li>Add some Python code: <code>print("Hello, World!")</code></li>
            <li>Save the file (<code>Cmd+S</code>)</li>
            <li>In the terminal, type: <code>python hello.py</code></li>
          </ol>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">💡 <strong>Tip:</strong> If you have multiple Python versions installed, you might need to use <code>python3</code> instead of <code>python</code>.</p>
          </div>
        </div>

        <div className="w-full border border-black/[.08] dark:border-white/[.145] rounded-lg p-6 hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold mb-4">Basic Git Commands</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Git helps you track changes to your code and collaborate with others. Here are some basic commands you'll use often:
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Setting Up a New Project with Git</h3>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md font-mono text-sm mb-6">
            <pre className="whitespace-pre">{`# Create a new project folder
mkdir my-python-project
cd my-python-project

# Initialize Git repository
git init

# Create a Python file
touch hello.py

# Open VS Code in the current directory
code .`}</pre>
          </div>
          
          <h3 className="text-xl font-semibold mb-3">Basic Git Workflow</h3>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md font-mono text-sm mb-6">
            <pre className="whitespace-pre">{`# Check status of your files
git status

# Add files to staging area
git add hello.py
# Or add all files
git add .

# Commit your changes
git commit -m "Add hello world script"

# See your commit history
git log`}</pre>
          </div>
          
          <h3 className="text-xl font-semibold mb-3">Git in VS Code</h3>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            VS Code has excellent Git integration:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Click the Source Control icon in the sidebar (looks like a branch)</li>
            <li>Changes to files will be shown there</li>
            <li>Hover over a file and click + to stage changes</li>
            <li>Enter a commit message and click the checkmark to commit</li>
          </ul>
        </div>

        <div className="w-full border border-black/[.08] dark:border-white/[.145] rounded-lg p-6 hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold mb-4">Python Basics in VS Code</h2>
          
          <h3 className="text-xl font-semibold mb-3">Creating Your First Script</h3>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Create a file named <code>hello.py</code> with the following content:
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md font-mono text-sm mb-6">
            <pre className="whitespace-pre">{`print("Hello, world!")
name = input("What's your name? ")
print(f"Nice to meet you, {name}!")`}</pre>
          </div>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Run it by typing <code>python hello.py</code> in the VS Code terminal.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">VS Code Python Features</h3>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Run current file: Right-click in editor and select "Run Python File in Terminal"</li>
            <li>Run selected code: Select code, right-click, choose "Run Selection/Line in Python Terminal"</li>
            <li>Python IntelliSense: Get autocomplete suggestions as you type</li>
            <li>Linting: See errors and warnings in your code as you type</li>
          </ul>
        </div>

        <div className="w-full border border-black/[.08] dark:border-white/[.145] rounded-lg p-6 hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold mb-4">Installing Python Packages</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            You can install Python libraries using pip in the VS Code terminal.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Basic pip Commands</h3>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md font-mono text-sm mb-6">
            <pre className="whitespace-pre">{`# Install a package
pip install requests

# Install multiple packages
pip install pandas matplotlib

# Check installed packages
pip list

# Uninstall a package
pip uninstall requests`}</pre>
          </div>
          
          <h3 className="text-xl font-semibold mb-3">Using Installed Packages</h3>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            After installing a package, you can import it in your Python code:
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md font-mono text-sm mb-6">
            <pre className="whitespace-pre">{`# Example using requests package
import requests

response = requests.get("https://api.github.com")
print(f"GitHub API Status: {response.status_code}")
print(response.json())`}</pre>
          </div>
        </div>

        <div className="w-full border border-black/[.08] dark:border-white/[.145] rounded-lg p-6 hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold mb-4">Sharing Your Code with Git</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Once you've created a project, you might want to share it on GitHub.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Creating a GitHub Repository</h3>
          <ol className="list-decimal list-inside space-y-2 mb-6">
            <li>Go to <a href="https://github.com/new" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">github.com/new</a></li>
            <li>Enter a repository name</li>
            <li>Choose public or private</li>
            <li>Click "Create repository"</li>
            <li>Follow the instructions to push your existing repository</li>
          </ol>
          
          <h3 className="text-xl font-semibold mb-3">Pushing to GitHub</h3>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md font-mono text-sm mb-6">
            <pre className="whitespace-pre">{`# Add the GitHub repository as a remote
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push your code to GitHub
git push -u origin main

# For subsequent pushes, you can just use:
git push`}</pre>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">💡 <strong>Tip:</strong> VS Code has a built-in GitHub extension that makes this process even easier. Click the Source Control icon, then click "Publish to GitHub".</p>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <Link 
            href="/resources"
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8"
          >
            Back to Resources
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
