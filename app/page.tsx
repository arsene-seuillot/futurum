import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div>Bienvenue sur Futurum, le site d'Elsa.</div>
      <ul>
          <li>
            <Link href="/about">À propos</Link>
          </li>
          <li>
            <Link href="/tools">Tous les outils</Link>
          </li>
          <li>
            <Link href="/tools/tool1">Tool 1</Link>
          </li>
          <li>
            <Link href="/tools/tool2">Tool 2</Link>
          </li>
      </ul>
    </main>
  )
}
