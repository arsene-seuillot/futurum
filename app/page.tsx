import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      {/* La section Hero utilise déjà un positionnement absolu/relatif, pas besoin de container */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/troupeaux.jpg"
            alt="Étudiants"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
        </div>

        {/* Ajouter px-4 ici pour le contenu textuel */}
        <div className="px-4 h-full relative z-1">
          <div className="flex flex-col h-full justify-center items-center text-center gap-12">
            <div className="bg-white/30 backdrop-blur-xs p-8 rounded-xl shadow-lg max-w-3xl">
              <h1 className="text-4xl font-bold text-teal-800 mb-4">
                Trouvez votre voie professionnelle
              </h1>
              <p className="text-gray-700 text-lg mb-8">
                Découvrez les métiers qui vous correspondent et les formations
                adaptées à votre profil
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/orientation">
                  <Button className="bg-teal-700 hover:bg-teal-800 text-white h-auto py-6 rounded-xl flex flex-col items-center gap-2">
                    <span className="text-lg font-medium">
                      Test d'orientation
                    </span>
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </Link>

                <Link href="/metiers">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white h-auto py-6 rounded-xl flex flex-col items-center gap-2">
                    <span className="text-lg font-medium">
                      Découvrez les métiers
                    </span>
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </Link>

                <Link href="/formations">
                  <Button className="bg-teal-500 hover:bg-teal-600 text-white h-auto py-6 rounded-xl flex flex-col items-center gap-2">
                    <span className="text-lg font-medium">
                      Découvrez les formations
                    </span>
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-teal-50 to-white px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-screen-lg mx-auto">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/dos.jpg"
              alt="Agents de sécurité"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <div className="bg-teal-700 text-white py-3 px-6 rounded-lg inline-block mb-6">
              <h2 className="text-2xl font-bold">AGENT / AGENTE DE SÉCURITÉ</h2>
            </div>

            <div className="space-y-4 text-gray-700">
              <p>
                Les agents de sécurité sont de plus en plus recherchés avec la
                multiplication de sites à protéger.
              </p>
              <p>
                Pour exercer une profession réglementée de sécurité privée, il
                faut posséder un diplôme de l'Éducation nationale dans le
                domaine de la sécurité ou un titre professionnel reconnu et
                obtenu dans une école agréée par l'État.
              </p>
              <p>
                Plusieurs domaines sont accessibles avec différentes études.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-bold text-teal-800 mb-4">
                  Gardien de la paix :
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-700 mr-2">-</span>
                    CAP agent de sécurité
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-700 mr-2">-</span>
                    Bac pro métier de la sécurité
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-teal-800 mt-6 mb-4">
                  Encadrement d'agents de sécurité
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-700 mr-2">-</span>
                    BTS Management opérationnel de la sécurité
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-teal-800 mb-4">
                  Métiers de l'enquête privée
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-700 mr-2">-</span>
                    Licence professionnelle Agent de recherches privées
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-700 mr-2">-</span>
                    Sécurité des biens et des personnes spécialité activité
                    juridique
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-teal-800 mt-6 mb-4">
                  Sécurité informatique
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-700 mr-2">-</span>
                    Bac pro cybersécurité, informatique et réseaux, électronique
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-700 mr-2">-</span>
                    BTS cybersécurité, informatique et réseaux, électronique
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
