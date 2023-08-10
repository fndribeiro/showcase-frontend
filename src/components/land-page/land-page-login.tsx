"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import ArrowUp from "../utils/arrow-up";
import LoadingButton from "@/components/utils/loading-button";

export default function LandPageLogin() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleLoginClick() {
    setIsLoading(true);

    try {
      router.push(process.env.SHOWCASE_BACKEND_BASE_URL!);
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div
      id="land-page-login"
      className="bg-land-page-title h-screen flex flex-col items-center justify-center"
    >
      <span className="pb-20">
        <ArrowUp scrollIntoId="land-page-project-goal" />
      </span>
      <p className="pb-5 text-2xl font-bold">To access more features</p>
      {isLoading ? (
        <LoadingButton />
      ) : (
        <button
          onClick={handleLoginClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
        >
          Sign in with Google
        </button>
      )}
    </div>
  );
}
