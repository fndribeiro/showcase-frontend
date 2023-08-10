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

export default function PlatinumTrophies() {
  const sortingOptions = [
    { param: "game", order: "asc", label: "by Game ASC" },
    { param: "game", order: "desc", label: "by Game DESC" },
    { param: "achievementDate", order: "asc", label: "by Date ASC" },
    { param: "achievementDate", order: "desc", label: "by Date DESC" },
    { param: "hoursPlayed", order: "asc", label: "by Hours Played ASC" },
    { param: "hoursPlayed", order: "desc", label: "by Hours Played DESC" },
    { param: "rating", order: "asc", label: "by Rating ASC" },
    { param: "rating", order: "desc", label: "by Rating DESC" },
  ];

  const [platinumTrophies, setTrophies] = useState<PlatinumTrophy[]>([]);

  const [showOptions, setShowOptions] = useState<boolean>(false);

  const router = useRouter();

  function loadPlatinumTrophies(sortParam: string, sortDirection: string): void {
    showcaseBackendService
      .get<PlatinumTrophy[]>(
        `/platinum-trophies?sortBy=${sortParam}&direction=${sortDirection}`
      )
      .then((response) => {
        setTrophies(response.data);
      })
      .catch((error) => {
        alert(`Error: ${error.response.data.error}`);
      });
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
        <ArrowDown scrollIntoId={`platinum-trophy-${platinumTrophies.length - 1}`} />
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
          {platinumTrophies.map((trophy, index) => (
            <PlatinumTrophyCard
              key={index}
              achievementDate={trophy.achievementDate}
              game={trophy.game}
              imageUrl={trophy.imageUrl}
              index={index}
              hoursPlayed={trophy.hoursPlayed}
              rating={trophy.rating}
            />
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
}
