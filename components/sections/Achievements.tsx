import { fontWrapper } from "@/lib/utils";
import { Medal } from "lucide-react";
import Image from "next/image";

const Achievements = () => {
  return (
    <div className="bg-primary/10 border-y border-gray-900/20">
      <section id="services" className="wrapper flex flex-col">
        <div className="flex flex-col py-32 gap-4">
          <div className="flex flex-col gap-3 relative mx-auto">
            <Medal className="text-yellow-700 fill-yellow-400 rotate-12 medal_glow w-14 h-14 absolute -top-8 -right-8" />
            <h2
              className={fontWrapper("text-5xl md:text-6xl font-bold mx-auto")}
            >
              Achievements & Awards
            </h2>
            <p className="mx-auto text-base md:text-lg opacity-80 mb-6">
              Recognitions, Awards, and Career Milestones
            </p>
          </div>
          {/* <div className="flex w-full pictures_div">
          <div className="flex w-full flex-col pictures_div">
            <Image
              src={"/awards/1.jpeg"}
              alt="Certificate"
              width={1152}
              height={855}
              className="w-full award_picture"
            />
            <Image
              src={"/awards/2.jpeg"}
              alt="Certificate"
              width={1152}
              height={855}
              className="w-full award_picture"
            />
            <Image
              src={"/awards/6.jpeg"}
              alt="Certificate"
              width={1280}
              height={974}
              className="w-full award_picture"
            />
          </div>
          <div className="flex min-w-[60%] flex-col pictures_div">
            <div className="flex pictures_div">
              <div className="flex flex-col max-w-[40%]">
                <Image
                  src={"/awards/3.png"}
                  alt="Certificate"
                  width={1188}
                  height={1540}
                  className="award_picture mb-auto"
                />
                <Image
                  src={"/awards/5.jpeg"}
                  alt="Certificate"
                  width={1280}
                  height={974}
                  className="award_picture"
                />
              </div>
              <div className="flex flex-col pictures_div">
                <Image
                  src={"/awards/7.png"}
                  alt="Certificate"
                  width={1280}
                  height={974}
                  className="w-full award_picture"
                />
                <Image
                  src={"/awards/8.jpeg"}
                  alt="Certificate"
                  width={1280}
                  height={974}
                  className="w-full award_picture"
                />
              </div>
            </div>
            <div className="flex flex-col pictures_div">
              <Image
                src={"/awards/4.jpeg"}
                alt="Certificate"
                width={1280}
                height={974}
                className="w-full award_picture"
              />
            </div>
          </div>
        </div> */}
          <div className="overflow-auto gap-6 flex h-64 border rounded-md p-2 border-gray-900/20 shadow-md overflow-y-hidden bg-zinc-900/5">
            <Image
              src={"/awards/1.png"}
              alt="Certificate"
              width={1152}
              height={855}
              className="w-full award_picture"
            />
            <Image
              src={"/awards/1.png"}
              alt="Certificate"
              width={1152}
              height={855}
              className="w-full award_picture"
            />
            <Image
              src={"/awards/1.png"}
              alt="Certificate"
              width={1152}
              height={855}
              className="w-full award_picture"
            />
            <Image
              src={"/awards/1.png"}
              alt="Certificate"
              width={1152}
              height={855}
              className="w-full award_picture"
            />
            <Image
              src={"/awards/1.png"}
              alt="Certificate"
              width={1152}
              height={855}
              className="w-full award_picture"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Achievements;
