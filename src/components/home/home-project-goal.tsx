'use client';

import ArrowUp from "../utils/arrow-up";
import ArrowDown from "../utils/arrow-down";
import Card from "../utils/card";

export default function HomeProjectGoal() {

  const cardProjectGoalBody: string[] = [
    "This project intends to show and explain common web application features such as authentication, social media login, backend integration etc.",
    "This is a web application designed to anyone who has interest in knowing how any of the above features were coded and implemented.",
    "All git repositories are public and each feature implementation is explained in details.",
    "Only free services are used in all stages of development and deployment."
  ];

  return (
    <div id="home-project-goal">
      <div className="flex flex-col items-center justify-evenly h-screen">
        <ArrowUp scrollIntoId="home-presentation" />
        <Card
          header="What is the goal of this project?"
          body={cardProjectGoalBody}
        />
        <ArrowDown scrollIntoId="home-login" />
      </div>
    </div>
  );
}
