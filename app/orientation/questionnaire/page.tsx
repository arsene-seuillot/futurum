"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const questions = [
  {
    text: "Aimez-vous résoudre des problèmes complexes et abstraits ?",
    points: {
      numerique: 5,
      sante: 2,
      securite: 3,
      artisanat: 3,
      aeronautique: 4,
      agroalimentaire: 2,
      ferroviaire: 4,
      textile: 2,
    },
  },
  {
    text: "Êtes-vous intéressé par le fonctionnement du corps humain ?",
    points: {
      numerique: 1,
      sante: 5,
      securite: 2,
      artisanat: 1,
      aeronautique: 1,
      agroalimentaire: 3,
      ferroviaire: 1,
      textile: 1,
    },
  },
  {
    text: "Souhaitez-vous contribuer à la protection des autres ?",
    points: {
      numerique: 2,
      sante: 3,
      securite: 5,
      artisanat: 2,
      aeronautique: 2,
      agroalimentaire: 2,
      ferroviaire: 3,
      textile: 1,
    },
  },
  {
    text: "Êtes-vous manuel et précis dans votre travail ?",
    points: {
      numerique: 2,
      sante: 3,
      securite: 3,
      artisanat: 5,
      aeronautique: 4,
      agroalimentaire: 4,
      ferroviaire: 3,
      textile: 5,
    },
  },
  {
    text: "La technologie de pointe vous attire-t-elle ?",
    points: {
      numerique: 5,
      sante: 3,
      securite: 4,
      artisanat: 2,
      aeronautique: 5,
      agroalimentaire: 2,
      ferroviaire: 5,
      textile: 2,
    },
  },
  {
    text: "Êtes-vous sensible aux questions environnementales ?",
    points: {
      numerique: 3,
      sante: 4,
      securite: 2,
      artisanat: 3,
      aeronautique: 2,
      agroalimentaire: 5,
      ferroviaire: 3,
      textile: 4,
    },
  },
  {
    text: "Aimez-vous le travail d'équipe et la coordination ?",
    points: {
      numerique: 4,
      sante: 4,
      securite: 4,
      artisanat: 3,
      aeronautique: 5,
      agroalimentaire: 3,
      ferroviaire: 5,
      textile: 3,
    },
  },
  {
    text: "Êtes-vous créatif et aimez-vous concevoir des objets ?",
    points: {
      numerique: 4,
      sante: 2,
      securite: 2,
      artisanat: 5,
      aeronautique: 3,
      agroalimentaire: 3,
      ferroviaire: 2,
      textile: 5,
    },
  },
  {
    text: "Le travail en extérieur vous attire-t-il ?",
    points: {
      numerique: 2,
      sante: 2,
      securite: 4,
      artisanat: 4,
      aeronautique: 2,
      agroalimentaire: 5,
      ferroviaire: 3,
      textile: 2,
    },
  },
  {
    text: "Êtes-vous rigoureux et attentif aux détails ?",
    points: {
      numerique: 4,
      sante: 5,
      securite: 5,
      artisanat: 4,
      aeronautique: 5,
      agroalimentaire: 4,
      ferroviaire: 5,
      textile: 4,
    },
  },
  {
    text: "Aimez-vous innover et trouver de nouvelles solutions ?",
    points: {
      numerique: 5,
      sante: 3,
      securite: 3,
      artisanat: 4,
      aeronautique: 5,
      agroalimentaire: 4,
      ferroviaire: 4,
      textile: 4,
    },
  },
  {
    text: "Êtes-vous intéressé par les systèmes complexes ?",
    points: {
      numerique: 5,
      sante: 3,
      securite: 4,
      artisanat: 2,
      aeronautique: 5,
      agroalimentaire: 3,
      ferroviaire: 5,
      textile: 2,
    },
  },
  {
    text: "La sécurité et la fiabilité sont-elles importantes pour vous ?",
    points: {
      numerique: 3,
      sante: 5,
      securite: 5,
      artisanat: 3,
      aeronautique: 5,
      agroalimentaire: 3,
      ferroviaire: 5,
      textile: 3,
    },
  },
  {
    text: "Aimez-vous analyser des données et en tirer des conclusions ?",
    points: {
      numerique: 5,
      sante: 4,
      securite: 3,
      artisanat: 2,
      aeronautique: 4,
      agroalimentaire: 3,
      ferroviaire: 4,
      textile: 2,
    },
  },
  {
    text: "Êtes-vous à l'aise avec la communication et le contact humain ?",
    points: {
      numerique: 3,
      sante: 5,
      securite: 4,
      artisanat: 4,
      aeronautique: 3,
      agroalimentaire: 4,
      ferroviaire: 3,
      textile: 4,
    },
  },
  {
    text: "Aimez-vous organiser et planifier des projets ?",
    points: {
      numerique: 4,
      sante: 4,
      securite: 5,
      artisanat: 4,
      aeronautique: 5,
      agroalimentaire: 4,
      ferroviaire: 5,
      textile: 4,
    },
  },
  {
    text: "Êtes-vous intéressé par la conception et la fabrication ?",
    points: {
      numerique: 4,
      sante: 2,
      securite: 3,
      artisanat: 5,
      aeronautique: 5,
      agroalimentaire: 4,
      ferroviaire: 5,
      textile: 5,
    },
  },
  {
    text: "Souhaitez-vous un travail avec des responsabilités importantes ?",
    points: {
      numerique: 4,
      sante: 5,
      securite: 5,
      artisanat: 3,
      aeronautique: 5,
      agroalimentaire: 4,
      ferroviaire: 5,
      textile: 3,
    },
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
    <div className="py-8 flex flex-col items-center">
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
