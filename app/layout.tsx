import Link from "next/link";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Futurum",
  description: "Un projet web cool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <header className="border-b bg-white sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/">
                <div className="bg-teal-700 text-white font-bold py-2 px-4 rounded">
                  FUTURUM
                </div>
              </Link>
              <p className="text-sm font-medium text-gray-600 hidden sm:block">
                Votre avenir commence ici
              </p>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Button
                variant="ghost"
                asChild
                className="hover:text-teal-700 transition-colors font-medium"
              >
                <Link href="/actus">Actualité</Link>
              </Button>
              <Button
                variant="ghost"
                asChild
                className="hover:text-teal-700 transition-colors font-medium"
              >
                <Link href="/">Témoignages</Link>
              </Button>
              <Button
                variant="ghost"
                asChild
                className="hover:text-teal-700 transition-colors font-medium"
              >
                <Link href="/">Évènements</Link>
              </Button>
              <Button
                variant="ghost"
                asChild
                className="hover:text-teal-700 transition-colors font-medium"
              >
                <Link href="/">À propos</Link>
              </Button>
            </div>

            <div className="relative w-full max-w-[200px]">
              <Input
                type="text"
                placeholder="Rechercher..."
                className="pr-8 rounded-full border-gray-300 focus:border-teal-500 focus:ring-teal-500"
              />
              <Button
                size="icon"
                variant="ghost"
                className="absolute right-0 top-0 h-full text-gray-500"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>
        <main className="px-4 py-10">{children}</main>
        <footer className="bg-gray-100 py-8 mt-auto px-4">
          <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="bg-teal-700 text-white font-bold py-2 px-4 rounded">
                FUTURUM
              </div>
              <p className="text-sm font-medium text-gray-600">
                © 2024 Tous droits réservés
              </p>
            </div>

            <div className="flex gap-6">
              <Link
                href="/contact"
                className="text-gray-700 hover:text-teal-700 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/mentions-legales"
                className="text-gray-700 hover:text-teal-700 transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/confidentialite"
                className="text-gray-700 hover:text-teal-700 transition-colors"
              >
                Confidentialité
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
