"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(boolean | null)[]>(
    Array(questions.length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: boolean) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = value;
    setAnswers(updatedAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
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

    if (Object.keys(scores).length === 0) {
      return "Aucun secteur dominant trouvé (essayez de répondre 'Oui' à certaines questions)";
    }

    const best = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];

    return best[0];
  };

  const progressValue =
    ((currentQuestionIndex + (showResult ? 1 : 0)) / questions.length) * 100;

  return (
    <div className="container py-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Questionnaire d'orientation
      </h1>

      {/* Barre de progression */}
      <Progress value={progressValue} className="w-full max-w-md mb-8" />

      {!showResult && (
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>
              Question {currentQuestionIndex + 1}/{questions.length}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-medium mb-4">
              {questions[currentQuestionIndex].text}
            </p>
            <div className="flex justify-center gap-4">
              <Button
                variant={
                  answers[currentQuestionIndex] === true ? "default" : "outline"
                }
                onClick={() => handleAnswer(true)}
                size="lg"
              >
                Oui
              </Button>
              <Button
                variant={
                  answers[currentQuestionIndex] === false
                    ? "destructive"
                    : "outline"
                }
                onClick={() => handleAnswer(false)}
                size="lg"
              >
                Non
              </Button>
            </div>
            {/* Bouton Précédent (optionnel) */}
            {currentQuestionIndex > 0 && (
              <Button
                variant="link"
                onClick={() =>
                  setCurrentQuestionIndex(currentQuestionIndex - 1)
                }
                className="mt-4"
              >
                Précédent
              </Button>
            )}
          </CardContent>
        </Card>
      )}

      {showResult && (
        <Card className="mt-8 w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Secteur recommandé :</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-2xl font-semibold">{calculateResult()}</p>
            {/* Bouton pour recommencer */}
            <Button
              variant="outline"
              onClick={() => {
                setCurrentQuestionIndex(0);
                setAnswers(Array(questions.length).fill(null));
                setShowResult(false);
              }}
              className="mt-6"
            >
              Recommencer le questionnaire
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
