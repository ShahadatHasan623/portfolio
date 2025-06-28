import React from "react";
import CountUp from "react-countup";
import { FaBlog, FaHandPointer } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { MdOutlineFileDownload } from "react-icons/md";

const TotalCount = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mx-auto max-w-7xl gap-5 my-16 justify-center items-center">
      <div data-aos="zoom-in-right" className="backdrop-blur-xl bg-[#1a263880] rounded-2xl px-5 py-5">
        <div className="flex text-white items-center gap-6 ">
          <div className="bg-secondary rounded-2xl flex items-center justify-center p-4">
            <FaHandPointer size={50} />
          </div>
          <div>
            <CountUp
              start={0}
              end={1330}
              delay={1}
              duration={3}
              separator=","
              suffix="+"
              className="text-5xl"
            />
            <h1 className="mt-2">Total Visited</h1>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" className="backdrop-blur-xl bg-[#1a263880] rounded-2xl px-5 py-5">
        <div className="flex text-white items-center gap-6 ">
          <div className="bg-secondary rounded-2xl flex items-center justify-center p-4">
            <MdOutlineFileDownload size={50} />
          </div>
          <div className="">
            <CountUp
              start={0}
              end={280}
              delay={1}
              duration={3}
              separator=","
              suffix="+"
              className="text-5xl"
            />
            <h1 className="mt-2">Resume download</h1>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" className="backdrop-blur-xl bg-[#1a263880] rounded-2xl px-5 py-5">
        <div className="flex text-white items-center gap-6 ">
          <div className="bg-secondary rounded-2xl flex items-center justify-center p-4">
            <GoProject size={50} />
          </div>
          <div className="">
            <CountUp
              start={0}
              end={5}
              delay={1}
              duration={3}
              separator=","
              suffix="+"
              className="text-5xl"
            />
            <h1 className="mt-2">Total Project</h1>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in-left" className="backdrop-blur-xl bg-[#1a263880] rounded-2xl px-5 py-5">
        <div className="flex text-white items-center gap-6 ">
          <div className="bg-secondary rounded-2xl flex items-center justify-center p-4">
            <FaBlog size={50} />
          </div>
          <div className="">
            <CountUp
              start={0}
              end={6}
              delay={1}
              duration={3}
              separator=","
              suffix="+"
              className="text-5xl"
            />
            <h1 className="mt-2">Total Blogs</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalCount;
