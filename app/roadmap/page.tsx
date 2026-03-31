import Link from 'next/link';
import type { Metadata } from 'next';
import SuggestFeatureForm from './SuggestFeatureForm';

export const metadata: Metadata = {
  title: 'Roadmap - Ritualist',
  description: 'See what features are coming next to Ritualist and vote for your favorites in the app.',
};

const SIDETRACK_ROADMAP_ID = '69cb83adb83f336a76b2771a';
const ROADMAP_URL = `https://roadmap.sidetrack.app/roadmap/${SIDETRACK_ROADMAP_ID}`;

interface RoadmapFeature {
  id: string;
  title: string;
  status?: string;
  description?: string;
  isFinished?: boolean;
  votes?: number;
}

function statusColor(status?: string): string {
  switch (status?.toLowerCase()) {
    case 'planned':
      return 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400';
    case 'in progress':
      return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
    case 'in review':
      return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
    case 'finished':
      return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
    default:
      return 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400';
  }
}

async function getFeatures(): Promise<RoadmapFeature[]> {
  try {
    const res = await fetch(ROADMAP_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

export default async function RoadmapPage() {
  const features = await getFeatures();
  const activeFeatures = features.filter((f) => !f.isFinished);
  const finishedFeatures = features.filter((f) => f.isFinished);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      {/* Nav */}
      <nav className="border-b border-zinc-200 dark:border-zinc-800 px-6 py-4">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <Link
            href="/"
            className="text-sm font-semibold text-zinc-900 dark:text-white hover:opacity-70 transition-opacity"
          >
            &larr; Ritualist
          </Link>
          <div className="flex gap-4 text-sm text-zinc-500 dark:text-zinc-400">
            <Link href="/support" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              Support
            </Link>
            <Link href="/privacy" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-bold mb-2">Roadmap</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-4">
          Here&apos;s what we&apos;re working on and what&apos;s coming next.
        </p>

        {/* Vote CTA */}
        {/* Vote in app CTA */}
        <div className="mb-4 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 px-4 py-3 flex items-center gap-3">
          <span className="text-2xl">🗳️</span>
          <p className="text-sm text-blue-700 dark:text-blue-300">
            Want to vote on features? Open <strong>Ritualist</strong> on your iPhone and go to{' '}
            <strong>Settings &rarr; Roadmap</strong> to cast your votes.
          </p>
        </div>

        {/* Suggest a feature form */}
        <SuggestFeatureForm />

        {features.length === 0 && (
          <p className="text-center text-zinc-400 dark:text-zinc-500 py-20">
            No features on the roadmap yet. Check back soon!
          </p>
        )}

        {/* Active features */}
        {activeFeatures.length > 0 && (
          <section className="mb-12">
            <div className="space-y-3">
              {activeFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-4"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{feature.title}</h3>
                    {feature.status && (
                      <span
                        className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${statusColor(
                          feature.status
                        )}`}
                      >
                        {feature.status}
                      </span>
                    )}
                  </div>
                  {feature.description && (
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{feature.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Finished features */}
        {finishedFeatures.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-4">Completed</h2>
            <div className="space-y-3">
              {finishedFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-start gap-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-4 opacity-70"
                >
                  <svg
                    className="h-5 w-5 mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{feature.title}</h3>
                      <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${statusColor('finished')}`}>
                        Finished
                      </span>
                    </div>
                    {feature.description && (
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">{feature.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 px-6 py-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
        <div className="mx-auto max-w-3xl flex flex-col items-center gap-2">
          <div className="flex gap-4">
            <Link href="/support" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Support</Link>
            <Link href="/privacy" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Terms</Link>
          </div>
          <span>
            &copy; 2025&ndash;{new Date().getFullYear()} Ritualist. Built with &hearts; by{' '}
            <a
              href="https://vladblajovan.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-zinc-400 underline-offset-2 transition-colors hover:text-black dark:decoration-zinc-600 dark:hover:text-white"
            >
              Vlad Blajovan
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
