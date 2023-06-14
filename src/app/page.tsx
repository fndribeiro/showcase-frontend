import HomeLogin from "@/components/home/home-login";
import HomePresentation from "@/components/home/home-presentation";
import HomeProjectGoal from "@/components/home/home-project-goal";
import HomeTitle from "@/components/home/home-title";

export default function Home() {
  return (
    <div id="home">
      <HomeTitle/>
      <div className="bg-home-presentation">
        <HomePresentation/>
        <HomeProjectGoal/>
      </div>
      <HomeLogin/>
    </div>
  );
}
