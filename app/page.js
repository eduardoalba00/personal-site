import { robotoMono } from "@/app/ui/fonts";
import EmailMe from "./ui/components/EmailMe";
import ProjectCard from "@/app/ui/components/ProjectCard";
import ScuttleImage from "@/public/scuttle.png";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col p-24 ${robotoMono.className} gap-12 max-w-screen-xl mx-auto`}
    >
      {/* Header */}
      <h1 className="text-6xl w-2/3">
        Software Engineer creating interactive online experiences.
      </h1>

      {/* Description */}
      <div className="flex flex-col gap-6 mt-6 opacity-70">
        <p className="text-xl">
          I'm Eduardo, a US based software engineer with two years of work
          experience and four years of hobbiest react experience. I specialize
          in creating web applications with a focus on user experience and
          practical utility.
        </p>

        <p className="text-xl">
          I am currently working for{" "}
          <span className="underline">Barracuda Networks</span> on the XDR team
          as a full stack software engineer where I help shape the future of
          cybersecurity. I have contributed to a number of projects spanning
          from developing APIs for external partners to implementing interactive
          device monitorization tools for added security.
        </p>
      </div>

      {/* Links */}
      <div className="flex items-center gap-4">
        <EmailMe />
      </div>

      <hr className="opacity-25" />

      {/* Projects */}
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-semibold">Featured Projects</h2>
        <p className="opacity-50">
          A collection of side projects that have shipped recently.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <ProjectCard
          title="Scuttle"
          description="A League of Legends discord bot for fetching and displaying match data. Scuttle periodically retrieves and stores League of Legends match data to run detailed statistical comparisons. Each server has its own summoners and its own data."
          icon={ScuttleImage}
          link="https://www.scuttle.gg"
        />
      </div>
    </main>
  );
}
