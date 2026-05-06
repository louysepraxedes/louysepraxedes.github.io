import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Louyse Praxedes - Senior Product Designer",
  description: "Portfolio of Louyse Praxedes, a Senior Product Designer based in London, UK.",
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
