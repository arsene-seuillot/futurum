import React from "react";

interface Establishment {
  name: string;
  city: string;
  modality: string;
}

const establishments: Establishment[] = [
  {
    name: "Centre de formation permanente, Université Paris-Panthéon-Assas",
    city: "75006 - Paris",
    modality: "Formation initiale",
  },
  {
    name: "Centre de gestion universitaire de la Mi-Voix, Université du Littoral Côte d'Opale",
    city: "62228 - Calais",
    modality: "Formation initiale & Formation apprentissage",
  },
  {
    name: "CFA Beau-Frêne",
    city: "64140 - Billière",
    modality: "Formation apprentissage",
  },
  {
    name: "Collège Sciences et techniques pour l'énergie et l'environnement - Campus de Pau, Université de Pau et des Pays de l'Adour",
    city: "12000 - Rodez",
    modality: "Formation apprentissage",
  },
  {
    name: "IUT d'Aix-Marseille - site d'Aix-en-Provence, Aix-Marseille Université",
    city: "13625 - Aix-en-Provence",
    modality: "Formation apprentissage",
  },
  {
    name: "IUT de Lille - site de Roubaix, Université de Lille",
    city: "59100 - Roubaix",
    modality: "Formation initiale & Formation apprentissage",
  },
  {
    name: "IUT de Poitiers - Niort - Châtellerault - site de Niort, Université de Poitiers",
    city: "79000 - Niort",
    modality: "Formation initiale & Formation apprentissage",
  },
  {
    name: "IUT du Havre, Université Le Havre Normandie",
    city: "76610 - Le Havre",
    modality: "Formation apprentissage",
  },
  {
    name: "Service Formation Tout au Long de la Vie, Avignon Université",
    city: "84000 - Avignon",
    modality: "Formation initiale & Formation apprentissage",
  },
  {
    name: "UFR droit - Faculté de droit économie et gestion - Institut d'études judiciaires, Université Paris Cité",
    city: "92240 - Malakoff",
    modality: "Formation initiale",
  },
  {
    name: "UFR droit, économie, gestion (cycle licence) - Centre Melun, Université Paris-Panthéon-Assas",
    city: "77000 - Melun",
    modality: "Formation initiale & Formation apprentissage",
  },
];

const LicenseInfoComponent: React.FC = () => {
  return (
    <div className="font-sans max-w-3xl mx-auto my-8 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-teal-800 text-white p-5 text-center">
        <h2 className="text-xl font-bold">
          Licence Professionnelle Sécurité des biens et des personnes,
        </h2>
        <h3 className="mt-2 text-lg font-medium">
          spécialité activité juridique
        </h3>
      </div>

      <div className="p-6">
        <div className="mb-6 inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full">
          <strong className="font-semibold">Modalité de formation :</strong>{" "}
          Initiale ou Apprentissage
        </div>

        <h4 className="mb-3 text-lg font-bold text-teal-800">
          Objectifs de la licence
        </h4>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Apprendre les matières indispensables à l&apos;exercice de la
          profession d&apos;enquêteur privé et répondre aux obligations de
          formation exigées par le code de la sécurité intérieure (C.S.I.) et
          ses décrets d&apos;application, qui définit l&apos;activité comme une
          « profession libérale qui consiste, pour une personne, à recueillir,
          même sans faire état de sa qualité ni révéler l&apos;objet de sa
          mission, des informations ou renseignements destinés à des tiers, en
          vue de la défense de leurs intérêts ».
        </p>

        <div className="overflow-x-auto">
          <h4 className="mb-3 text-lg font-bold text-teal-800">
            Établissements
          </h4>
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 p-3 text-left font-semibold">
                  Nom de l&apos;établissement
                </th>
                <th className="border border-gray-200 p-3 text-left font-semibold">
                  Ville
                </th>
                <th className="border border-gray-200 p-3 text-left font-semibold">
                  Modalité de formation
                </th>
              </tr>
            </thead>
            <tbody>
              {establishments.map((est, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="border border-gray-200 p-3">{est.name}</td>
                  <td className="border border-gray-200 p-3">{est.city}</td>
                  <td className="border border-gray-200 p-3">{est.modality}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LicenseInfoComponent;
