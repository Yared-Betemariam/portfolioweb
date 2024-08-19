import { fontWrapper } from "@/lib/utils";
import Image from "next/image";
import ContactButton from "../ContactButton";
import { socialLinks } from "./ContactSection";

/* eslint-disable react/no-unescaped-entities */
const HeroSection = () => {
  return (
    <div className=" overflow-hidden">
      <section className="wrapper relative flex flex-col py-28 pt-20 gap-12 lg:gap-20 md:flex-row md:items-center">
        <span className="bg-circle bg-no-repeat -bottom-[10rem] -left-[10rem] opacity-[0.18] -z-10 absolute w-[40rem] h-[40rem] bg-contain bg-center" />
        <span className="bg-circle bg-no-repeat -top-[20rem] -right-[20rem] opacity-15 -z-10 absolute w-[40rem] h-[40rem] bg-contain bg-center" />
        <div className="flex flex-col gap-8 md:gap-6 lg:flex-1">
          <h2 className="text-2xl font-mono font-semibold text-primary drop-shadow">
            Hi, I'm
          </h2>
          <h1
            className={fontWrapper(
              "text-[3.5rem] leading-[3.1rem] lg:text-7xl font-bold drop-shadow-md whitespace-nowrap"
            )}
          >
            Website Developer
          </h1>

          <p className="text-xs md:text-base font-medium max-w-md lg:max-w-xl opacity-70 mb-4">
            I'm a highly skilled{" "}
            <span className="text-primary drop-shadow-sm">Full Stack</span> and{" "}
            <span className="text-primary drop-shadow-sm">
              Mobile App developer
            </span>{" "}
            with a proven track record of tackling diverse and challenging
            projects. I excel in delivering seamless solutions tailored to your
            needs.
          </p>
          <div className="flex items-center gap-10">
            <ContactButton />
            <div className="flex items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  href={item.link}
                  key={item.link}
                  className=" h-12 w-12 rounded-xl flex items-center justify-center text-[1.8rem] border-[0.7px] border-gray-950/10 hover:bg-gray-50/80 duration-200 transition-all hover:scale-110"
                >
                  {<item.Icon className={item.color} />}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="relative w-[100%] md:w-[50%] h-96 md:h-[28rem] flex items-center justify-center mx-auto">
          <Image
            src={"/hero.png"}
            className="origin-center object-contain z-10 glow"
            alt="hero"
            fill
          />
        </div>
      </section>
    </div>
  );
};
export default HeroSection;
