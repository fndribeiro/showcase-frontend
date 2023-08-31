'use client';

import ArrowUp from "../utils/arrow-up";
import ArrowDown from "../utils/arrow-down";
import Card from "../utils/card";

export default function LandPageProjectGoal() {

  const cardProjectGoalBody: string[] = [
    "This project is a portfolio built with React 18 and Next.js 13 in frontend. Backend is built with Java 20 and Spring Boot 3.",
    "This is a web application designed to implement common web application features with personal content as subjects.",
    "All git repositories are public.",
    "Only free services are used in all stages of development and deployment."
  ];

  return (
    <div id="land-page-project-goal">
      <div className="flex flex-col items-center justify-evenly h-screen">
        <ArrowUp scrollIntoId="land-page-dev-presentation" />
        <Card
          header="What is this project?"
          body={cardProjectGoalBody}
          cardClassName="rounded shadow-lg bg-sky-300"
          listClassName="pb-3"
          withDisc
        />
        <ArrowDown scrollIntoId="land-page-login" />
      </div>
    </div>
  );
}
