'use client';

import ArrowUp from "../utils/arrow-up";

import GoogleButton from "react-google-button";

export default function HomeLogin() {
    return (
        <div id="home-login" className="bg-home-title h-screen flex flex-col items-center justify-center">
            <span className="pb-20">
                <ArrowUp scrollIntoId="home-project-goal" />
            </span>
            <p className="pb-5 text-2xl font-bold">If you want to know more</p>
            <GoogleButton
                onClick={() => { console.log('this will not run on click since it is disabled') }}
            />
        </div>
    )
}