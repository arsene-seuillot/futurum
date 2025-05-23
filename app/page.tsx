import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                <Link href="/orientation/questionnaire" className="w-full">
                  <Button className="bg-teal-700 hover:bg-teal-800 text-white h-auto py-6 rounded-xl w-full flex flex-col items-center gap-2">
                    <span className="text-lg font-medium">
                      Test d'orientation
                    </span>
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </Link>

                <Link href="orientation/metiers" className="w-full">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white h-auto py-6 rounded-xl w-full flex flex-col items-center gap-2">
                    <span className="text-lg font-medium">
                      Découvrez les métiers
                    </span>
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </Link>

                <Link href="orientation/formations" className="w-full">
                  <Button className="bg-teal-500 hover:bg-teal-600 text-white h-auto py-6 rounded-xl w-full flex flex-col items-center gap-2">
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
    </div>
  );
}
