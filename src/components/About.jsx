import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-tilt";

import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-7xl leading-[30px]"
      >
        {/* I'm a skilled software developer specializing in TypeScript and
        JavaScript, with a knack for frameworks like React, Node.js, and
        Three.js. Quick to adapt and a pro at client collaboration, I build
        efficient, scalable, and user-friendly solutions that tackle real-world
        challenges. Let's team up to turn your ideas into reality! */}
        As the co-founder of Farmex and YLCA, I leverage my expertise in
        precision agriculture and cutting-edge IT skills to solve real-world
        challenges faced by farmers. Harnessing technologies like TypeScript,
        JavaScript, React, Node.js, Machine learning, and Three.js, I create scalable,
        user-centric solutions that redefine conventional farming practices. My
        passion for innovation and collaboration drives me to transform ideas
        into groundbreaking realities, empowering the farmers of tomorrow
        through data-driven precision farming.
      </motion.p>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
