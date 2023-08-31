"use client";

import ArrowDown from "../utils/arrow-down";
import ArrowUp from "../utils/arrow-up";
import Card from "../utils/card";

export default function LandPageDevPresentation() {
  const cardPresentationBody: string[] = [
    "Im a web application developer with 2+ years of experience currently working at IBM.",
    "Im very good as a Java Spring Boot backend developer and Im building this project to improve my frontend skills.",
  ];

  return (
    <div id="land-page-dev-presentation">
      <div className="flex flex-col items-center justify-evenly h-screen">
        <ArrowUp scrollIntoId="land-page" />
        <Card
          header="Who Am I?"
          body={cardPresentationBody}
          cardClassName="rounded shadow-lg bg-sky-300"
          listClassName="pb-3"
          withDisc
        />
        <ArrowDown scrollIntoId="land-page-project-goal" />
      </div>
    </div>
  );
}
