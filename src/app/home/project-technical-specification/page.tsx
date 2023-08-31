import Footer from "@/components/home-page/footer";
import Header from "@/components/home-page/header";
import Card from "@/components/utils/card";

export default function ProjectTechnicalSpecification() {
  const backendBody: string[] = ["Java 20", "Spring Boot 3"];

  const frontendBody: string[] = ["React 18", "NextJS 13", "Tailwind CSS"];

  return (
    <div>
      <Header title="Technical Specification" />
      <main className="flex flex-col items-center gap-5">
        <span className="pt-5">
          <Card
            header="Backend"
            body={backendBody}
            cardClassName="rounded-2xl shadow-lg bg-indigo-300"
            listClassName="pt-1 border-b border-black"
            withLink
            linkHref="https://github.com/fndribeiro/showcase-backend"
          />
        </span>
        <Card
          header="Frontend"
          body={frontendBody}
          cardClassName="rounded-2xl shadow-lg bg-green-300"
          listClassName="pt-1 border-b border-black"
          withLink
          linkHref="https://github.com/fndribeiro/showcase-frontend"
        />
      </main>
      <Footer />
    </div>
  );
}
