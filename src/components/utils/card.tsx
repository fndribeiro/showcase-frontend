import Image from "next/image";
import whoAmIPicture from "../../resources/images/who-am-i-card.jpg"

export default function Card() {
  return (
    <div>
      <Image
        className="w-full"
        src={whoAmIPicture.src}
        alt="developer working"
        width={100}
        height={100}
      />
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>
    </div>
  );
}
