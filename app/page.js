import { robotoMono } from "@/app/ui/fonts";
import EmailMe from "./ui/components/EmailMe";
import ProjectCard from "@/app/ui/components/ProjectCard";
import ScuttleImage from "@/public/scuttle.png";
import CleanCuratedImage from "@/public/cleancurated.png";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen p-12 md:p-16 lg:p-24 flex-col ${robotoMono.className} max-w-screen-xl mx-auto`}
    >
      {/* Info */}
      <div className="flex flex-col gap-16">
        {/* Header */}
        <div className="">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl">
            Software Engineer creating interactive online experiences.
          </h1>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-16 opacity-70 text-base lg:text-xl">
          <p>
            I&apos;m Eduardo, a US based software engineer with two years of
            work experience and four years of hobbiest react experience. I
            specialize in creating web applications with a focus on user
            experience and practical utility.
          </p>

          <p>
            I am currently working for{" "}
            <span>
              <a
                href="https://www.barracuda.com/"
                className="underline hover:text-white hover:font-bold ease-in duration-150"
              >
                Barracuda Networks
              </a>
            </span>{" "}
            on the XDR team as a full stack software engineer where I help shape
            the future of cybersecurity. I have contributed to a number of
            projects spanning from developing APIs for external partners to
            implementing interactive device monitorization tools for added
            security.
          </p>
        </div>
        {/* Links */}
        <div className="flex items-center gap-4">
          <EmailMe />
        </div>
      </div>

      <hr className="opacity-25 my-12" />

      {/* Projects */}
      <div className="flex flex-col gap-2">
        <h2 className="text-xl md:text-3xl font-semibold">Featured Projects</h2>
        <p className="opacity-50 text-sm md:text-base">
          A collection of side projects that have shipped recently.
        </p>
      </div>

      <div className="flex flex-col gap-4 mt-6">
        <ProjectCard
          title="Scuttle"
          description="A League of Legends discord bot for fetching and displaying match data."
          icon={ScuttleImage}
          link="https://www.scuttle.gg"
        />
        <ProjectCard
          title="Clean Curated Club"
          description="Easily transform your affiliate links into an aesthetically pleasing public storefront."
          icon={CleanCuratedImage}
          link="https://www.cleancurated.club"
        />
      </div>
    </main>
  );
}
