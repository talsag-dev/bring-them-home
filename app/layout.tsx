import type { Metadata } from 'next';
import { Geist, Geist_Mono, Roboto } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Bring Them Home',
  description: 'A Journal for the hostages',
};

const roboto = Roboto({
  variable: '--font-robrto',
  weight: '500',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        <header className="flex items-center justify-end p-4">
          <nav className="flex" aria-label="Main Navigation">
            <Link className="p-2 hover:underline" href="/">
              <p className="text-sm md:text-base">Home</p>
            </Link>
            <Link className="p-2 hover:underline" href="/victims">
              <p className="text-sm md:text-base">Victims</p>
            </Link>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
