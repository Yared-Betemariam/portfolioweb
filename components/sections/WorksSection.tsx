/* eslint-disable react/no-unescaped-entities */
import { works } from "@/data/data";
import Image from "next/image";
import ProjectSheet from "../ProjectSheet";
import { fontWrapper } from "@/lib/utils";

const WorksSection = () => {
  return (
    <section id="works" className="wrapper relative flex flex-col">
      <span className="bg-circle bg-no-repeat top-[20rem] right-[20rem] opacity-20 absolute w-[40rem] -z-10 h-[40rem] bg-contain bg-center" />
      <div className="flex flex-col py-28 gap-4">
        <h2 className={fontWrapper("text-5xl md:text-6xl font-bold mx-auto")}>
          Recent Projects
        </h2>
        <p className="mx-auto text-base md:text-lg opacity-80 mb-12">
          Projects that speak for themselves
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:mx-16">
          {works.map((item) => (
            <ProjectSheet key={item.title} project={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default WorksSection;
