"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Metiers() {
  return (
    <div>
      <Card>

        <CardHeader>
          <CardTitle>Les métiers d'avenir</CardTitle>
          <CardDescription>
            Explorez les professions en tension et porteuses d'opportunités.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
          Les métiers en tension sont ceux pour lesquels le nombre d'offres d'emploi est supérieur à celui des candidats. Ce sont donc dans CES métiers qu’il est interressant d’investir !
          </p>
          <p>
          Voici une liste des principaux métiers en tension :
          </p>
          <br />

          <Button asChild variant="outline">
          <Link href="/orientation/metiers/securite">
            Sécurité
          </Link>     
          </Button>
          <br />
          

          <Button asChild variant="outline">
          <p>
            Numérique
          </p>
          </Button>
          <br />

          <Button asChild variant="outline">
          <p>
            Agroalimentaire
          </p>
          </Button>
          <br />

          <Button asChild variant="outline">
          <p>
            Aéronautique
          </p>
          </Button>
          <br />
          
          <Button asChild variant="outline">
          <p>
            Artisanat
          </p>
          </Button>
          <br />

          <Button asChild variant="outline">
          <p>
            Ferroviaire
          </p>
          </Button>
          <br />

          <Button asChild variant="outline">
          <p>
            Textile
          </p>
          </Button>
          <br />

          {/* Contenu détaillé sur les métiers à ajouter ici */}
        </CardContent>

      </Card>

      


    </div>
  );
}
