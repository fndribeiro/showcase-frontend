import Image from "next/image";
import logo from "../../resources/images/logo-no-company-name.png"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between absolute bottom-0 left-0 w-full">
      <div className="flex items-center">
        <Image 
            src={logo}
            alt="logo"
            width={50}
            height={50}
        />
      </div>
      <div className="text-white text-xs">All rights reserved to Fernando Ribeiro Web Development</div>
    </footer>
  );
}
