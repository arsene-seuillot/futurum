import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Orientation() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Aide à l'orientation</CardTitle>
        <CardDescription>
          Explorez les ressources pour construire votre avenir professionnel.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col space-y-3">
        <Button asChild variant="outline">
          <Link href="/orientation/metiers">
            Découvrir les métiers d'avenir
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/orientation/formations">Explorer les formations</Link>
        </Button>
        <Button asChild variant="default">
          <Link href="/orientation/questionnaire">
            Commencer le questionnaire
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
