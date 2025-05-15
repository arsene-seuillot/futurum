"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";


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
          Vous cherchez une formation pour travailler dans les secteurs en tension ?
          Vous trouverez ici des formations pour chacun des différents secteurs.
        </p>
        
        <Button asChild variant="outline">
          <Link href="/orientation/formations/securite">
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
      </CardContent>
    </Card>
  );
}
