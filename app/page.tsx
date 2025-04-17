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
            <Link href="/orientation">Aide à l'orientation</Link>
          </li>
          <li>
            <Link href="/orientation/questionnaire">Questionnaire d'orientation</Link>
          </li>
      </ul>
    </main>
  )
}
