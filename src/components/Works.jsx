import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { FaLocationArrow } from "react-icons/fa6";

import { PinContainer } from "./ui/Pin";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Spotlight on </p>
        <h2 className={`${styles.sectionHeadText}`}>My Recent Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 md:gap-20 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.link}
              href="https://twitter.com/mannupaaji"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold md:text-xl text-base line-clamp-2">
                {item.title}
              </h1>

              <p
                className="lg:text-md lg:font-normal font-light text-sm line-clamp-3"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="">
                  {item.link !== "" ? (
                    <div className="flex justify-center items-center">
                      <a
                        href={item.link}
                        target="_blank"
                        className="flex lg:text-xl md:text-xs text-sm text-purple"
                      >
                        Check Live Site
                      </a>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </div>
                  ) : (
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Under Development
                    </p>
                  )}
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
