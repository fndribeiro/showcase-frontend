import LandPageDevPresentation from "@/components/land-page/land-page-dev-presentation";
import LandPageLogin from "@/components/land-page/land-page-login";
import LandPageProjectGoal from "@/components/land-page/land-page-project-goal";
import LandPageTitle from "@/components/land-page/land-page-title";
import LoadingButton from "@/components/utils/loading-button";

export default function LandPage() {
  return (
    <div id="land-page">
      <LandPageTitle />
      <div className="bg-land-page-dev-presentation">
        <LandPageDevPresentation />
        <LandPageProjectGoal />
      </div>
      <LandPageLogin />
    </div>
  );
}
