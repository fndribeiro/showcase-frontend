"use client";

import Footer from "@/components/home-page/footer";
import Header from "@/components/home-page/header";
import { useState } from "react";

import { showcaseBackendService } from "@/ports/services/showcase-backend-service";
import PlatinumTrophyRequestBody from "@/domain/entities/platinum-trophies/platinum-trophy-request";
import { useRouter } from "next/navigation";

export default function AddPlatinumTrophy() {
   const [game, setGame] = useState<string>("");
   const [achievementDate, setAchievementDate] = useState<Date>(new Date());
   const [hoursPlayed, setHoursPlayed] = useState<number>(0);
   const [rating, setRating] = useState<number>(0);
   const [imageUrl, setImageUrl] = useState<string>("");

   const router = useRouter();

   function handleSubmit(event: any) {
      event.preventDefault();

      const requestBoyd = new PlatinumTrophyRequestBody(
         game,
         achievementDate,
         hoursPlayed,
         rating,
         imageUrl
      );

      showcaseBackendService
         .post("/platinum-trophies", requestBoyd)
         .then((response) => {
            alert("Trophy created!");
            router.push("home/platinum-trophies");
         })
         .catch((response) => {
            alert(response);
         });
   }

   function clearFields() {
      setGame("");
      setAchievementDate(new Date());
      setHoursPlayed(0);
      setRating(0);
      setImageUrl("");
   }

   return (
      <div>
         <Header title="Add Platinum Trophy" />
         <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 xl:grid-cols-2">
               <div className="m-2 w-full">
                  <label
                     htmlFor="game"
                     className="block text-gray-700 font-bold mb-2"
                  >
                     Game:
                  </label>
                  <input
                     type="text"
                     id="game"
                     className="py-2 px-3 w-11/12 bg-gray-100"
                     value={game}
                     onChange={(e) => setGame(e.target.value)}
                     required
                  />
               </div>
               <div className="m-2 w-full">
                  <label
                     htmlFor="achievementDate"
                     className="block text-gray-700 font-bold mb-2"
                  >
                     Achievement Date:
                  </label>
                  <input
                     type="date"
                     id="achievementDate"
                     className="py-2 px-3 w-11/12 bg-gray-100"
                     value={achievementDate.toISOString().split("T")[0]}
                     onChange={(e) => {
                        setAchievementDate(new Date(e.target.value));
                     }}
                     required
                  />
               </div>
               <div className="m-2 w-full">
                  <label
                     htmlFor="hoursPlayed"
                     className="block text-gray-700 font-bold mb-2"
                  >
                     Hours Played:
                  </label>
                  <input
                     type="number"
                     id="hoursPlayed"
                     className="py-2 px-3 w-11/12 bg-gray-100"
                     value={hoursPlayed}
                     onChange={(e) => setHoursPlayed(parseInt(e.target.value))}
                     required
                     min={1}
                  />
               </div>
               <div className="m-2 w-full">
                  <label
                     htmlFor="rating"
                     className="block text-gray-700 font-bold mb-2"
                  >
                     Rating:
                  </label>
                  <input
                     type="number"
                     id="rating"
                     className="py-2 px-3 w-11/12 bg-gray-100"
                     value={rating}
                     onChange={(e) => {
                        setRating(parseInt(e.target.value));
                     }}
                     min={1}
                     max={10}
                     required
                  />
               </div>
               <div className="m-2 w-full">
                  <label
                     htmlFor="imageUrl"
                     className="block text-gray-700 font-bold mb-2"
                  >
                     Image URL:
                  </label>
                  <input
                     type="text"
                     id="imageUrl"
                     className="py-2 px-3 w-11/12 bg-gray-100"
                     value={imageUrl}
                     onChange={(e) => setImageUrl(e.target.value)}
                     required
                  />
               </div>
            </div>
            <div className="flex justify-end gap-1 m-5">
               <button
                  type="submit"
                  className="bg-purple-900 hover:bg-purple-950 text-white font-bold py-2 px-4 rounded-lg"
               >
                  Submit
               </button>
               <button
                  type="reset"
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg"
                  onClick={clearFields}
               >
                  Clear
               </button>
            </div>
         </form>
         <Footer />
      </div>
   );
}
