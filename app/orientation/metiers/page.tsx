import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Metiers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Les métiers d'avenir</CardTitle>
        <CardDescription>
          Explorez les professions en tension et porteuses d'opportunités.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Présentation des différents métiers, des compétences requises, des
          perspectives de carrière et des secteurs d'activité concernés.
        </p>
        {/* Contenu détaillé sur les métiers à ajouter ici */}
      </CardContent>
    </Card>
  );
}
