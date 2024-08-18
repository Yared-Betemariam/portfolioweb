import { FaTools, FaPeopleArrows } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { FaLaptopCode, FaComputer } from "react-icons/fa6";
import { TbDeviceMobileCode } from "react-icons/tb";
import { fontWrapper } from "@/lib/utils";

const services = [
  {
    title: "Application Development",
    icon: <TbDeviceMobileCode />,
    desc: "Developing and Deploying Mobile Applications for Android and IOS",
  },
  {
    title: "Web Application Development",
    icon: <FaComputer />,
    desc: "Designing & Developing High-performance Web Applications",
  },
  {
    title: "Software & App Deployment",
    icon: <FaLaptopCode />,
    desc: "Efficient Deployment for your software and mobile applications",
  },
  {
    title: "Software Consulting",
    icon: <FaPeopleArrows />,
    desc: "Delivering Expert Software Consulting Services for Optimal Solutions",
  },
  {
    title: "AI & Robotics Solution",
    icon: <LuBrainCircuit />,
    desc: "AI Chatbots & Model Development and Robotics Solutions",
  },
  {
    title: "Software Maintenance & Support",
    icon: <FaTools />,
    desc: "Performance monitoring, proactive optimization and fast issue resolution.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="wrapper flex flex-col relative overflow-y-hidden"
    >
      <span className="bg-circle bg-no-repeat -top-[15rem] left-0 opacity-10 -z-10 absolute w-[50rem] h-[50rem] bg-contain bg-center" />
      <div className="flex flex-col py-32 gap-4">
        <h2 className={fontWrapper("text-5xl md:text-6xl font-bold mx-auto")}>
          Services
        </h2>
        <p className="mx-auto text-base md:text-lg opacity-80 mb-8">
          Empowering Businesses with Customized Software Solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-x-32 gap-y-10 mx-auto">
          {services.map((item) => (
            <div
              key={item.title}
              className="flex items-center drop-shadow-md max-w-[24rem] mr-10"
            >
              <div className="flex flex-col relative gap-1 bg-white p-6 px-8 rounded-l-3xl rounded-r-xl">
                <span className="bg-gray-900/80 absolute rounded-3xl rounded-l-xl p-[1.6rem] text-6xl flex items-center justify-center text-gray-100 drop-shadow-md -right-[20%] -bottom-4">
                  {item.icon}
                </span>
                <p className="text-xl font-bold">{item.title}</p>
                <p className="opacity-80 text-[15px]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
