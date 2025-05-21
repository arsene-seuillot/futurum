import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

// Définir une interface pour la structure d'une formation
interface TrainingCourse {
  id: number;
  title: string;
  provider: string; // Organisme de formation
  duration: string; // Durée de la formation
  description: string; // Courte description
  image?: {
    url: string;
    alt: string;
    position: "left" | "right"; // Pour gérer l'image principale ou les petites images
  };
  modules?: { id: number; title: string }[]; // Pour la section principale (modules liés)
  targetAudience?: string; // Public visé
}

// Données d'exemple pour les formations (remplacez par vos données)
const trainingData: TrainingCourse[] = [
  {
    id: 1,
    title: "Formation Développeur Web Junior",
    provider: "Tech Academy",
    duration: "6 mois",
    description:
      "Apprenez les bases du développement web moderne : HTML, CSS, JavaScript, React...",
    image: {
      url: "https://placehold.co/800x400", // Utilisation de placehold.co pour l'image principale
      alt: "Formation Développeur Web",
      position: "left",
    },
    modules: [
      { id: 2, title: "Module 1 : Introduction au Web" },
      { id: 3, title: "Module 2 : Frontend avec React" },
      { id: 4, title: "Module 3 : Backend avec Node.js" },
    ],
    targetAudience: "Jeunes 18-25 ans",
  },
  {
    id: 5,
    title: "Initiation à la Cybersécurité",
    provider: "CyberSec School",
    duration: "3 semaines",
    description:
      "Comprenez les enjeux de la sécurité numérique et apprenez les bonnes pratiques.",
    image: {
      url: "https://placehold.co/150x150", // Utilisation de placehold.co pour une petite image
      alt: "Formation Cybersécurité",
      position: "right",
    },
    targetAudience: "Tous jeunes",
  },
  {
    id: 6,
    title: "Design Graphique pour Débutants",
    provider: "Creative Studio",
    duration: "2 mois",
    description:
      "Découvrez les outils et techniques du design graphique : Photoshop, Illustrator...",
    image: {
      url: "https://placehold.co/150x150", // Utilisation de placehold.co pour une petite image
      alt: "Formation Design Graphique",
      position: "right",
    },
    targetAudience: "Jeunes créatifs",
  },
  {
    id: 7,
    title: "Gestion de Projet Agile (Scrum)",
    provider: "Project Institute",
    duration: "1 mois",
    description:
      "Apprenez la méthodologie Agile pour gérer efficacement vos projets.",
    image: {
      url: "https://placehold.co/150x150", // Utilisation de placehold.co pour une petite image
      alt: "Formation Gestion de Projet",
      position: "right",
    },
    targetAudience: "Jeunes leaders",
  },
];

export default function TrainingPage() {
  const featuredTraining = trainingData[0]; // La première formation comme formation "en vedette"
  const otherTrainings = trainingData.slice(1); // Les autres formations

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 flex items-center">
        Formations en Vedette <span className="ml-2 text-gray-500">&gt;</span>
      </h1>

      {/* Section Formation en vedette */}
      {featuredTraining && (
        <Card className="mb-6">
          <CardContent className="p-0 flex flex-col md:flex-row">
            {featuredTraining.image && (
              <div
                className={`relative w-full md:w-2/3 h-64 md:h-auto ${featuredTraining.image.position === "left" ? "md:order-1" : "md:order-2"}`}
              >
                <Image
                  src={featuredTraining.image.url}
                  alt={featuredTraining.image.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )}
            <div
              className={`p-6 w-full md:w-1/3 ${featuredTraining.image?.position === "left" ? "md:order-2" : "md:order-1"}`}
            >
              <div className="flex items-center mb-2 text-sm text-gray-500">
                {/* Icône si besoin */}
                <span>{featuredTraining.provider}</span>
              </div>
              <CardTitle className="text-xl font-bold mb-2">
                {featuredTraining.title}
              </CardTitle>
              <CardDescription className="text-sm text-gray-600 mb-4">
                Durée : {featuredTraining.duration} | Public visé :{" "}
                {featuredTraining.targetAudience}
                <br />
                {featuredTraining.description}
              </CardDescription>
              {featuredTraining.modules &&
                featuredTraining.modules.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Modules principaux :
                    </h3>
                    <ul>
                      {featuredTraining.modules.map((module) => (
                        <li
                          key={module.id}
                          className="text-sm text-gray-700 mb-1"
                        >
                          - {module.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              <div className="mt-4 text-right">
                <Link
                  href="#"
                  className="text-blue-600 text-sm hover:underline"
                >
                  Voir les détails de la formation
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Autres formations */}
      <div className="grid gap-6">
        <h2 className="text-2xl font-bold mb-4">
          Découvrir d'autres formations :
        </h2>
        {otherTrainings.map((training) => (
          <Card key={training.id}>
            <CardContent className="p-4 flex items-center">
              <div className="flex-grow">
                <div className="flex items-center mb-1 text-sm text-gray-500">
                  {/* Icône si besoin */}
                  <span>
                    {training.provider} - {training.duration}
                  </span>
                </div>
                <Link
                  href="#"
                  className="text-lg font-semibold leading-tight hover:underline"
                >
                  {training.title}
                </Link>
                <CardDescription className="text-sm text-gray-600 mt-1">
                  {training.description}
                </CardDescription>
              </div>
              {training.image && (
                <div className={`relative w-24 h-24 ml-4 flex-shrink-0`}>
                  <Image
                    src={training.image.url}
                    alt={training.image.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
