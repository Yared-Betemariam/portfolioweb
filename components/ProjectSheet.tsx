import { works } from "@/data/data";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

const ProjectSheet = ({ project }: { project: (typeof works)[0] }) => {
  const images = project.photos.slice();
  images.shift();
  return (
    <div
      key={project.title}
      className="flex relative w-full h-48 xxs:h-80 flex-col ring-[0.5px] ring-gray-900/45  rounded-xl justify-end group/probox drop-shadow-md group/PVBOX"
    >
      <Image
        src={project.photos[0]}
        alt={project.title}
        fill
        className="object-center object-cover rounded-xl shadow-md"
      />
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary/60 to-gray-900/50 group-hover/PVBOX:border-t flex flex-col items-center justify-center ease-in-out border-black/20  group-hover/PVBOX:flex duration-300 transition-all h-0 group-hover/PVBOX:h-full overflow-hidden rounded-xl group-hover/PVBOX:px-10 text-white text-center">
        <span className="text-2xl font-bold ">{project.title}</span>
        <span className="text-base">{project.desc}</span>
        <a
          target="_blank"
          href={project.url || "#"}
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "space-x-2 bg-sky-50 drop-shadow-md rounded-xl mt-4 hover:scale-[1.02] duration-300 transition-all hover:opacity-95 hover:bg-sky-50 text-primary text-base"
          )}
        >
          <span>Open</span>
          <FaExternalLinkAlt className="" />
        </a>
      </div>
    </div>
  );
};
export default ProjectSheet;
