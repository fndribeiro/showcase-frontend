'use client';

import ArrowDown from "../utils/arrow-down";
import ArrowUp from "../utils/arrow-up";
import Card from "../utils/card";

export default function HomePresentation() {
  return (
    <div id="home-presentation" className="bg-home-presentation">
      <div className="flex flex-col items-center justify-evenly h-screen">
        <ArrowUp />
        <Card />
        <Card />
        <ArrowDown />
      </div>
    </div>
  );
}
