'use client';

import ArrowDown from "../utils/arrow-down";
import ArrowUp from "../utils/arrow-up";
import Card from "../utils/card";

export default function HomePresentation() {

  const cardPresentationBody: string[] = [
    "Im a web application developer with 2+ years of experience currently working at IBM.",
    "Im very good as a Java Spring Boot backend developer and I do my best at frontend with React."
  ]

  return (
    <div id="home-presentation">
      <div className="flex flex-col items-center justify-evenly h-screen">
        <ArrowUp scrollIntoId="home" />
        <Card header="Who Am I?" body={cardPresentationBody} />
        <ArrowDown scrollIntoId="home-project-goal"/>
      </div>
    </div>
  );
}
