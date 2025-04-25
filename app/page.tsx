import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative min-h-[500px] h-[80vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/troupeaux.jpg"
            alt="Étudiants"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
        </div>

        <div className="px-4 md:px-8 h-full relative z-10">
          <div className="flex flex-col h-full justify-center items-center text-center gap-6 md:gap-12">
            <div className="bg-white/30 backdrop-blur-sm p-4 md:p-8 rounded-xl shadow-lg max-w-xs sm:max-w-lg md:max-w-3xl w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-800 mb-2 md:mb-4">
                Trouvez votre voie professionnelle
              </h1>
              <p className="text-gray-700 text-base md:text-lg mb-4 md:mb-8">
                Découvrez les métiers qui vous correspondent et les formations
                adaptées à votre profil
              </p>

              <div className="flex flex-col md:flex-row gap-4 justify-around w-full">
                <Link href="/orientation" className="w-full">
                  <Button className="bg-teal-700 hover:bg-teal-800 text-white h-auto py-4 md:py-6 px-2 md:px-4 rounded-xl flex flex-col items-center gap-2 w-full">
                    <span className="text-sm sm:text-base md:text-lg font-medium">
                      Test d'orientation
                    </span>
                    <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                </Link>

                <Link href="orientation/metiers" className="w-full">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white h-auto py-4 md:py-6 px-2 md:px-4 rounded-xl flex flex-col items-center gap-2 w-full">
                    <span className="text-sm sm:text-base md:text-lg font-medium">
                      Découvrez les métiers
                    </span>
                    <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                </Link>

                <Link href="orientation/formations" className="w-full">
                  <Button className="bg-teal-500 hover:bg-teal-600 text-white h-auto py-4 md:py-6 px-2 md:px-4 rounded-xl flex flex-col items-center gap-2 w-full">
                    <span className="text-sm sm:text-base md:text-lg font-medium">
                      Découvrez les formations
                    </span>
                    <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
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
