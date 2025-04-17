"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button"; // Assurez-vous que le chemin d'importation est correct
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Assurez-vous que le chemin d'importation est correct

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

    // Gérer le cas où aucune réponse positive n'est donnée
    if (Object.keys(scores).length === 0) {
      return "Aucun secteur dominant trouvé (essayez de répondre 'Oui' à certaines questions)";
    }

    const best = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
    // Pas besoin de vérifier `best` ici car on a déjà géré le cas où scores est vide
    return best[0];
  };

  // Vérifie si toutes les questions ont été répondues
  const allAnswered = answers.every((answer) => answer !== null);

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Questionnaire d'orientation</h1>

      {questions.map((q, index) => (
        <div key={index} className="mb-4">
          <p className="font-medium mb-2">{q.text}</p>
          <div className="flex gap-4">
            <Button
              variant={answers[index] === true ? "default" : "outline"}
              onClick={() => handleAnswer(index, true)}
            >
              Oui
            </Button>
            <Button
              variant={answers[index] === false ? "destructive" : "outline"}
              onClick={() => handleAnswer(index, false)}
            >
              Non
            </Button>
          </div>
        </div>
      ))}

      <Button
        className="mt-6"
        onClick={() => setShowResult(true)}
        disabled={!allAnswered || showResult} // Désactiver si pas toutes les réponses ou si résultat déjà affiché
      >
        Voir mon résultat
      </Button>

      {showResult &&
        allAnswered && ( // Afficher seulement si showResult est vrai ET toutes les questions sont répondues
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Secteur recommandé :</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl">{calculateResult()}</p>
            </CardContent>
          </Card>
        )}
      {showResult &&
        !allAnswered && ( // Message si on clique sur voir résultat sans avoir tout répondu
          <p className="mt-4 text-red-600">
            Veuillez répondre à toutes les questions.
          </p>
        )}
    </div>
  );
}
