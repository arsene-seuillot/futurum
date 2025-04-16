import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'Futurum',
  description: 'Un projet web cool',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-50 text-gray-800 font-sans">
        <header className="bg-white shadow-md py-4 px-8">
          <nav className="flex gap-6 text-lg font-medium">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
            <Link href="/tools" className="hover:text-blue-600">Tools</Link>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto px-6 py-10">{children}</main>
      </body>
    </html>
  )
}

