import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Bienvenue sur Futurum</CardTitle>
        <CardDescription>
          Le site pour vous aider à trouver votre voie.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-6">
          Explorez les différentes sections pour découvrir les métiers d'avenir,
          les formations associées et évaluer vos intérêts grâce à notre
          questionnaire.
        </p>
        <div className="flex flex-col space-y-2">
          <Button asChild variant="link" className="justify-start">
            <Link href="/orientation">Commencer l'exploration</Link>
          </Button>
          <Button asChild variant="link" className="justify-start">
            <Link href="/orientation/questionnaire">
              Faire le questionnaire d'orientation
            </Link>
          </Button>
          <Button asChild variant="link" className="justify-start">
            <Link href="/about">En savoir plus sur le projet</Link>
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground">
          Futurum - Votre avenir commence ici.
        </p>
      </CardFooter>
    </Card>
  );
}
