'use client';

import { useState } from 'react';
import { trackEvent } from '../lib/analytics';

export default function SuggestFeatureForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const canSubmit = title.trim().length > 0;

  function handleSubmit() {
    const subject = encodeURIComponent('Ritualist - New Feature Request');
    let body = `Feature: ${title.trim()}`;
    if (description.trim()) {
      body += `\n\nDescription:\n${description.trim()}`;
    }
    const encodedBody = encodeURIComponent(body);
    trackEvent({ action: 'feature_request_submit', category: 'engagement', label: title.trim() });
    window.location.href = `mailto:ritualist.help@gmail.com?subject=${subject}&body=${encodedBody}`;
  }

  return (
    <div className="mb-10 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 overflow-hidden">
      {/* Collapsed header — always visible */}
      <button
        onClick={() => { if (!isOpen) trackEvent({ action: 'feature_request_open', category: 'engagement' }); setIsOpen(!isOpen); }}
        className="w-full px-5 py-3 flex items-center gap-3 transition-colors hover:bg-blue-100 dark:hover:bg-blue-900/40"
      >
        <span className="text-2xl">💡</span>
        <div className="text-left flex-1">
          <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">
            Suggest a Feature
          </p>
          <p className="text-xs text-blue-600 dark:text-blue-400">
            Have an idea? Let us know and we&apos;ll consider it for the roadmap.
          </p>
        </div>
        <svg
          className={`h-4 w-4 text-blue-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {/* Expanded form */}
      <div
        className={`transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-5 pb-5 pt-2">
          <div className="space-y-3 mb-4">
            <input
              type="text"
              placeholder="Feature title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg border border-blue-200 dark:border-blue-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Describe your idea (optional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              className="w-full rounded-lg border border-blue-200 dark:border-blue-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={!canSubmit}
            className={`w-full rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-colors ${
              canSubmit
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-blue-300 dark:bg-blue-800 cursor-not-allowed'
            }`}
          >
            Send Feature Request
          </button>

          <p className="mt-3 text-xs text-center text-blue-500 dark:text-blue-400">
            This will open your email client with the details pre-filled.
          </p>
        </div>
      </div>
    </div>
  );
}
