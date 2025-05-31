'use client';

import { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = 'python' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <div className="border border-black/[.08] dark:border-white/[.145] rounded-lg p-6 bg-gray-50 dark:bg-gray-800 font-mono text-sm overflow-auto">
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 px-2 py-1 text-xs font-medium rounded bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
        <pre className="whitespace-pre">{code}</pre>
      </div>
    </div>
  );
}
