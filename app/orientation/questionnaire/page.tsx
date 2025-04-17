"use client";
import { useState } from "react";

const questions = [
  {
    text: "Aimes-tu les mathématiques ?",
    points: { ingenierie: 1 },
  },
  {
    text: "Tu veux aider les autres au quotidien ?",
    points: { sante: 1 },
  },
  {
    text: "Tu aimes créer ou dessiner ?",
    points: { art: 1 },
  },
  {
    text: "Tu aimes résoudre des problèmes techniques ?",
    points: { ingenierie: 1 },
  },
  {
    text: "Tu es intéressé par le fonctionnement du corps humain ?",
    points: { sante: 1 },
  },
];

export default function Questionnaire() {
  const [answers, setAnswers] = useState<(boolean | null)[]>(
    Array(questions.length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index: number, value: boolean) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const calculateResult = () => {
    const scores: Record<string, number> = {};

    answers.forEach((answer, i) => {
      if (answer) {
        const q = questions[i];
        Object.entries(q.points).forEach(([secteur, pts]) => {
          scores[secteur] = (scores[secteur] || 0) + pts;
        });
      }
    });

    const best = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
    return best ? best[0] : "Aucun secteur trouvé";
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Questionnaire d'orientation</h1>

      {questions.map((q, index) => (
        <div key={index} className="mb-4">
          <p className="font-medium mb-2">{q.text}</p>
          <div className="flex gap-4">
            <button
              onClick={() => handleAnswer(index, true)}
              className={`px-4 py-2 rounded-xl font-medium transition 
          ${
            answers[index] === true
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-blue-100"
          }
        `}
            >
              Oui
            </button>
            <button
              onClick={() => handleAnswer(index, false)}
              className={`px-4 py-2 rounded-xl font-medium transition 
          ${
            answers[index] === false
              ? "bg-orange-500 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-orange-100"
          }
        `}
            >
              Non
            </button>
          </div>
        </div>
      ))}

      <button
        className="btn mt-6 bg-blue-700 hover:bg-blue-800"
        onClick={() => setShowResult(true)}
      >
        Voir mon résultat
      </button>

      {showResult && (
        <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Secteur recommandé :</h2>
          <p className="text-2xl">{calculateResult()}</p>
        </div>
      )}
    </div>
  );
}

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Questionnaire() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Questionnaire d'aide à l'orientation</CardTitle>
        <CardDescription>
          Ce questionnaire vous aidera à identifier les secteurs qui
          correspondent le mieux à vos intérêts et compétences.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Répondez aux questions suivantes pour obtenir une recommandation
          personnalisée.
        </p>
        {/* Intégrer le questionnaire interactif ici */}
      </CardContent>
      <CardFooter>
        <Button>Commencer le questionnaire</Button> {/* Bouton placeholder */}
      </CardFooter>
    </Card>
  );
}
