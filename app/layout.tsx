import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnalyticsProvider from "./components/AnalyticsProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://vladblajovan.github.io/RitualistApp";

export const metadata: Metadata = {
  title: "Ritualist - Build Better Habits",
  description: "Transform your life with habits that actually stick. Get AI-powered insights, location reminders, and beautiful analytics. Privacy-first. No social pressure.",
  metadataBase: new URL(siteUrl),
  keywords: ["habit tracker", "iOS app", "productivity", "personality insights", "privacy-first", "location-based reminders", "iCloud sync", "machine learning"],
  authors: [{ name: "Vlad Blajovan" }],
  creator: "Vlad Blajovan",
  publisher: "Ritualist",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Ritualist - Privacy-First Habit Tracker for iOS",
    description: "Build better habits with AI-powered personality insights, location-based reminders, and beautiful analytics. Privacy-first, on-device processing, iCloud sync.",
    siteName: "Ritualist",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ritualist - Build Better Habits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritualist - Privacy-First Habit Tracker for iOS",
    description: "Build better habits with AI-powered personality insights, location-based reminders, and beautiful analytics.",
    images: ["/og-image.png"],
    creator: "@ritualistapp",
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // TODO: Add verification codes when you set up:
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" content="#f9fafb" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
              window.addEventListener('load', function() {
                setTimeout(function() {
                  window.scrollTo(0, 0);
                }, 0);
              });
              (function() {
                var mq = window.matchMedia('(prefers-color-scheme: dark)');
                if (mq.matches) document.documentElement.classList.add('dark');
                mq.addEventListener('change', function(e) {
                  document.documentElement.classList.toggle('dark', e.matches);
                });
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <AnalyticsProvider />
      </body>
    </html>
  );
}
