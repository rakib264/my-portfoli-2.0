import React from "react";
import { testimonials } from "../constants";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Feedbacks = () => {
  return (
    <section
      id="testimonials"
      className="py-20 max-w-7xl mx-auto sm:px-16 px-6 z-0"
    >
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>
          {" "}
          Shining Endorsements from{" "}
        </p>
        <h2 className={`${styles.sectionHeadText}`}>Clients and Team Heads.</h2>
      </motion.div>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Feedbacks, "testimonials");
