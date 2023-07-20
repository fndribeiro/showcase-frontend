'use client';

import { useRouter } from "next/navigation";
import ArrowUp from "../utils/arrow-up";

import GoogleButton from "react-google-button";

export default function LandPageLogin() {

    const router = useRouter();

    return (
        <div id="land-page-login" className="bg-land-page-title h-screen flex flex-col items-center justify-center">
            <span className="pb-20">
                <ArrowUp scrollIntoId="land-page-project-goal" />
            </span>
            <p className="pb-5 text-2xl font-bold">Sign in if you want to know more</p>
            <GoogleButton
                onClick={() => { router.push(process.env.SHOWCASE_BACKEND_BASE_URL!) }}
            />
        </div>
    )
}