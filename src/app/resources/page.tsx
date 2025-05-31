import Link from "next/link";

export default function Resources() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center w-full max-w-4xl">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Python Resources</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            Helpful resources for your LilyHack Python projects
          </p>
          <Link 
            href="/"
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to Hackathon Home
          </Link>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* File Handling */}
          <div className="border border-black/[.08] dark:border-white/[.145] rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold mb-4">File Handling</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="font-semibold">os and shutil</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Core modules for file operations, path manipulation, and file system tasks.
                </p>
                <a 
                  href="https://docs.python.org/3/library/os.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                >
                  os Documentation →
                </a>
                <span className="mx-2 text-gray-400">|</span>
                <a 
                  href="https://docs.python.org/3/library/shutil.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                >
                  shutil Documentation →
                </a>
              </li>
              <li>
                <h3 className="font-semibold">pathlib</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Object-oriented filesystem paths, modern alternative to os.path.
                </p>
                <a 
                  href="https://docs.python.org/3/library/pathlib.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                >
                  pathlib Documentation →
                </a>
              </li>
              <li>
                <h3 className="font-semibold">glob</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Find files matching a pattern, useful for batch processing.
                </p>
                <a 
                  href="https://docs.python.org/3/library/glob.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                >
                  glob Documentation →
                </a>
              </li>
            </ul>
          </div>

          {/* Data Processing */}
          <div className="border border-black/[.08] dark:border-white/[.145] rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold mb-4">Data Processing</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="font-semibold">csv</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Read and write CSV files, perfect for simple data storage.
                </p>
                <a 
                  href="https://docs.python.org/3/library/csv.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                >
                  csv Documentation →
                </a>
              </li>
              <li>
                <h3 className="font-semibold">json</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  JSON encoder and decoder, great for structured data.
                </p>
                <a 
                  href="https://docs.python.org/3/library/json.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                >
                  json Documentation →
                </a>
              </li>
              <li>
                <h3 className="font-semibold">pandas</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Data analysis and manipulation library, powerful for CSV handling.
                </p>
                <a 
                  href="https://pandas.pydata.org/docs/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                >
                  pandas Documentation →
                </a>
                <span className="mx-2 text-gray-400">|</span>
                <a 
                  href="https://pandas.pydata.org/pandas-docs/stable/user_guide/10min.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                >
                  10-Minute Guide →
                </a>
              </li>
            </ul>
          </div>

          {/* Command Line Interfaces */}
          <div className="border border-black/[.08] dark:border-white/[.145] rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold mb-4">Command Line Interfaces</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="font-semibold">argparse</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Standard library module for command-line argument parsing.
                </p>
                <a 
                  href="https://docs.python.org/3/library/argparse.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                >
                  argparse Documentation →
                </a>
                <span className="mx-2 text-gray-400">|</span>
                <a 
                  href="https://realpython.com/command-line-interfaces-python-argparse/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                >
                  Tutorial →
                </a>
              </li>
              <li>
                <h3 className="font-semibold">click</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  A package for creating beautiful command line interfaces.
                </p>
                <a 
                  href="https://click.palletsprojects.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                >
                  click Documentation →
                </a>
              </li>
              <li>
                <h3 className="font-semibold">rich</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Library for rich text and beautiful formatting in the terminal.
                </p>
                <a 
                  href="https://rich.readthedocs.io/en/latest/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                >
                  rich Documentation →
                </a>
              </li>
            </ul>
          </div>

          {/* Visualization and Reporting */}
          <div className="border border-black/[.08] dark:border-white/[.145] rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold mb-4">Visualization and Reporting</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="font-semibold">matplotlib</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Create static, animated, and interactive visualizations.
                </p>
                <a 
                  href="https://matplotlib.org/stable/tutorials/introductory/pyplot.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                >
                  matplotlib Tutorial →
                </a>
              </li>
              <li>
                <h3 className="font-semibold">colorama</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Simple cross-platform colored terminal text.
                </p>
                <a 
                  href="https://pypi.org/project/colorama/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                >
                  colorama Documentation →
                </a>
              </li>
              <li>
                <h3 className="font-semibold">Pillow (PIL)</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Python Imaging Library for opening, manipulating, and saving images.
                </p>
                <a 
                  href="https://pillow.readthedocs.io/en/stable/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                >
                  Pillow Documentation →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full border border-black/[.08] dark:border-white/[.145] rounded-lg p-6 hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold mb-4">Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Beginner Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://docs.python.org/3/tutorial/index.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                  >
                    Python Official Tutorial
                  </a>
                </li>
                <li>
                  <a 
                    href="https://realpython.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                  >
                    Real Python Tutorials
                  </a>
                </li>
                <li>
                  <a 
                    href="https://automatetheboringstuff.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                  >
                    Automate the Boring Stuff with Python
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Practice and Examples</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://github.com/geekcomputers/Python" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                  >
                    GitHub: Python Example Scripts
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.pythonchallenge.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                  >
                    Python Challenge
                  </a>
                </li>
                <li>
                  <a 
                    href="https://exercism.org/tracks/python" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                  >
                    Exercism Python Track
                  </a>
                </li>
              </ul>
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
