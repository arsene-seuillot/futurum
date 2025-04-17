import Link from "next/link";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";

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
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 max-w-screen-2xl items-center">
            <nav className="flex items-center space-x-4 lg:space-x-6">
              <Link
                href="/"
                className="mr-6 flex items-center space-x-2 font-bold"
              >
                Futurum
              </Link>
              <Link
                href="/orientation"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Orientation
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                À propos
              </Link>
            </nav>
          </div>
        </header>
        <main className="container max-w-screen-lg mx-auto px-4 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
