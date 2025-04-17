import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Formations() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Les Formations</CardTitle>
        <CardDescription>
          Trouvez les parcours éducatifs menant aux métiers d'avenir.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Présentation détaillée des différentes formations disponibles, des
          prérequis, des débouchés et des établissements qui les proposent.
        </p>
        {/* Contenu détaillé sur les formations à ajouter ici */}
      </CardContent>
    </Card>
  );
}
