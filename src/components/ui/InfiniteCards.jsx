import React, { useEffect, useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import "../style/testimonial.css";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      setDirectionAndSpeed();
      setStart(true);
    }
  };

  const setDirectionAndSpeed = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "normal"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }

      let animationDuration;
      if (speed === "fast") {
        animationDuration = "20s";
      } else if (speed === "normal") {
        animationDuration = "40s";
      } else {
        animationDuration = "80s";
      }
      containerRef.current.style.setProperty(
        "--animation-duration",
        animationDuration
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to right,transparent,white 20%,white 80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[90vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%+4px)] w-[calc(100%+4px)]"
              ></div>
              <span className="relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <div className="me-3">
                  <img
                    src={item.image}
                    className="w-12 h-12 object-contain rounded-full ring-2 ring-purple-400"
                    alt="profile"
                  />
                </div>
                <span className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5">
                    <p className="text-white font-medium text-[20px]">
                      <span className="blue-text-gradient">@</span>
                    </p>
                    <span className="text-xl font-bold leading-[1.6] text-white">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-[12px] leading-[1.6] text-white-200 font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
