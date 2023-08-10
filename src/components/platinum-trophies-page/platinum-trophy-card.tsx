import Image from "next/image";

import PlatinumTrophy from "@/domain/entities/platinum-trophies/platinum-trophy";

export default function PlatinumTrophyCard(platinumTrophy: PlatinumTrophy) {
    return (
      <div id={`platinum-trophy-${platinumTrophy.index}`} className="flex flex-col items-center justify-evenly bg-neutral-400 rounded-md mb-5 mt-5">
        <Image
          className="rounded-md"
          src={platinumTrophy.imageUrl}
          alt="picture"
          width={200}
          height={100}
          priority
        />
        <p className="mt-2"><b>#</b> {platinumTrophy.index + 1}</p>
        <p className="ml-2 mr-2 text-sm"><b>{platinumTrophy.game}</b></p>
        <p className="text-sm"><b>Date:</b> {platinumTrophy.achievementDate.toLocaleString()}</p>
        <p className="text-sm"><b>Hours Played:</b> {platinumTrophy.hoursPlayed}</p>
        <p className="mb-2 text-sm"><b>Rating:</b> {platinumTrophy.rating}</p>
      </div>
    );
}