import Card from "../utils/card";

export default function HomePresentation() {
  return (
    <div className="bg-home-presentation h-screen">
      <div className="flex flex-col items-center justify-evenly h-screen">
        <Card />
        <Card />
      </div>
    </div>
  );
}
