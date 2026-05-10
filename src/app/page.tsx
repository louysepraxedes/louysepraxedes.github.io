"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {NebulaBackground} from "@/components/NebulaBackground";
// import Link from "next/link";

const projects = [
  {id: 7, title: "Gorilla - Mobile App", category: "User Experience", img: "/assets/Gorila/p7-gorilla-mobile-app.png" },
  {id: 0, title: "Plenno", category: "User Experience", img: "/assets/Plenno/p0-plenno.png" },
  { id: 1, title: "Somos Cataguá 2019/2020", category: "Visual Design", img: "/assets/p1-catagua-construtora.jpg" },
  { id: 2, title: "Health Awareness Campaigns", category: "Visual Design & Endomarketing", img: "/assets/p2-catagua-construtora-saude.png" },
  { id: 3, title: "Connecting Plus 2016", category: "Xilogravura & Social Media", img: "/assets/p3-connecting-plus.png" },
  { id: 4, title: "Lillo 2013/2014", category: "Visual Design & Social Media", img: "/assets/p4-lillo.png" },
  {id: 5, title: "SupraSoy 2013/2014", category: "Visual Design & Social Media", img: "/assets/p5-suprasoy-sports.png" },
  {id: 6, title: "Miró Marketing", category: "Brand Development", img: "/assets/p6-miro-branding.png" },//
  {id: 8, title: "Não + Fat", category: "Brand Development", img: "/assets/p8-nao-fat.png" },
  {id: 9, title: "Coca-Cola Project", category: "Fictional Project", img: "/assets/p9-coca-cola-fictional.png" },
  {id: 10, title: "Água Viva", category: "Visual Design", img: "/assets/p10-agua-viva-web.png" },
  {id: 11, title: "Azul TI", category: "Visual Design", img: "/assets/p11-azul-ti-web.png" },
  {id: 12, title: "Connecting Plus", category: "Visual Design", img: "/assets/p12-connecting-plus-web.png" },
  {id: 13, title: "Jaque Borges", category: "Visual Design", img: "/assets/p13-jaque-borges-web.png" },
  {id: 14, title: "LAP", category: "Visual Design", img: "/assets/p14-lap-web.png" },
  {id: 15, title: "Neuronio Adicional", category: "Visual Design", img: "/assets/p15-neuronio-adicional-web.png" },
  {id: 16, title: "Pet Molhado", category: "Visual Design", img: "/assets/p16-pet-molhado-web.png" },
  {id: 17, title: "Piccolo Bar e Flair", category: "Visual Design", img: "/assets/p17-piccolo-bar-e-flair-web.png" },
  {id: 18, title: "Sabiá Laranjeira Special Coffee", category: "Visual Design", img: "/assets/p18-sabia-laranjeira-special-coffee-web.png" },
  {id: 19, title: "Varb Metalúrgica", category: "Visual Design", img: "/assets/p19-varb-metalurgica-web.png" },
  {id: 21, title: "Pra Construir - Marketplace", category: "UX/UI Design", img: "/assets/p21-pra-construir-marketplace-web.png" },
];

export default function Portfolio() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Magic: Tracking mouse for the subtle "spotlight" effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#fcfaf8] text-zinc-900 overflow-x-hidden selection:bg-violet-100">
      
      {/* MAGIC LAYER 1: Interactive Spotlight */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(124, 77, 255, 0.09), transparent 80%)`
        }}
      />

      {/* MAGIC LAYER 2: Animated Mesh Gradients (Background) */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-violet-200/30 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-pink-200/20 blur-[100px] animate-bounce" style={{ animationDuration: '10s' }} />
      </div>

      {/* Hero Section */}
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      {/* The Three JS / Canvas Nebula */}
      <NebulaBackground />

      <div className="relative z-10 select-none">
        <h1 className="text-7xl md:text-6xl font-serif tracking-tighter leading-tight text-white mix-blend-difference">
          Louyse Praxedes
        </h1>
        <p className="text-sm md:text-base uppercase tracking-[0.5em] font-light mt-6 text-zinc-400">
          Senior Product Designer
        </p>
      </div>

      {/* Decorative Gradient Overlay for depth */}
      <div className="absolute inset-0 z-5 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_0%,_black_90%)] opacity-60" />

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 animate-bounce flex flex-col items-center gap-4">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
      {/* <section className="relative h-screen flex flex-col justify-center items-center text-center px-6"> */}
        {/* The "Sun" Gradient from your inspiration */}
        {/* <div className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-gradient-to-tr from-violet-300 via-pink-200 to-transparent blur-[80px] opacity-40 animate-spin-slow" />
        
        <div className="relative z-10">
          <h1 className="text-7xl md:text-9xl font-serif tracking-tighter leading-tight">
            Louyse Praxedes
          </h1>
          <p className="text-sm md:text-base uppercase tracking-[0.4em] font-light mt-4 text-zinc-500">
            Senior Product Designer
          </p>
        </div>

        <div className="absolute bottom-10 animate-bounce text-zinc-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </section> */}

      {/* Works Grid */}
      <section id="work" className="relative z-20 max-w-7xl mx-auto px-6 py-24">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl font-serif">My Work</h2>
          <span className="text-[10px] uppercase tracking-widest text-zinc-400">© 2026</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-12 md:gap-y-24">
          {projects.map((project) => (
            // <Link href={`/project/${project.id}`} key={project.id} className="group block">
            <div key={project.id} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-zinc-100">
                {/* Image with Magic Color Filter on Hover */}
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
                {/* Glassmorphism Overlay */}
                <div className="absolute inset-0 bg-violet-900/0 group-hover:bg-violet-500/10 transition-colors duration-500" />
                
                <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-2 text-[10px] uppercase font-bold tracking-widest rounded-full">
                    View Case
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-medium tracking-tight">{project.title}</h3>
                <p className="text-sm text-zinc-500 font-light">{project.category}</p>
              </div>
            </div>
            // </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <footer className="py-32 px-6 text-center border-t border-zinc-100">
        <h2 className="text-5xl md:text-7xl font-serif  mb-8">Let's create.</h2>
        <a href="mailto:loupraxedes@gmail.com" className="text-lg border-b border-zinc-900 pb-1 hover:text-violet-600 hover:border-violet-600 transition-all">
          loupraxedes@gmail.com
        </a>
      </footer>

    </div>
  );
}