import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh bg-gray-50 p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">
          Sécurité des biens et des personnes spécialité activité juridique :
          C'est quoi?
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          aspernatur optio delectus dignissimos ipsam tempora harum quisquam
          impedit voluptate beatae iusto similique earum, quibusdam consectetur
          incidunt natus nisi voluptatem dolorem.
        </p>
        <p className="text-lg text-gray-700">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          nam ducimus facere voluptatum, repellat harum, debitis distinctio amet
          molestiae quisquam natus dolorem expedita a adipisci, unde deserunt
          mollitia ipsum praesentium.
        </p>
      </div>

      <Link href="/orientation/metiers/list/securite/ckoi/secu">
        <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-6 rounded-md transition duration-300 shadow-md flex items-center">
          Répertoires des formations{" "}
          <ArrowRight className="inline h-4 w-4 ml-2" />
        </button>
      </Link>
    </div>
  );
}
