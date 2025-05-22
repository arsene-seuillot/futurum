import Image from "next/image";
import Link from "next/link";

export default function SecurityPageLayout() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 flex flex-col gap-6">
          <div className="border border-gray-300 p-6 rounded-lg">
            <h1 className="text-2xl font-semibold text-center">
              Les métiers de la sécurité
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 border border-gray-300 p-6 rounded-lg">
              <ul className="list-none p-0 m-0">
                <li className="mb-2">
                  <Link href="" className="hover:underline">
                    &gt; Sûreté aérienne et aéroportuaire
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="" className="hover:underline">
                    &gt; Transport de fonds
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="" className="hover:underline">
                    &gt; Télésurveillance
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="" className="hover:underline">
                    &gt; Surveillance et maintenance
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="" className="hover:underline">
                    &gt; Agents de recherche privée
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/orientation/metiers/list/securite"
                    className="hover:underline"
                  >
                    &gt; Agent/Agente de sécurité
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:w-1/3 border border-gray-300 p-4 rounded-lg flex items-center justify-center">
              <Image
                src="/images/security-image.jpg"
                alt="Security monitoring"
                width={400}
                height={250}
                layout="intrinsic"
                className="rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/4 border border-gray-300 p-6 rounded-lg flex items-center justify-center text-center text-gray-500 min-h-[300px]">
          Encart vide pour la publicité
        </div>
      </div>
    </div>
  );
}
