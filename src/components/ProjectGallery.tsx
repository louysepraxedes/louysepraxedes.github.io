"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

type ProjectGalleryProps = {
  images: string[];
};

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const slides = useMemo(
    () => images.map((src) => ({ src: encodeURI(src) })),
    [images]
  );

  return (
    <>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="group overflow-hidden rounded-sm bg-zinc-100 shadow-xl shadow-zinc-200/50 transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-violet-600"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={encodeURI(src)}
                alt={`Imagem ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </button>
        ))}
      </div>

      <Lightbox
        open={openIndex !== null}
        close={() => setOpenIndex(null)}
        slides={slides}
        index={openIndex ?? 0}
        plugins={[Zoom]}
      />
    </>
  );
}
