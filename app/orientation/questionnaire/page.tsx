'use client'
import { useState } from 'react'

const questions = [
  {
    text: "Aimez-vous résoudre des problèmes complexes et abstraits ?",
    scores: [5, 2, 3, 3, 4, 2, 4, 2]
  },
  {
    text: "Êtes-vous intéressé par le fonctionnement du corps humain ?",
    scores: [1, 5, 2, 1, 1, 3, 1, 1]
  },
  {
    text: "Souhaitez-vous contribuer à la protection des autres ?",
    scores: [2, 3, 5, 2, 2, 2, 3, 1]
  },
  {
    text: "Êtes-vous manuel et précis dans votre travail ?",
    scores: [2, 3, 3, 5, 4, 4, 3, 5]
  },
  {
    text: "La technologie de pointe vous attire-t-elle ?",
    scores: [5, 3, 4, 2, 5, 2, 5, 2]
  },
  {
    text: "Êtes-vous sensible aux questions environnementales ?",
    scores: [3, 4, 2, 3, 2, 5, 3, 4]
  },
  {
    text: "Aimez-vous le travail d'équipe et la coordination ?",
    scores: [4, 4, 4, 3, 5, 3, 5, 3]
  },
  {
    text: "Êtes-vous créatif et aimez-vous concevoir des objets ?",
    scores: [4, 2, 2, 5, 3, 3, 2, 5]
  },
  {
    text: "Le travail en extérieur vous attire-t-il ?",
    scores: [2, 2, 4, 4, 2, 5, 3, 2]
  },
  {
    text: "Êtes-vous rigoureux et attentif aux détails ?",
    scores: [4, 5, 5, 4, 5, 4, 5, 4]
  },
  {
    text: "Aimez-vous innover et trouver de nouvelles solutions ?",
    scores: [5, 3, 3, 4, 5, 4, 4, 4]
  },
  {
    text: "Êtes-vous intéressé par les systèmes complexes ?",
    scores: [5, 3, 4, 2, 5, 3, 5, 2]
  },
  {
    text: "La sécurité et la fiabilité sont-elles importantes pour vous ?",
    scores: [3, 5, 5, 3, 5, 3, 5, 3]
  },
  {
    text: "Aimez-vous analyser des données et en tirer des conclusions ?",
    scores: [5, 4, 3, 2, 4, 3, 4, 2]
  },
  {
    text: "Êtes-vous à l'aise avec la communication et le contact humain ?",
    scores: [3, 5, 4, 4, 3, 4, 3, 4]
  },
  {
    text: "Aimez-vous organiser et planifier des projets ?",
    scores: [4, 4, 5, 4, 5, 4, 5, 4]
  },
  {
    text: "Êtes-vous intéressé par la conception et la fabrication ?",
    scores: [4, 2, 3, 5, 5, 4, 5, 5]
  },
  {
    text: "Souhaitez-vous un travail avec des responsabilités importantes ?",
    scores: [4, 5, 5, 3, 5, 4, 5, 3]
  }
]

const sectors = [
  "Numérique",
  "Santé",
  "Sécurité",
  "Artisanat",
  "Aéronautique",
  "Agroalimentaire",
  "Ferroviaire",
  "Textile"
]

export default function Questionnaire() {
  const [answers, setAnswers] = useState<(boolean | null)[]>(Array(questions.length).fill(null))
  const [result, setResult] = useState<string | null>(null)

  const handleAnswer = (index: number, answer: boolean) => {
    const newAnswers = [...answers]
    newAnswers[index] = answer
    setAnswers(newAnswers)
  }

  const calculateResult = () => {
    const scores = Array(sectors.length).fill(0)
    answers.forEach((answer, i) => {
      if (answer === true) {
        questions[i].scores.forEach((score, j) => {
          scores[j] += score
        })
      }
    })
    const maxIndex = scores.indexOf(Math.max(...scores))
    setResult(sectors[maxIndex])
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">🧭 Questionnaire d’orientation</h1>

      {questions.map((q, index) => (
        <div key={index} className="mb-6">
          <p className="font-medium">{q.text}</p>
          <div className="flex gap-4 mt-2">
            <button
              className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200
                ${answers[index] === true
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-blue-100 text-gray-700'}`}
              onClick={() => handleAnswer(index, true)}
            >
              Oui
            </button>
            <button
              className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200
                ${answers[index] === false
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 hover:bg-red-100 text-gray-700'}`}
              onClick={() => handleAnswer(index, false)}
            >
              Non
            </button>
          </div>
        </div>
      ))}

      <button
        onClick={calculateResult}
        className="mt-6 px-6 py-3 rounded-xl font-bold text-white bg-green-600 hover:bg-green-700 transition"
      >
        Voir mon secteur recommandé
      </button>

      {result && (
        <div className="mt-6 text-xl font-semibold">
          🧩 <span className="text-gray-800">Secteur recommandé :</span>{' '}
          <span className="text-blue-600">{result}</span>
        </div>
      )}
    </div>
  )
}
