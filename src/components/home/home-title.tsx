import profilePicture from "../../resources/images/profile.jpg";
import Image from "next/image";
import ArrowDown from "../utils/arrow-down";

export default function HomeTitle() {
  return (
    <div className="bg-home-title h-screen">
      <div className="flex h-5/6 items-center justify-center">
        <div>
          <div className="flex">
            <Image className="rounded-full" src={profilePicture.src} alt="profile picture" width={131} height={100}/>
            <span className="pl-1 pt-28 text-xl font-bold">Hi Im Fernando Ribeiro</span>
          </div>
          <p className="pl-2">and this is my development features showcase!</p>
        </div>
      </div>
      <span className="flex items-center justify-center">
        <ArrowDown/>
      </span>
    </div>
  );
}
