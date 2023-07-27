"use client";

import { useRouter } from "next/navigation";

import localStorageService from "@/ports/services/local-storage-service";

interface Props {
  title: string
}

export default function Header(props: Props) {

  const router = useRouter();

  function logOut(): void {
    localStorageService.removeToken();
    router.push('');
  }

  return (
    <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
      <div className="text-white text-xl truncate" title={props.title}>{props.title}</div>
      <button onClick={logOut} className="text-white text-xl">Log Out</button>
    </header>
  );
}