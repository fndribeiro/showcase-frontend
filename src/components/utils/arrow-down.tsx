export default function ArrowDown() {

  function scrollIntoView(): void {
    document
      .getElementById("home-presentation")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <svg
      onClick={scrollIntoView}
      className="h-20 w-20 animate-bounce cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14m-7-7l7 7 7-7" />
    </svg>
  );
}
