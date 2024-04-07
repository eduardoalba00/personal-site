import Image from "next/image";

function ProjectCard({ title, description, icon, link }) {
  return (
    <a href={link}>
      <div className="rounded-xl bg-zinc-800 flex p-6 gap-6 hover:bg-transparent border-2 border-transparent hover:border-zinc-800 ease-in duration-150">
        <div className="w-[150px]">
          <Image src={icon} alt={title} className="rounded-full" />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg opacity-85">{title}</h3>
          <p className="text-base opacity-50">{description}</p>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
