"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);


  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Profile image as the sun - fixed in background */}
      <div className="fixed inset-x-0 top-[15%] flex justify-center z-[1] pointer-events-none">
        <div className="relative">
          {/* <div className="absolute inset-0 rounded-full bg-gradient-to-b from-pink-500 via-orange-400 to-yellow-300 blur-3xl opacity-80 scale-[2]" /> */}
          {/* <div className="absolute inset-0 rounded-full bg-gradient-to-b from-pink-400 to-orange-500 blur-xl opacity-60 scale-150" /> */}
          <Image
            src="/assets/profile.png"
            alt="Louyse Praxedes"
            width={200}
            height={200}
            className="relative rounded-full"
          />
        </div>
      </div>
      
      <div ref={containerRef} className="fixed inset-0 z-[5]" />
      <div className="relative flex flex-col items-center text-center space-y-8 min-h-screen pt-[45vh] pb-16 z-20">
        <div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Louyse Praxedes
          </h1>
          <p className="text-xl text-zinc-700 dark:text-zinc-300 mt-2">
            Senior Product Designer
          </p>
        </div>
        {/* <p className="max-w-md text-lg leading-8 text-zinc-700 dark:text-zinc-300">
          I’ve been working as a UX Designer for over 6 years, creating digital solutions in agile and collaborative environments. My core skills include user research, interface design, and prototyping, always focused on delivering intuitive and functional experiences.

In addition to my UX expertise, I bring 11 years of experience as a Designer, with a strong background in UI, Visual Design, and Branding. This multidisciplinary foundation enhances my ability to connect aesthetics, strategy, and usability in every project.

Recently, I contributed to the implementation of a portfolio sharing feature, optimizing user flows and improving interaction between advisors and clients. I also integrate artificial intelligence into my workflow to streamline processes, speed up design stages, and enhance user experience.

My work is guided by data, active listening, and cross-functional collaboration. I'm driven by the goal of creating digital experiences that are both human-centered and strategically aligned with business objectives.
        </p> */}
        {/* <div className="flex gap-4">
          <Link
            href="/projects"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            View Projects
          </Link>
          <Link href="/contact" className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 font-medium rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
          Contact Me
        </Link>
        </div> */}
      </div>

      {/* Retro Polish: Vignette and CRT Lines */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.8)_100%)]" />
      <div className="fixed inset-0 pointer-events-none opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
