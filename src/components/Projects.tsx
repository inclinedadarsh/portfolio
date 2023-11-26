import Link from "next/link";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

import { cipheredBanner, timeloomBanner, unlinkedBanner } from "@/assets";

const Projects = () => {
  return (
    <section className="view-container mt-24">
      <SectionTitle badges={["design", "dev"]}>Selected Projects</SectionTitle>
      <div className="space-y-8">
        <ProjectCard
          title="Timeloom"
          scope="Design + Development"
          description="Timeloom helps you to document your technical journey in an activity timeline like page. You can create your own page and craft it as you like."
          image={timeloomBanner}
          imageAlt="Timeloom banner"
          sourceLink="https://github.com/inclinedadarsh/timeloom"
          liveLink="https://timeloom.vercel.app"
          technologies={[
            "Next.js",
            "TypeScript",
            "Node.js",
            "MongoDB",
            "TailwindCSS",
            "UI/UX",
          ]}
        />
        <ProjectCard
          title="Ciphered"
          scope="Design + Development"
          description="An open-source web app that let's you encrypt or decrypt any message you want using various algorithms and keys."
          image={cipheredBanner}
          imageAlt="Ciphered banner"
          sourceLink="https://github.com/inclinedadarsh/ciphered"
          liveLink="https://ciphered.vercel.app"
          technologies={[
            "Next.js",
            "TypeScript",
            "Node.js",
            "TailwindCSS",
            "UI/UX",
          ]}
        />
        <ProjectCard
          title="Unlinked"
          scope="Design (Web)"
          description="Unlinked hiring process fun and easier important information that a hiring manager actually need without wasting so much time."
          image={unlinkedBanner}
          imageAlt="Unlinked banner"
          liveLink="https://www.behance.net/gallery/152416557/Website-for-hiring-developers-Hackathon-Winner"
          technologies={["UI Design", "UX Design", "Figma"]}
        />
      </div>
      <div className="mt-6 flex items-center gap-5">
        <div className="grow border-t-2 border-muted-1 border-dashed"></div>
        <Link href="/work" className="button-secondary">
          See all projects
        </Link>
      </div>
    </section>
  );
};

export default Projects;
