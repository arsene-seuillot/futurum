import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Metier_Securite() {
  return (
    <div>
      <Card>
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
                <h2 className="text-2xl font-bold">
                  AGENT / AGENTE DE SÉCURITÉ
                </h2>
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
                      Bac pro cybersécurité, informatique et réseaux,
                      électronique
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
      </Card>
    </div>
  );
}
