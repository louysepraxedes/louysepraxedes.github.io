"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { NebulaBackground } from "@/components/NebulaBackground";

const skills = [
  "Product Design",
  "UX Design",
  "UI Design",
  "Design Systems",
  "UX Research",
  "User Research",
  "Wireframing",
  "High-Fidelity Prototyping",
  "Interaction Design",
  "Visual Identity",
  "Branding",
  "Art Direction",
  "Graphic Design",
  "Design Leadership",
  "Cross-functional Collaboration",
  "Agile Methodologies",
  "Component Design",
  "Responsive Design",
  "Artificial Intelligence",
  "Usability Testing"
];

// Animation variants for the skills staggered entry
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function About() {
  return (
    <div className="relative min-h-screen overflow-hidden text-zinc-100 px-6 py-16 md:py-24">
      <NebulaBackground />
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col justify-center">
      
      {/* Hero Section: Text Left, Image Right */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Bio */}
        <div className="md:col-span-7 space-y-6">
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-tight">
            About Me
          </h1>
          <div className="space-y-4 text-base md:text-lg leading-relaxed text-zinc-200 font-light">
            <p>
              I’ve been working as a UX Designer for over 6 years, creating digital solutions in agile and collaborative environments. My core skills include user research, interface design, and prototyping, always focused on delivering intuitive and functional experiences.
            </p>
            <p className="text-zinc-200">
              In addition to my UX expertise, I bring 11 years of experience as a Designer, with a strong background in UI, Visual Design, and Branding. This multidisciplinary foundation enhances my ability to connect aesthetics, strategy, and usability in every project.
            </p>
            <p className="text-zinc-200">
              Recently, I contributed to the implementation of a portfolio sharing feature, optimizing user flows and improving interaction between advisors and clients. I also integrate artificial intelligence into my workflow to streamline processes, speed up design stages, and enhance user experience.
            </p>
            <p className="font-normal text-zinc-100">
              My work is guided by data, active listening, and cross-functional collaboration. I'm driven by the goal of creating digital experiences that are both human-centered and strategically aligned with business objectives.
            </p>
          </div>
        </div>

        {/* Right Side: Picture Placeholder */}
        <div className="md:col-span-5 flex justify-center md:justify-end w-full">
          <div className="relative group w-full max-w-sm aspect-[4/5] bg-zinc-200 rounded-2xl overflow-hidden border border-zinc-300 shadow-xl transition-transform duration-500 hover:scale-[1.02]">           
            <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-400 p-6 text-center">
              <svg className="w-12 h-12 mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <Image src="/assets/profilev2.png" alt="Profile" fill className="object-cover" />
            </div>
            {/* Elegant overlay accent */}
            <div className="absolute inset-0 border border-black/5 rounded-2xl pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Skills Section with Animated Badges */}
      <div className="w-full mt-24 text-center">
        <h2 className="text-xl md:text-2xl font-serif mb-8 text-zinc-100 tracking-tight">
          Expertise & Skills
        </h2>
        
        <motion.div 
          className="flex flex-wrap gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                backgroundColor: "rgba(244, 244, 245, 1)", // zinc-100
                borderColor: "rgba(161, 161, 170, 1)" // zinc-400
              }}
              className="px-5 py-2.5 bg-white border border-zinc-200 rounded-full text-sm font-normal text-zinc-700 shadow-sm cursor-default transition-colors duration-200 select-none"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </div>
  );
}