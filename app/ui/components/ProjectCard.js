import Image from "next/image";

function ProjectCard({ title, description, icon, link }) {
  return (
    <a href={link}>
      <div className="rounded-xl bg-zinc-800 flex items-center p-4 gap-6 hover:bg-transparent border-2 border-transparent hover:border-zinc-800 ease-in duration-150">
        <Image
          src={icon}
          alt={title}
          className="rounded-full w-[45px] h-[45px]"
        />
        <div className="flex flex-col">
          <h3 className="text-base md:txt-lg font-bold opacity-85">{title}</h3>
          <p className="text-sm md:text-base opacity-60">{description}</p>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
