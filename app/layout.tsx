// app/layout.tsx
import Link from 'next/link'
import './globals.css' // si t’as un fichier CSS global

export const metadata = {
  title: 'Futurum',
  description: 'Un projet web cool',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <header>
          <nav>
            <Link href="/">Home</Link> |{' '}
            <Link href="/about">About</Link> |{' '}
            <Link href="/tools">Tools</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
