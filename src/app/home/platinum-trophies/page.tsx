"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { showcaseBackendService } from "@/ports/services/showcase-backend-service";
import Footer from "@/components/home-page/footer";
import Header from "@/components/home-page/header";
import PlatinumTrophyCard from "@/components/platinum-trophies-page/platinum-trophy-card";
import localStorageService from "@/ports/services/local-storage-service";
import PlatinumTrophy from "@/domain/entities/platinum-trophies/platinum-trophy";
import ArrowDown from "@/components/utils/arrow-down";
import ArrowUp from "@/components/utils/arrow-up";
import LoadingButton from "@/components/utils/loading-button";
import Link from "next/link";

export default function PlatinumTrophies() {
   const sortingOptions = [
      { param: "game", order: "asc", label: "by Game: A-Z" },
      { param: "game", order: "desc", label: "by Game: Z-A" },
      { param: "achievementDate", order: "asc", label: "by Date: oldest" },
      {
         param: "achievementDate",
         order: "desc",
         label: "by Date: most recent",
      },
      { param: "hoursPlayed", order: "asc", label: "by Hours Played: lowest" },
      {
         param: "hoursPlayed",
         order: "desc",
         label: "by Hours Played: highest",
      },
      { param: "rating", order: "asc", label: "by Rating: lowest" },
      { param: "rating", order: "desc", label: "by Rating: highest" },
   ];

   const [platinumTrophies, setTrophies] = useState<PlatinumTrophy[]>([]);
   const [showOptions, setShowOptions] = useState<boolean>(false);
   const [isLoading, setIsLoading] = useState<boolean>(false);

   const router = useRouter();

   function loadPlatinumTrophies(
      sortParam: string,
      sortDirection: string
   ): void {
      setIsLoading(true);

      showcaseBackendService
         .get<PlatinumTrophy[]>(
            `/platinum-trophies?sortBy=${sortParam}&direction=${sortDirection}`
         )
         .then((response) => setTrophies(response.data))
         .catch((error) => alert(`Error: ${error.response?.data.error}`))
         .finally(() => setIsLoading(false));
   }

   useEffect(() => {
      if (localStorageService.tokenIsNull()) {
         router.push(process.env.SHOWCASE_BACKEND_BASE_URL!);
      }

      loadPlatinumTrophies("achievementDate", "desc");
   }, []);

   return (
      <div className="flex flex-col max-h-screen">
         <Header title={`Platinum Trophies: ${platinumTrophies.length}`} />
         <div className="fixed top-24 right-5 lg:right-1/4">
            <ArrowUp scrollIntoId="platinum-trophy-0" />
         </div>
         <div className="fixed bottom-24 right-5 lg:right-1/4">
            <ArrowDown
               scrollIntoId={`platinum-trophy-${platinumTrophies.length - 1}`}
            />
         </div>
         <div className="fixed top-20 left-3 lg:left-1/4">
            <button
               onClick={() => setShowOptions(!showOptions)}
               className="bg-gray-900 hover:bg-gray-950 text-white font-bold py-2 px-4 rounded-lg"
            >
               Sort
            </button>
            {showOptions && (
               <div className="bg-white border rounded-lg mt-2 py-2 px-4">
                  {sortingOptions.map(({ param, order, label }) => (
                     <p
                        key={`${param}-${order}`}
                        className="cursor-pointer"
                        onClick={() => loadPlatinumTrophies(param, order)}
                     >
                        {label}
                     </p>
                  ))}
               </div>
            )}
         </div>
         <div className="max-h-screen overflow-y-auto">
            <main className="flex flex-col items-center justify-evenly flex-grow-0 pb-16">
               {isLoading ? (
                  <span className="h-screen flex items-center justify-center pb-32">
                     <LoadingButton label="Loading..." />
                  </span>
               ) : (
                  platinumTrophies.map((trophy, index) => (
                     <Link
                        key={index}
                        href={`/home/platinum-trophies/${trophy.id}`}
                     >
                        <PlatinumTrophyCard
                           id={trophy.id}
                           achievementDate={trophy.achievementDate}
                           game={trophy.game}
                           imageUrl={trophy.imageUrl}
                           index={index}
                           hoursPlayed={trophy.hoursPlayed}
                           rating={trophy.rating}
                        />
                     </Link>
                  ))
               )}
            </main>
         </div>
         <Footer />
      </div>
   );
}
