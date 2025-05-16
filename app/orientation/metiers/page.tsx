import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Metiers() {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <Card className="shadow-lg border-t-4 border-blue-600">
        <CardHeader className="bg-gray-50 pb-6">
          <CardTitle className="text-2xl sm:text-3xl text-blue-800">
            Les métiers d'avenir
          </CardTitle>
          <CardDescription className="text-gray-600 mt-2 text-lg">
            Explorez les professions en tension et porteuses d'opportunités.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="mb-4 text-gray-700 leading-relaxed">
            Les métiers en tension sont ceux pour lesquels le nombre d'offres
            d'emploi est supérieur à celui des candidats. Ce sont donc dans CES
            métiers qu'il est interressant d'investir !
          </p>
          <p className="mb-8 text-gray-700 font-medium">
            Voici une liste des principaux métiers en tension :
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <Button
              asChild
              variant="outline"
              className="h-16 font-medium hover:bg-blue-50 hover:border-blue-300 transition-colors"
            >
              <Link
                href="/orientation/metiers/securite"
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
