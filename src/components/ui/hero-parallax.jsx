"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { AnimatedTooltipPreview } from "../AnimatedTooltipPreview";
import { FlipWordsDemo } from "../FlipWordsDemo";
import { SparklesPreview } from "../SparklesPreview";
import { Button } from "./button";
import { Link } from "react-router-dom";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[100vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] top-0 "
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse mb-20 space-x-20 space-x-reverse">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-20 space-x-reverse">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="relative top-0 left-0 w-full px-4 py-20 mx-auto max-w-7xl md:py-40 ">
      {/* <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold  text-[#363090]">Par<span className="text-[#f04c27]">Nets</span></h1> */}
      <h1 className="text-2xl font-bold md:text-7xl dark:text-white my-5">
        The Ultimate  <FlipWordsDemo/>
      </h1>
      <p className="max-w-2xl mt-8 text-base md:text-xl dark:text-neutral-200">
        Driven by passion, fueled by technology. Our team specializes in designing and developing
        experiences that captivate and inspire.
      </p>
      <div className="mt-10"><AnimatedTooltipPreview /></div>
     <a href='/about'> <Button className='z-50 cursor-pointer'>Get Started</Button></a>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      {/* <a href={product.link} className="block group-hover/product:shadow-2xl"> */}
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="absolute inset-0 object-cover object-left-top w-full h-full"
          alt={product.title}
        />
      {/* </a> */}
      <div className="absolute inset-0 w-full h-full bg-black opacity-0 pointer-events-none group-hover/product:opacity-80"></div>
      <h2 className="absolute text-white opacity-0 bottom-4 left-4 group-hover/product:opacity-100">
        {product.title}
      </h2>
    </motion.div>
  );
};
