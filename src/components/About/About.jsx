import React from "react";
import User from "../../asset/image/sksharma.jpeg";
import { ReactTyped } from "react-typed";
import Aboutcourse from "./Aboutcourse";

function About() {
  return (
    <>
      <div>
        <div className="lg:flex  justify-evenly pt-[150px] mb-[80px] mx-[40px]">
          <div
            data-aos="zoom-in-down"
            className="flex items-center justify-center mb-[30px] overflow-hidden rounded-3xl about-img-box transition-all  duration-300 cursor-pointer"
          >
            <img
              src={User}
              className="sm:h-[442px] h-[320px] sm:w-[442px] w-[320px] opacity-75 hover:opacity-100  transition-all duration-300 hover:scale-[1.2]"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-[#ffffff] text-[60px] font-bold">About Me</h1>
            <p className="text-[18px] text-[#ffffff]">
              I am a{" "}
              <ReactTyped
                strings={[
                  "Web Devloper",
                  "Web Designer",
                  "Full Stack Web Developer",
                ]}
                typeSpeed={100}
                className="text-[#ca4949] text-[18px]"
              />
            </p>
            <div>
              <Aboutcourse />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
