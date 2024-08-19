import { FaLinkedin } from "react-icons/fa";
import { FaArrowRight, FaGithub, FaSquareUpwork } from "react-icons/fa6";
import { IoGitNetwork, IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { HiArrowNarrowDown } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { fontWrapper } from "@/lib/utils";

export const socialLinks = [
  {
    link: "",
    color: "text-green-600",
    Icon: FaSquareUpwork,
  },
  {
    link: "",
    color: "text-sky-600",
    Icon: FaLinkedin,
  },
  {
    link: "",
    Icon: FaGithub,
  },
];

export const contactInfromation = [
  {
    icon: <IoMail />,
    data: "bethlehem.danachew@gmail.com",
  },
  {
    icon: <FaPhoneAlt />,
    data: "+2519 20564045",
  },
  {
    icon: <FaLocationArrow />,
    data: "Addis Ababa, Ethiopia",
  },
];

/* eslint-disable react/no-unescaped-entities */
const ContactSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-zinc-900 to-gray-800 text-gray-100">
      <div className="pattern2 absolute inset-0 opacity-[0.085] bg-black/20" />

      <section
        id="contact"
        className="wrapper  py-32 flex flex-col items-center justify-center gap-10"
      >
        <div className="flex flex-col gap-3 items-center text-center justify-center max-w-md mx-auto">
          <h2 className={fontWrapper("h2")}>
            Get in <span className="text-primary brightness-110">touch</span>
          </h2>
          <p className="opacity-80 text-base md:text-lg">
            Let’s chat, tell me about the project and the required services."
          </p>
        </div>
        <div className="flex items-center flex-col md:flex-row gap-8 w-full max-w-4xl justify-between">
          {contactInfromation.map((item) => (
            <div
              key={item.data}
              className="flex flex-col gap-2 w-[22rem] items-center justify-center"
            >
              <div className="text-[2.5rem] drop-shadow-md ">{item.icon}</div>
              <div className="h-6 w-[1.6px] bg-white/25 rounded-full" />

              <div className="text-base opacity-80 rounded-full p-2 px-6 text-white shadow-sm flex items-center justify-center shadow-gray-900/40 mx-auto ring-1 ring-primary/35 bg-gradient-to-tr from-neutral-950 to-neutral-700">
                <span className="drop-shadow-md ">{item.data}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-8">
          {socialLinks.map((item) => (
            <a
              href={item.link}
              target="_blank"
              key={item.link}
              className="text-[2.25rem] text-gray-200/70 hover:text-gray-200 hover:scale-110 transition-all duration-300"
            >
              {<item.Icon />}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};
export default ContactSection;
