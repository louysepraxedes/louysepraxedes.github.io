import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Louyse Praxedes | Senior Product Designer & UX/UI Specialist",
  description:
    "Portfólio de Louyse Praxedes — Product Designer sênior especializada em UX e UI, dedicada a criar experiências digitais estratégicas, acessíveis e emocionalmente envolventes para marcas e produtos ambiciosos.",
  keywords: [
    "Product Designer",
    "UX Designer",
    "UI Designer",
    "UX/UI",
    "Design de Produto",
    "Design de Experiência",
    "Design de Interface",
    "Pesquisa de Usuário",
    "Design Systems",
    "Portfólio de Design",
  ],
  authors: [{ name: "Louyse Praxedes", url: "https://louysepraxedes.github.io" }],
  openGraph: {
    title: "Louyse Praxedes | Senior Product Designer & UX/UI Specialist",
    description:
      "Portfólio de Louyse Praxedes — Product Designer sênior focada em UX e UI, desenhando experiências digitais elegantes, inclusivas e orientadas a resultado.",
    type: "website",
    url: "https://louysepraxedes.github.io",
    siteName: "Louyse Praxedes Portfolio",
    locale: "pt-BR",
    images: [
      {
        url: "/assets/p7-gorilla-mobile-app.png",
        alt: "Portfólio de Louyse Praxedes - Product Designer UX/UI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Louyse Praxedes | Senior Product Designer & UX/UI Specialist",
    description:
      "Portfólio de Louyse Praxedes — Product Designer sênior especializada em UX e UI, criando experiências digitais estratégicas e acessíveis.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50">
            <Navbar />
            <main className="pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
