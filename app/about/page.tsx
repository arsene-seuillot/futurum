import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function About() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>À propos de Futurum</CardTitle>
        <CardDescription>
          Découvrez l'objectif et l'équipe derrière ce projet.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Futurum est une initiative visant à éclairer les parcours
          d'orientation professionnelle vers les secteurs en demande. Nous
          fournissons des informations sur les métiers, les formations et un
          outil d'auto-évaluation pour aider chacun à trouver sa voie.
        </p>
        {/* Ajouter plus de détails sur le projet, l'équipe, etc. ici */}
      </CardContent>
    </Card>
  );
}
