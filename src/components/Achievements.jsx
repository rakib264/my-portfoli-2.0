import React from "react";

import { motion } from "framer-motion";
import { achievements } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { Button } from "./ui/MovingBorders";

const Achievements = () => {
  return (
    <div className="py-20 w-full mx-auto max-w-7xl sm:px-16 px-6">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My </p>
        <h2 className={`${styles.sectionHeadText}`}>Achievements.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          From a young age, participating in extracurricular activities has
          nurtured my innovation and problem-solving skills. Between 2019 and
          2023, I won over eight national and international awards in global and
          national idea and hackathon competitions. These achievements bring me
          immense joy and fulfillment as I tackle new challenges.
        </motion.p>
      </div>

      {/* //border-neutral-200  */}

      <div className="flex items-center justify-center p-4 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements
            .sort((a, b) => b.id - a.id) // Sort in descending order based on the `id` or any other property
            .map((card) => (
              <div className="col-span-1" key={card.id}>
                <Button
                  // Random duration between 10000 and 20000 milliseconds
                  duration={Math.floor(Math.random() * 10000) + 10000}
                  borderRadius="1.75rem"
                  style={{
                    background: "rgb(4,7,29)",
                    backgroundColor:
                      "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    borderRadius: `calc(1.75rem * 0.96)`, // Corrected border radius calculation
                  }}
                  className="text-black dark:text-white dark:border-slate-800"
                >
                  <div className="flex flex-col p-3 py-6 md:p-5 lg:p-10 gap-2">
                    <img
                      src={card.thumbnail}
                      alt={card.thumbnail}
                      className="w-full h-auto object-contain rounded-lg ring-2 ring-purple-400"
                    />
                    <div className="lg:ms-5">
                      <h1 className="text-start text-white text-xl md:text-xl font-bold">
                        {card.title}
                      </h1>
                    </div>
                  </div>
                </Button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Achievements, "achievements");
