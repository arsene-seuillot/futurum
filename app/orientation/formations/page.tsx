import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Formations() {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <Card className="shadow-lg border-t-4 border-blue-600">
        <CardHeader className="bg-gray-50 pb-6">
          <CardTitle className="text-2xl sm:text-3xl text-blue-800">
            Les Formations
          </CardTitle>
          <CardDescription className="text-gray-600 mt-2 text-lg">
            Trouvez les parcours éducatifs menant aux métiers d'avenir.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="mb-8 text-gray-700 leading-relaxed">
            Vous cherchez une formation pour travailler dans les secteurs en
            tension ? Vous trouverez ici des formations pour chacun des
            différents secteurs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <Button
              asChild
              variant="outline"
              className="h-16 font-medium hover:bg-blue-50 hover:border-blue-300 transition-colors"
            >
              <Link
                href="/orientation/formations/securite"
                className="w-full h-full flex items-center justify-center"
              >
                Sécurité
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-16 font-medium hover:bg-blue-50 hover:border-blue-300 transition-colors"
            >
              <Link
                href="#"
                className="w-full h-full flex items-center justify-center"
              >
                Numérique
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-16 font-medium hover:bg-blue-50 hover:border-blue-300 transition-colors"
            >
              <Link
                href="#"
                className="w-full h-full flex items-center justify-center"
              >
                Agroalimentaire
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-16 font-medium hover:bg-blue-50 hover:border-blue-300 transition-colors"
            >
              <Link
                href="#"
                className="w-full h-full flex items-center justify-center"
              >
                Aéronautique
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-16 font-medium hover:bg-blue-50 hover:border-blue-300 transition-colors"
            >
              <Link
                href="#"
                className="w-full h-full flex items-center justify-center"
              >
                Artisanat
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-16 font-medium hover:bg-blue-50 hover:border-blue-300 transition-colors"
            >
              <Link
                href="#"
                className="w-full h-full flex items-center justify-center"
              >
                Ferroviaire
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-16 font-medium hover:bg-blue-50 hover:border-blue-300 transition-colors"
            >
              <Link
                href="#"
                className="w-full h-full flex items-center justify-center"
              >
                Textile
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
