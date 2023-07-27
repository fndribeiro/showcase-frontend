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
        <Button redirectTo="home/platinum-trophies" backgroundColor="purple-900" backgroundColorOnHover="purple-950" textContent="My Platinum Trophies"/>
        <Button redirectTo="home/project-technical-specification" backgroundColor="orange-600" backgroundColorOnHover="orange-700" textContent="Project Technical Specification"/>
      </main>
      <Footer/>
    </div>
  );
}
