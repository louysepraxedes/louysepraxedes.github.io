"use client";

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

export default function About() {
  return (
    <div className="flex flex-col items-center space-y-8 min-h-screen bg-white py-16">
      <h1 className="text-7xl md:text-9xs font-serif tracking-tighter leading-tight dark:text-zinc-900">About Me</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-center text-zinc-700 dark:text-zinc-900">
        I’ve been working as a UX Designer for over 6 years, creating digital solutions in agile and collaborative environments. My core skills include user research, interface design, and prototyping, always focused on delivering intuitive and functional experiences.

        In addition to my UX expertise, I bring 11 years of experience as a Designer, with a strong background in UI, Visual Design, and Branding. This multidisciplinary foundation enhances my ability to connect aesthetics, strategy, and usability in every project.

        Recently, I contributed to the implementation of a portfolio sharing feature, optimizing user flows and improving interaction between advisors and clients. I also integrate artificial intelligence into my workflow to streamline processes, speed up design stages, and enhance user experience.

        My work is guided by data, active listening, and cross-functional collaboration. I'm driven by the goal of creating digital experiences that are both human-centered and strategically aligned with business objectives.
      </p>
      <div className="mt-12 w-full">
        <h2 className="text-2xl font-serif text-center text-zinc-900 dark:text-zinc-900">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 m-6">
          {skills.map((skill) => (
            <div key={skill} className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-full text-sm font-medium hover:border-blue-500/50 transition-colors text-zinc-900 dark:text-zinc-900">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
