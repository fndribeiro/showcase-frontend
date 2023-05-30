import profilePicture from "../../resources/images/profile.jpg";

export default function HomeInitial() {
  return (
    <div className="bg-home h-screen">
      <div className="flex h-5/6 items-center justify-center pl-7">
        <div>
          <div className="flex">
            <img className="rounded-full display: inline w-1/3" src={profilePicture.src} alt="Profile picture"/>
            <span className="pl-1 pt-24 text-xl">Hi I'm Fernando Ribeiro</span>
          </div>
          <p className="pl-2">and this is my development features showcase!</p>
        </div>
      </div>
      <span className="flex items-center justify-center">
        <svg className="h-20 w-20 animate-bounce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 5v14m-7-7l7 7 7-7"/>
        </svg>
      </span>
    </div>
  );
}
