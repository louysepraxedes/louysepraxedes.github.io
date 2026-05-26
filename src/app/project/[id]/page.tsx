import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ id: String(project.id) }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const projectId = parseInt(resolvedParams.id, 10);
  const project = projects.find((item) => item.id === projectId);

  return {
    title: project ? `${project.title} | Project` : "Project not found",
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const resolvedParams = await params;
  const projectId = parseInt(resolvedParams.id, 10);
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#fcfaf8] text-zinc-900">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <Link href="/" className="text-sm text-zinc-500 hover:text-violet-600 transition-colors">
          ← Back to home
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-violet-700 font-semibold">{project.category}</p>
            <h1 className="mt-4 text-5xl font-serif tracking-tight text-zinc-950">{project.title}</h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-700">{project.description}</p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-zinc-100 shadow-xl shadow-zinc-200/50">
            <Image src={project.img} alt={project.title} fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
