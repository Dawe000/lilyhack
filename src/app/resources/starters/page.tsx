import Link from "next/link";
import CodeBlock from "@/app/components/CodeBlock";

export default function ProjectStarters() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center w-full max-w-4xl">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Project Starters</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            Ready-to-use Python code snippets to kickstart your hackathon project
          </p>
          <Link 
            href="/resources"
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to Resources
          </Link>
        </div>

        <div className="w-full">
          <h2 className="text-2xl font-bold mb-6">File Organizer Starter</h2>
          <div className="mb-4 text-gray-600 dark:text-gray-300">
            <p className="mb-2">This tool helps you clean up messy folders by automatically organizing files based on their types or creation dates.</p>
            
            <h3 className="text-xl font-semibold mt-4 mb-2">What It Does:</h3>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Scans all files in a directory</li>
              <li>Creates subfolders for each file type (e.g., jpg, pdf, txt)</li>
              <li>Alternatively, organizes by creation date (year-month)</li>
              <li>Moves files into appropriate folders</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-4 mb-2">Key Python Concepts:</h3>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li><code>os</code> module for file operations</li>
              <li><code>shutil</code> for moving files</li>
              <li><code>argparse</code> for command-line arguments</li>
              <li>File path manipulation</li>
              <li>Working with file metadata (dates)</li>
            </ul>
          </div>
          <CodeBlock code={`import os
import shutil
import argparse
from datetime import datetime

def organize_by_extension(source_dir):
    """
    Organize files by their extension.
    """
    for filename in os.listdir(source_dir):
        # Skip directories
        if os.path.isdir(os.path.join(source_dir, filename)):
            continue
            
        # Get file extension
        file_ext = os.path.splitext(filename)[1][1:].lower()
        if not file_ext:
            file_ext = "no_extension"
            
        # Create destination directory if it doesn't exist
        dest_dir = os.path.join(source_dir, file_ext)
        if not os.path.exists(dest_dir):
            os.makedirs(dest_dir)
            
        # Move file to destination directory
        src_path = os.path.join(source_dir, filename)
        dst_path = os.path.join(dest_dir, filename)
        shutil.move(src_path, dst_path)
        print(f"Moved {filename} to {file_ext}/")

def organize_by_date(source_dir):
    """
    Organize files by their creation date (YYYY-MM).
    """
    for filename in os.listdir(source_dir):
        # Skip directories
        if os.path.isdir(os.path.join(source_dir, filename)):
            continue
            
        # Get file creation time and format it
        file_path = os.path.join(source_dir, filename)
        creation_time = os.path.getctime(file_path)
        date_folder = datetime.fromtimestamp(creation_time).strftime('%Y-%m')
            
        # Create destination directory if it doesn't exist
        dest_dir = os.path.join(source_dir, date_folder)
        if not os.path.exists(dest_dir):
            os.makedirs(dest_dir)
            
        # Move file to destination directory
        dst_path = os.path.join(dest_dir, filename)
        shutil.move(file_path, dst_path)
        print(f"Moved {filename} to {date_folder}/")

def main():
    parser = argparse.ArgumentParser(description='Organize files in a directory')
    parser.add_argument('directory', help='Directory to organize')
    parser.add_argument('--by', choices=['ext', 'date'], default='ext',
                        help='Organize by extension or date')
    
    args = parser.parse_args()
    
    if not os.path.isdir(args.directory):
        print(f"Error: {args.directory} is not a valid directory")
        return
    
    if args.by == 'ext':
        organize_by_extension(args.directory)
    elif args.by == 'date':
        organize_by_date(args.directory)
    
    print(f"Files in {args.directory} organized successfully!")

if __name__ == "__main__":
    main()
`} />
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
            Save this as <code>file_organizer.py</code> and run with <code>python file_organizer.py /path/to/directory --by ext</code> or <code>--by date</code>
          </p>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md mt-4 mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
              <span className="font-bold">💡 Improvement ideas:</span> Add sorting by file size, add an "undo" feature, create a log file of all actions, or build a simple GUI using <code>tkinter</code>.
            </p>
          </div>
        </div>

        <div className="w-full">
          <h2 className="text-2xl font-bold mb-6">Command Line Journal Starter</h2>
          <div className="mb-4 text-gray-600 dark:text-gray-300">
            <p className="mb-2">A simple personal journal application that runs in your terminal, saving entries as structured JSON data.</p>
            
            <h3 className="text-xl font-semibold mt-4 mb-2">What It Does:</h3>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Records journal entries with timestamps</li>
              <li>Stores all entries in a JSON file</li>
              <li>Allows viewing entries by date</li>
              <li>Uses subcommands for different operations</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-4 mb-2">Key Python Concepts:</h3>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li><code>json</code> module for data storage</li>
              <li><code>argparse</code> with subcommands</li>
              <li>Working with dates and times</li>
              <li>Organizing code with functions</li>
              <li>File I/O with error handling</li>
            </ul>
          </div>
          <CodeBlock code={`import os
import json
import argparse
from datetime import datetime

JOURNAL_FILE = os.path.expanduser("~/journal.json")

def load_journal():
    """Load the journal file or create a new one"""
    if os.path.exists(JOURNAL_FILE):
        with open(JOURNAL_FILE, 'r') as f:
            try:
                return json.load(f)
            except json.JSONDecodeError:
                return {}
    return {}

def save_journal(journal):
    """Save the journal to a file"""
    with open(JOURNAL_FILE, 'w') as f:
        json.dump(journal, f, indent=4)

def add_entry(args):
    """Add a new entry to the journal"""
    journal = load_journal()
    date = datetime.now().strftime("%Y-%m-%d")
    time = datetime.now().strftime("%H:%M")
    
    if date not in journal:
        journal[date] = []
    
    entry = {
        "time": time,
        "content": args.content
    }
    
    journal[date].append(entry)
    save_journal(journal)
    print(f"Entry added for {date} at {time}")

def list_entries(args):
    """List journal entries"""
    journal = load_journal()
    
    if args.date:
        if args.date in journal:
            print(f"Entries for {args.date}:")
            for entry in journal[args.date]:
                print(f"[{entry['time']}] {entry['content']}")
        else:
            print(f"No entries for {args.date}")
    else:
        for date in sorted(journal.keys(), reverse=True):
            print(f"=== {date} ===")
            for entry in journal[date]:
                print(f"[{entry['time']}] {entry['content']}")
            print()

def main():
    parser = argparse.ArgumentParser(description='Command Line Journal')
    subparsers = parser.add_subparsers(dest='command', help='Command to run')
    
    # Add entry command
    add_parser = subparsers.add_parser('add', help='Add a journal entry')
    add_parser.add_argument('content', help='Journal entry content')
    
    # List entries command
    list_parser = subparsers.add_parser('list', help='List journal entries')
    list_parser.add_argument('--date', help='Show entries for a specific date (YYYY-MM-DD)')
    
    args = parser.parse_args()
    
    if args.command == 'add':
        add_entry(args)
    elif args.command == 'list':
        list_entries(args)
    else:
        parser.print_help()

if __name__ == "__main__":
    main()
`} />
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
            Save this as <code>journal.py</code> and run with <code>python journal.py add "Your entry here"</code> or <code>python journal.py list</code>
          </p>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md mt-4 mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
              <span className="font-bold">💡 Improvement ideas:</span> Add tags to entries, implement search functionality, add mood tracking, create a simple encryption for privacy, or add export options (markdown, txt).
            </p>
          </div>
        </div>

        <div className="w-full">
          <h2 className="text-2xl font-bold mb-6">Text Analyzer Starter</h2>
          <div className="mb-4 text-gray-600 dark:text-gray-300">
            <p className="mb-2">Analyzes text files to extract useful information and statistics about the content.</p>
            
            <h3 className="text-xl font-semibold mt-4 mb-2">What It Does:</h3>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Counts characters, words, and lines</li>
              <li>Identifies the most frequent words</li>
              <li>Calculates average word length</li>
              <li>Handles errors gracefully</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-4 mb-2">Key Python Concepts:</h3>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Regular expressions with the <code>re</code> module</li>
              <li><code>collections.Counter</code> for frequency analysis</li>
              <li>String manipulation</li>
              <li>Try/except for error handling</li>
              <li>Formatted output</li>
            </ul>
          </div>
          <CodeBlock code={`import os
import argparse
import re
from collections import Counter

def analyze_text(file_path):
    """Analyze text from a file and return statistics"""
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            text = file.read()
            
        # Basic stats
        char_count = len(text)
        word_count = len(text.split())
        line_count = text.count('\\n') + 1
        
        # Word frequency
        words = re.findall(r'\\b[\\w\\']+\\b', text.lower())
        word_freq = Counter(words).most_common(10)
        
        # Average word length
        avg_word_length = sum(len(word) for word in words) / len(words) if words else 0
        
        return {
            'char_count': char_count,
            'word_count': word_count,
            'line_count': line_count,
            'word_freq': word_freq,
            'avg_word_length': avg_word_length
        }
    except Exception as e:
        return {'error': str(e)}

def display_results(stats):
    """Display the analysis results in a formatted way"""
    if 'error' in stats:
        print(f"Error: {stats['error']}")
        return
    
    print("===== Text Analysis Results =====")
    print(f"Character count: {stats['char_count']}")
    print(f"Word count: {stats['word_count']}")
    print(f"Line count: {stats['line_count']}")
    print(f"Average word length: {stats['avg_word_length']:.2f} characters")
    
    print("\\nTop 10 most frequent words:")
    for word, count in stats['word_freq']:
        print(f"  {word}: {count}")

def main():
    parser = argparse.ArgumentParser(description='Analyze text from a file')
    parser.add_argument('file', help='Path to the text file to analyze')
    
    args = parser.parse_args()
    
    if not os.path.isfile(args.file):
        print(f"Error: {args.file} is not a valid file")
        return
    
    stats = analyze_text(args.file)
    display_results(stats)

if __name__ == "__main__":
    main()
`} />
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
            Save this as <code>text_analyzer.py</code> and run with <code>python text_analyzer.py your_text_file.txt</code>
          </p>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md mt-4 mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
              <span className="font-bold">💡 Improvement ideas:</span> Add sentiment analysis, find common phrases, calculate readability scores, identify proper nouns, or create a word cloud visualization using <code>matplotlib</code>.
            </p>
          </div>
        </div>

        <div className="w-full border border-black/[.08] dark:border-white/[.145] rounded-lg p-6 hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold mb-4">Tips for Working with These Projects</h2>
          
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p>Each of these starter projects demonstrates important Python concepts that you can build upon:</p>
            
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Understanding imports:</strong> Each project uses different Python modules – explore their documentation to discover more functionality</li>
              <li><strong>Command-line arguments:</strong> All projects use <code>argparse</code> to create user-friendly command-line interfaces</li>
              <li><strong>Error handling:</strong> Notice how the code anticipates potential problems using try/except blocks</li>
              <li><strong>Code organization:</strong> Each project separates functionality into discrete functions</li>
              <li><strong>Documentation:</strong> The code includes docstrings and comments to explain what each part does</li>
            </ul>
            
            <p className="mt-4">Try running these projects, then modify them to add your own features. Don't worry about breaking things – that's part of the learning process!</p>
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
