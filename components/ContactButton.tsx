/* eslint-disable react/no-unescaped-entities */
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const ContactButton = ({ simple }: { simple?: boolean }) => {
  return (
    <a href={"#contact"} className="">
      <Button
        size={"lg"}
        variant={"secondary"}
        className={cn(
          "border border-gray-900/20 group/buttonmain font-semibold text-xl  duration-500 ease-in-out px-1 transition-all gap-4 rounded-full relative ",
          simple
            ? "px-6 border-2 shadow border-primary bg-transparent text-primary hover:bg-primary/10 h-[2.75rem] text-base"
            : "pl-8 h-14 bg-primary shadow-md  hover:bg-primary text-gray-50"
        )}
      >
        {!simple && (
          <div className="flex justify-end absolute inset-1 group-hover/buttonmain:inset-0 rounded-full">
            <div className=" group-hover/buttonmain:bg-zinc-50/40 rounded-full h-full flex items-center gap-4 w-12 group-hover/buttonmain:w-full duration-200 bg-zinc-50/40" />
          </div>
        )}
        <span className="z-10">{simple ? "Contact" : "Let's work"}</span>
        {!simple && (
          <div className="h-12 w-12 rounded-full flex items-center justify-center z-10 ">
            <ArrowRight className="" />
          </div>
        )}
      </Button>
    </a>
  );
};
export default ContactButton;
