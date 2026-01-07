"use client";

import { motion } from "motion/react";

export default function HeroImages() {
  return (
    <div className="flex justify-center items-center gap-2 md:px-20 lg:px-5 w-full h-96 md:h-120 lg:h-140">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="relative bg-muted rounded-2xl w-[45%] h-full overflow-hidden"
      >
        <img
          src="/img/home/home-hero-person-1.png"
          alt=""
          className="object-cover mix-blend-multiply dark:mix-blend-normal absolute w-full h-full"
        />
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 0.2,
        }}
        className="relative bg-muted rounded-2xl w-[35%] h-[calc(100%-5rem)] overflow-hidden"
      >
        <img
          src="/img/home/home-hero-person-2.png"
          alt=""
          className="object-cover mix-blend-multiply dark:mix-blend-normal absolute w-full h-full"
        />
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 0.4,
        }}
        className="relative bg-muted rounded-2xl w-[30%] h-[calc(100%-10rem)] overflow-hidden"
      >
        <img
          src="/img/home/home-hero-person-3.png"
          alt=""
          className="object-cover mix-blend-multiply dark:mix-blend-normal absolute w-full h-full"
        />
      </motion.div>
    </div>
  );
}
