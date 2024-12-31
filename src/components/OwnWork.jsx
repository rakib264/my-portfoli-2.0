import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";



// Title component with staggered letter animation
const AnimatedTitle = ({ text }) => {
  return (
    <motion.div className="overflow-hidden">
      <motion.h2
        className="text-7xl font-bold tracking-tighter text-white"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.03,
              ease: [0.6, 0.01, -0.05, 0.95],
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h2>
    </motion.div>
  );
};

const slides = [
  {
    image: "/assets/own/img-1.png",
    name: "Switzerland",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    pageNumber: "Page 1",
  },
  {
    image: "/assets/own/img-2.png",
    name: "Finland",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    pageNumber: "Page 2",
  },
  {
    image: "/assets/own/img-3.png",
    name: "Iceland",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    pageNumber: "Page 3",
  },
  {
    image: "/assets/own/img-4.png",
    name: "Australia",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    pageNumber: "Page 4",
  },
  {
    image: "/assets/own/img-5.png",
    name: "Netherland",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    pageNumber: "Page 5",
  },
  {
    image: "/assets/own/img-6.png",
    name: "Ireland",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    pageNumber: "Page 6",
  },

  {
    image: "/assets/own/img-7.png",
    name: "Australia",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    pageNumber: "Page 7",
  },

  {
    image: "/assets/own/img-8.png",
    name: "Netherland",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    pageNumber: "Page 8",
  },
  {
    image: "/assets/own/img-9.png",
    name: "Ireland",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    pageNumber: "Page 9",
  },

  {
    image: "/assets/own/img-10.png",
    name: "Australia",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    pageNumber: "Page 10",
  },

  {
    image: "/assets/own/img-11.png",
    name: "Australia",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    pageNumber: "Page 11",
  },
  {
    image: "/assets/own/img-12.png",
    name: "Australia",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    pageNumber: "Page 12",
  },
];

const OwnWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Reset progress when slide changes
  useEffect(() => {
    // Reset animation when slide changes
    const progressBar = document.querySelector(".progress-bar");
    if (progressBar) {
      progressBar.style.animation = "none";
      progressBar.offsetHeight; // Trigger reflow
      progressBar.style.animation = null;
    }
  }, [currentIndex]);

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 8000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying]);

  // Update hover handlers to work with the slider container
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      filter: "blur(10px)",
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      filter: "blur(10px)",
    }),
  };

  const contentVariants = {
    hidden: {
      y: 100,
      opacity: 0,
      filter: "blur(20px)",
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.6, 0.01, -0.05, 0.95],
      },
    },
    exit: {
      y: -100,
      opacity: 0,
      filter: "blur(20px)",
      transition: {
        duration: 0.3,
      },
    },
  };

  const thumbnailVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: "rgba(255,255,255,0.3)",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.95,
      backgroundColor: "rgba(255,255,255,0.4)",
    },
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prevIndex) => (prevIndex + newDirection + slides.length) % slides.length
    );
  };

  return (
    <section className="w-full pt-16 pb-16 px-4">
      
      
      {/* Section Title */}
      <div className="mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-4xl font-bold text-white mb-4"
        >
          Driving Change: My Role at FarmEx and YLCA
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-left text-gray-400 max-w-2xl mx-auto"
        >
          FarmEx revolutionizes conventional agriculture through data-driven
          precision farming technologies, combining RAS, aquaponics,
          vertiponics, vertical farming, satellite imagery, machine
          learning-based disease detection, and automated monitoring. These
          innovations boost yields and enable efficient farm management. Through
          YLCA, we empower young entrepreneurs, smallholder farmers, and women
          to adopt these advanced methods for sustainable food production. I
          have personally trained over 100 farmers and 500+ youths and women
          entrepreneurs in collaboration with Shishuk and FIVDB. In the
          following slides, I showcase how my engineering expertise addresses
          real-world challenges in agriculture.
        </motion.p>
      </div>
      <div
        className="w-full max-w-[1200px] mx-auto relative h-[400px] sm:h-[500px] lg:h-[700px] mt-8 
                   border border-white/20 rounded-2xl
                   bg-gradient-to-b from-white/5 to-transparent
                   backdrop-blur-sm overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Progress indicator */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/10">
          <motion.div
            key={currentIndex}
            className="h-full bg-white/50 progress-bar"
            initial={{ width: "0%" }}
            animate={isAutoPlaying ? { width: "100%" } : { width: "0%" }}
            transition={{
              duration: 8,
              ease: "linear",
              repeat: 0,
            }}
          />
        </div>

        {/* Main content container */}
        <div className="relative w-full h-full p-4 sm:p-6 lg:p-8">
          <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                  filter: { duration: 0.4 },
                }}
                className="absolute w-full h-full"
              >
                <motion.div
                  className="w-full h-full bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url(${slides[currentIndex].image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Dark gradient overlay for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  {/* Content container with glass effect - Updated positioning */}
                  <div className="absolute bottom-0 left-0 right-0">
                    <div className="relative mx-4 sm:mx-6 lg:mx-8 mb-4 sm:mb-6 lg:mb-8 overflow-hidden">
                      <div
                        className="relative backdrop-blur-sm bg-gray-900/20 rounded-[1rem] sm:rounded-[2rem] 
                                    px-4 sm:px-6 lg:px-8 py-3 sm:py-4
                                    border border-white/10 shadow-2xl
                                    before:absolute before:inset-0 before:bg-gradient-to-r 
                                    before:from-white/5 before:to-transparent before:rounded-[2rem]"
                      >
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={currentIndex}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={{
                              hidden: { opacity: 0, y: 20 },
                              visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                  duration: 0.5,
                                  staggerChildren: 0.1,
                                },
                              },
                              exit: {
                                opacity: 0,
                                y: -20,
                                transition: { duration: 0.3 },
                              },
                            }}
                            className="relative z-10"
                          >
                            {/* <AnimatedTitle text={slides[currentIndex].name} /> */}

                            <motion.p
                              variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                                exit: { opacity: 0, y: -20 },
                              }}
                              className="text-base sm:text-lg lg:text-xl max-w-xs text-gray-200 font-light"
                            >
                              {slides[currentIndex].pageNumber}
                            </motion.p>

                            {/* <motion.p
                              variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                                exit: { opacity: 0, y: -20 }
                              }}
                              className="text-xl max-w-md mt-4 mb-8 text-gray-200 font-light leading-relaxed"
                            >
                              {slides[currentIndex].description}
                            </motion.p> */}

                            {/* <motion.button
                              whileHover={{ scale: 1.05, y: -5 }}
                              whileTap={{ scale: 0.95 }}
                              className="relative px-8 py-3 bg-gradient-to-r from-white to-white/90 
                                       text-black rounded-full font-semibold 
                                       hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] 
                                       transition-all duration-300
                                       before:absolute before:inset-0 before:bg-white/20 
                                       before:rounded-full before:blur-xl before:scale-150"
                            >
                              See More
                            </motion.button> */}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Updated Thumbnails with correct positioning */}
          <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block">
            <div
              className="grid grid-cols-1 gap-1.5 max-h-[520px] overflow-y-auto pr-2 
                          scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
            >
              {slides.map((slide, index) => (
                <motion.div
                  key={index}
                  variants={thumbnailVariants}
                  whileHover="hover"
                  className={`relative w-14 h-14 rounded-lg overflow-hidden cursor-pointer shadow-lg 
                             transition-all duration-300 hover:shadow-xl`}
                  onClick={() => setCurrentIndex(index)}
                >
                  {/* Selection indicator */}
                  {index === currentIndex && (
                    <motion.div
                      layoutId="selectedBorder"
                      className="absolute inset-0 border-2 border-white rounded-lg z-10 bg-black/20"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  <div
                    className={`w-full h-full transform transition-transform duration-500 
                                 ${
                                   index === currentIndex
                                     ? "scale-105"
                                     : "hover:scale-105"
                                 }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Indicators - Only visible on large screens */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-2 hidden lg:flex">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white w-4"
                    : "bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

          {/* Enhanced Navigation Buttons with auto-play indicator */}
          <div className="absolute bottom-8 sm:bottom-12 lg:bottom-16 right-4 sm:right-6 lg:right-32 space-x-4 z-20">
            <div className="flex items-center justify-center space-x-6">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => {
                  setIsAutoPlaying(false);
                  paginate(-1);
                }}
                className="w-14 h-14 rounded-full bg-white/10 text-white flex items-center 
                         justify-center backdrop-blur-sm shadow-lg border border-white/20"
              >
                <FaArrowLeft className="text-xl" />
              </motion.button>
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => {
                  setIsAutoPlaying(false);
                  paginate(1);
                }}
                className="w-14 h-14 rounded-full bg-white/10 text-white flex items-center 
                         justify-center backdrop-blur-sm shadow-lg border border-white/20"
              >
                <FaArrowRight className="text-xl" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnWork;
