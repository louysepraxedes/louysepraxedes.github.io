import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import ProjectGallery from "@/components/ProjectGallery";

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
          ← Voltar para a página inicial
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-violet-700 font-semibold">{project.category}</p>
            <h1 className="mt-4 text-5xl font-serif tracking-tight text-zinc-950">{project.title}</h1>
            {project.header && (
              <div className="mt-6 space-y-2 text-lg leading-8 text-zinc-700 font-bold">
                {project.header.map((line) => (
                  <h2 key={line}>{line}</h2>
                ))}
              </div>
            )}
            <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-700">{project.description}</p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-zinc-100 shadow-xl shadow-zinc-200/50">
            <Image src={encodeURI(project.img)} alt={project.title} fill className="object-cover" />
          </div>
        </div>

        {project.body && (
          <div className="mt-16 space-y-16">
            {project.body.map((section) => (
              <section key={section.title ?? section.paragraphs[0]} className="space-y-6">
                {section.title && <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">{section.title}</h2>}
                <div className="space-y-4 text-lg leading-8 text-zinc-700">
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">Galeria</h2>
            <ProjectGallery images={project.gallery} />
          </div>
        )}
      </div>
    </div>
  );
}
