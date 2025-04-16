import Link from 'next/link'

export default function Tools() {
  return (
    <>
      <h1>Outils</h1>
      <ul>
        <li><Link href="/tools/tool1">Tool 1</Link></li>
        <li><Link href="/tools/tool2">Tool 2</Link></li>
      </ul>
    </>
  )
}