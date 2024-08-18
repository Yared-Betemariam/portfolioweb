import { fontWrapper } from "@/lib/utils";
import Image from "next/image";
import { FaAngular } from "react-icons/fa6";

export const skillsets = [
  {
    name: "Angular",
    icon: "/skillsets/angular.svg",
  },
  {
    name: "MySQL",
    icon: "/skillsets/mysql.png",
  },
  {
    name: "Nuxt.js",
    icon: "/skillsets/nuxtjs.webp",
  },
  {
    name: "Ionic",
    icon: "/skillsets/ionic.png",
  },
  {
    name: "Vue.js",
    icon: "/skillsets/vue.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/skillsets/tailwind.png",
  },
  {
    name: "React",
    icon: "/skillsets/react.png",
  },
  {
    name: "Javascript",
    icon: "/skillsets/angular.svg",
  },
  {
    name: "Typescript",
    icon: "/skillsets/typescript.svg",
  },
  {
    name: "Python",
    icon: "/skillsets/python.png",
  },
  {
    name: "Firebase",
    icon: "/skillsets/firebase.png",
  },
  {
    name: "Laravel",
    icon: "/skillsets/laravel.png",
  },
  {
    name: "Sympfony",
    icon: "/skillsets/symfony.png",
  },
];
const AboutMeSection = () => {
  const recentWorks = [
    {
      title: "Projects Done",
      number: 50,
    },
    {
      title: "Years Experience",
      number: 4,
    },
    {
      title: "Happy Clients",
      number: 35,
    },
  ];
  const Images = skillsets.map((item) => (
    <div
      key={item.name}
      className="border p-6 items-center hover:scale-[1.15] duration-300 transition-all justify-center rounded-xl border-gray-900/25 min-w-[9.5rem] h-48 flex flex-col gap-2 bg-zinc-50/80 drop-shadow-sm"
    >
      <div className="relative w-full min-h-[60%] flex-1">
        <Image
          src={item.icon}
          alt={item.name}
          fill
          className="object-center object-contain"
        />
      </div>
      <code className="font-medium">{item.name}</code>
    </div>
  ));

  return (
    <div className="bg-gray-800/5 border-y border-gray-900/20 relative overflow-hidden">
      <span className="bg-circle bg-no-repeat -bottom-[10rem] -left-[10rem] opacity-15 -z-10 absolute w-[40rem] h-[40rem] bg-contain bg-center" />
      <section className="wrapper flex flex-col" id="about">
        <div className="flex flex-col py-28 pb-16 items-center justify-center gap-10">
          <h2 className={fontWrapper("text-5xl md:text-6xl font-bold")}>
            About Me
          </h2>
          <div className="bg-gray-900/20 h-[1px] max-w-[34rem] w-full" />
          <div className="flex flex-col indent-8 gap-4 text-base md:text-lg text-center max-w-3xl">
            <p className="">
              This is me,{" "}
              <b>
                Experienced Designer & Developer who can provide your business a
                new creative start right a Way!
              </b>
            </p>
            <p>
              I am a passionate, detail-oriented & committed individual with
              strong problem-solving capability, time management skills, and
              organizational skills.
            </p>

            <p>
              I have successfully designed, developed, and deployed various
              mobile and web applications, following clean coding practices in a
              test-driven development framework. With a deep passion for and
              top-notch expertise in web and app development, I am well-prepared
              to be a valuable asset to your team.
            </p>
          </div>
          <div className="flex gap-8 items-center w-full max-w-xl justify-between mt-4">
            {recentWorks.map((item) => (
              <div
                key={item.title}
                className="flex hover:scale-125 drop-shadow-xl transition-all duration-300 cursor-pointer flex-col gap-1 items-center justify-center"
              >
                <span className="text-6xl font-semibold text-primary">
                  {item.number}+
                </span>
                <p className="text-base opacity-60">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="text-center flex flex-col gap-2.5">
        <h2 className="text-3xl md:text-4xl font-bold mx-auto m">Skill sets</h2>
        <p className="mx-auto text-base md:text-lg opacity-70 ">
          Equipped with the knowledge to turn challenges into innovations
        </p>
        <div className="overflow-hidden mask flex flex-nowrap mb-6">
          <div className="flex transition-all duration-300 gap-12 py-6 animate_slide w-fit whitespace-nowrap">
            {Images}
            {Images}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMeSection;
