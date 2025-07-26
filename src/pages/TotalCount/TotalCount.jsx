import React from "react";
import CountUp from "react-countup";
import { FaBlog, FaHandPointer } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { MdOutlineFileDownload } from "react-icons/md";

const stats = [
  {
    id: 1,
    icon: <FaHandPointer size={36} />,
    end: 130,
    label: "Total Visited",
    delay: "zoom-in-right",
  },
  {
    id: 2,
    icon: <MdOutlineFileDownload size={36} />,
    end: 20,
    label: "Resume Downloads",
    delay: "zoom-in",
  },
  {
    id: 3,
    icon: <GoProject size={36} />,
    end: 5,
    label: "Total Projects",
    delay: "zoom-in",
  },
  {
    id: 4,
    icon: <FaBlog size={36} />,
    end: 6,
    label: "Total Blogs",
    delay: "zoom-in-left",
  },
];

const TotalCount = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-16 px-4">
      {stats.map((stat) => (
        <div
          key={stat.id}
          data-aos={stat.delay}
          className="bg-gradient-to-br from-[#1a2638cc] to-[#1a2638dd] backdrop-blur-xl text-white rounded-2xl p-6 shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300 group cursor-pointer"
        >
          <div className="flex items-center gap-5">
            <div className="bg-secondary text-black rounded-full p-4 shadow-inner group-hover:rotate-12 transition-all duration-300">
              {stat.icon}
            </div>
            <div>
              <h2 className="text-4xl font-bold">
                <CountUp
                  start={0}
                  end={stat.end}
                  duration={2.5}
                  separator=","
                  suffix="+"
                />
              </h2>
              <p className="mt-1 text-sm font-medium tracking-wide text-white/80">
                {stat.label}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TotalCount;
