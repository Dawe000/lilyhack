import Link from "next/link";

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
          <div className="border border-black/[.08] dark:border-white/[.145] rounded-lg p-6 bg-gray-50 dark:bg-gray-800 font-mono text-sm overflow-auto">
            <pre className="whitespace-pre">{`import os
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
`}</pre>
          </div>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
            Save this as <code>file_organizer.py</code> and run with <code>python file_organizer.py /path/to/directory --by ext</code> or <code>--by date</code>
          </p>
        </div>

        <div className="w-full">
          <h2 className="text-2xl font-bold mb-6">Command Line Journal Starter</h2>
          <div className="border border-black/[.08] dark:border-white/[.145] rounded-lg p-6 bg-gray-50 dark:bg-gray-800 font-mono text-sm overflow-auto">
            <pre className="whitespace-pre">{`import os
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
`}</pre>
          </div>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
            Save this as <code>journal.py</code> and run with <code>python journal.py add "Your entry here"</code> or <code>python journal.py list</code>
          </p>
        </div>

        <div className="w-full">
          <h2 className="text-2xl font-bold mb-6">Text Analyzer Starter</h2>
          <div className="border border-black/[.08] dark:border-white/[.145] rounded-lg p-6 bg-gray-50 dark:bg-gray-800 font-mono text-sm overflow-auto">
            <pre className="whitespace-pre">{`import os
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
`}</pre>
          </div>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
            Save this as <code>text_analyzer.py</code> and run with <code>python text_analyzer.py your_text_file.txt</code>
          </p>
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
