'use client';

import {  FaLinkedin, FaBehanceSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 z-40">
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/loupraxedes/" target="_blank" rel="noopener noreferrer" className="text-zinc-50 hover:text-violet-200 transition-colors">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a href="https://www.behance.net/loupraxedes" target="_blank" rel="noopener noreferrer" className="text-zinc-50 hover:text-violet-200 transition-colors">
            <span className="sr-only">Behance</span>
            <FaBehanceSquare className="h-6 w-6" />
          </a>
        </div>
        <p className="mt-8 text-center text-base text-zinc-600 dark:text-zinc-50">
          &copy; {new Date().getFullYear()} Louyse Praxedes. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
