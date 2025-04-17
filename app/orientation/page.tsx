import Link from 'next/link'

export default function Orientation() {
  return (
    <>
      <h1>Aide à l'orientation</h1>
      <ul>
        <li><Link href="/orientation/metiers">Les métiers</Link></li>
        <li><Link href="/orientation/formations">Les formations</Link></li>
        <li><Link href="/orientation/questionnaire">Questionnaire d'orientation</Link></li>
      </ul>
    </>
  )
}