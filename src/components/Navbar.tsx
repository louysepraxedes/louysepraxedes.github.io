'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md z-10 border-b border-zinc-200 z-40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-3xl font-serif tracking-tighter font-bold dark:text-zinc-900">
              LP
            </Link>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <div className="flex items-baseline space-x-4">
              <Link href="/" className="text-zinc-700 hover:text-blue-500 dark:text-zinc-900 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link> 
               <Link href="/about" className="text-zinc-700 hover:text-blue-500 dark:text-zinc-900 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              {/* <Link href="/projects" className="text-zinc-700 hover:text-blue-500 dark:text-zinc-900 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="text-zinc-700 hover:text-blue-500 dark:text-zinc-900 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>  */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
