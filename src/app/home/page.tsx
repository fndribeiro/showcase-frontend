"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { showcaseBackendService } from "@/ports/services/showcase-backend-service";
import User from "@/domain/entities/users/user";
import Header from "@/components/home-page/header";
import Footer from "@/components/home-page/footer";
import Button from "@/components/home-page/button";
import localStorageService from "@/ports/services/local-storage-service";

export default function HomePage() {

  const [user, setUser] = useState<User>(new User('', ''));

  const router = useRouter();

  useEffect(() => {

    if (localStorageService.tokenIsNull()) {
      router.push(process.env.SHOWCASE_BACKEND_BASE_URL!)
    }

    showcaseBackendService
      .get<User>("/user")
      .then((response) => {
          setUser(new User(response.data.name, response.data.email));
      })
      .catch((error) => {
        alert(error)
      });

  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header title={`Welcome ${user.name}`} />
      <main className="grid lg:grid-flow-col gap-10 auto-cols-max place-content-around">
        <Button redirectTo="home/platinum-trophies" textContent="My Platinum Trophies" className="bg-purple-900 hover:bg-purple-950 text-white font-bold 2xl:w-80 2xl:h-64 w-40 h-32 rounded-3xl shadow-2xl mt-16" />
        <Button redirectTo="home/project-technical-specification" textContent="Project Technical Specification" className="bg-orange-600 hover:bg-orange-700 text-white font-bold 2xl:w-80 2xl:h-64 w-40 h-32 rounded-3xl shadow-2xl mt-16" />
      </main>
      <Footer/>
    </div>
  );
}
