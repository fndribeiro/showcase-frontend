"use client";

import Footer from "@/components/home-page/footer";
import Header from "@/components/home-page/header";
import { useParams } from "next/navigation";

import { showcaseBackendService } from "@/ports/services/showcase-backend-service";
import { useEffect, useState } from "react";
import PlatinumTrophy from "@/domain/entities/platinum-trophies/platinum-trophy";
import PlatinumTrophyRequestBody from "@/domain/entities/platinum-trophies/platinum-trophy-request";
import User from "@/domain/entities/users/user";

export default function PlatinumTrophyDetails() {
   const params = useParams();

   const [game, setGame] = useState<string>("");
   const [achievementDate, setAchievementDate] = useState<Date>(new Date());
   const [hoursPlayed, setHoursPlayed] = useState<number>(0);
   const [rating, setRating] = useState<number>(0);
   const [imageUrl, setImageUrl] = useState<string>("");

   const [user, setUser] = useState<User>(new User("", "", false));

   useEffect(() => {
      showcaseBackendService
         .get<PlatinumTrophy>(`platinum-trophies/${params.id}`)
         .then((response) => {
            const platinumTrophy = response.data;
            setGame(platinumTrophy.game);
            setAchievementDate(platinumTrophy.achievementDate);
            setHoursPlayed(platinumTrophy.hoursPlayed);
            setRating(platinumTrophy.rating);
            setImageUrl(platinumTrophy.imageUrl);
         })
         .catch((response) => alert(response));

      showcaseBackendService
         .get<User>("/user")
         .then((response) => {
            setUser(response.data);
         })
         .catch((error) => {
            alert(error);
         });
   }, []);

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
         .put(`platinum-trophies/${params.id}`, requestBoyd)
         .then((response) => {
            alert("Trophy updated!");
         })
         .catch((response) => {
            alert(response);
         });
   }

   return (
      <div>
         <Header title={game} />
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
                     value={achievementDate.toString()}
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
               {user.isAdmin ? (
                  <button
                     type="submit"
                     className="bg-purple-900 hover:bg-purple-950 text-white font-bold py-2 px-4 rounded-lg"
                  >
                     Update
                  </button>
               ) : (
                  <button
                     type="submit"
                     className="bg-gray-400 text-white font-bold py-2 px-4 rounded-lg"
                     disabled
                     title="Update alowed only to admin users."
                  >
                     Update
                  </button>
               )}
            </div>
         </form>
         <Footer />
      </div>
   );
}
