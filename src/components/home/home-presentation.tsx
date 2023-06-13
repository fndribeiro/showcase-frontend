'use client';

import ArrowDown from "../utils/arrow-down";
import ArrowUp from "../utils/arrow-up";
import Card from "../utils/card";

export default function HomePresentation() {

  const cardPresentationBody: string[] = [
    "Im a web application developer with 2+ years of experience currently working at IBM.",
    "Im very good as a Java Spring Boot backend developer and I do my best at frontend with React."
  ]

  const cardProjectGoalBody: string[] = [
    "This project intends to show and explain common web application features such as authentication, social media login, backend integration etc.",
    "This is a web application designed to anyone who has interest in knowing how any of the above features were coded and implemented.",
    "All git repositories are public and each feature implementation is explained in details."
  ]

  return (
    <div id="home-presentation" className="bg-home-presentation">
      <div className="flex flex-col items-center justify-evenly h-screen">
        <ArrowUp scrollIntoId="home" />
        <Card header="Who Am I?" body={cardPresentationBody} />
        <Card header="What is the goal of this project?" body={cardProjectGoalBody} />
        <ArrowDown scrollIntoId=""/>
      </div>
    </div>
  );
}
