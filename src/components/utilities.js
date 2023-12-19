"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

// Texturized Gin headers
export function PrimaryHeader(props) {
  return (
    <h1 className="text-8xl relative gin-regular text-white">
      {props.title}
      <span className="gin-lines text-bronze absolute top-[2px] left-[2px] opacity-40">
        {props.title}
      </span>
    </h1>
  );
}

// Gin subheaders
export function SecondaryHeader(props) {
  return (
    <h2
      className={`text-smoke text-6xl font-medium gin-regular mb-4 ${props.styles}`}
    >
      {props.title}
    </h2>
  );
}

// TertiaryHeader
export function TertiaryHeader(props) {
  return (
    <h5 className={`gin-regular text-2xl ${props.styles}`}>{props.title}</h5>
  );
}

// Ink colored Wilson text
export function WilsonHeader(props) {
  const halfLength = Math.floor(props.title.split(" ").length / 2);
  const sliceStr = (str, mode) => {
    const words = str.split(" ");
    return mode === "start"
      ? words.slice(0, halfLength).join(" ")
      : words.slice(halfLength).join(" ");
  };
  const [wilsonTitle, setWilsonTitle] = useState({
    firstLine: sliceStr(props.title, "start"),
    secondLine: sliceStr(props.title, "end"),
  });
  return (
    <h4
      className={`text-white wilson text-xl xl:text-2xl bg-ink py-2 p-1 inline-block -rotate-2 ${props.styles}`}
    >
      <span>{wilsonTitle.firstLine}</span>
      <br />
      <span className="rotate-3 block translate-x-2 -translate-y-1">
        {wilsonTitle.secondLine}
      </span>
    </h4>
  );
}

// Gin callout cards
export function GinCard(props) {
  return (
    <div className="border border-ink transition-all duration-300 md:hover:-rotate-2">
      <h5 className="text-ink gin-regular text-2xl border-b border-ink py-3 px-4">
        {props.title}
      </h5>
      <p className="text-smoke text-sm md:text-base elza py-4 px-4">
        {props.description}
      </p>
    </div>
  );
}

// Profile cards
export function PersonaCard(props) {
  return (
    <div>
      <h5 className="text-bronze gin-regular text-2xl">{props.title}</h5>
      {props.description.map((persona, index) => {
        return (
          <p key={index} className="text-smoke text-sm md:text-base my-3">
            {persona.children[0].text}
          </p>
        );
      })}
    </div>
  );
}

// Values cards
export function ValueCard(props) {
  return (
    <div className="flex gap-10 md:gap-20 flex-col md:flex-row items-center">
      <motion.div
        initial={{
          opacity: 0,
          rotate: -20,
          x: -200,
          y: 200,
          rotate: 45,
          scale: 0.5,
        }}
        whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0, rotate: 0, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, type: "spring", stiffness: 45 }}
        className="min-w-[300px]"
      >
        <Image src={props.image} height={300} width={300} alt={props.alt} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, type: "tween" }}
      >
        <h5 className="text-smoke gin-regular text-2xl">{props.title}</h5>
        {props.description.map((value, index) => {
          return (
            <p
              key={index}
              className="text-smoke text-sm md:text-base elza my-3"
            >
              {value.children[0].text}
            </p>
          );
        })}
      </motion.div>
    </div>
  );
}

// Bronze circular buttons
export function BronzeButton(props) {
  return (
    <a
      href={props.link}
      className={`cursor-pointer w-[115px] h-[115px] -rotate-6 rounded-full flex items-center justify-center transition-all duration-300 border border-bronze text-smoke rift text-lg font-bold tracking-widest hover:bg-bronze hover:rotate-0 ${props.styles}`}
    >
      {props.title}
    </a>
  );
}

// Logo section
export function LogoSection(props) {
  return (
    <div className="relative">
      <h5 className="text-smoke gin-regular text-2xl transition-all duration-500 group-hover:text-bronze">
        {props.title}
      </h5>
      {props.description.map((item, index) => {
        return (
          <p key={index} className="text-smoke text-sm md:text-base elza my-3">
            {item.children[0].text}
          </p>
        );
      })}
      <WilsonHeader
        title={props.salty}
        styles={"block sm:hidden absolute top-36 -left-5 sm:top-32 z-10"}
      />
      <div className="flex overflow-scroll sm:grid sm:grid-cols-3 mb-6 md:mb-0">
        {props.logos.map((logo) => {
          return (
            <Image
              key={logo.id}
              src={`${props.port}${logo.image.data.attributes.url}`}
              height={2000}
              width={2000}
              alt={logo.image.data.attributes.alternativeText}
              className={`mt-5 p-10 bg-${logo.background_color}`}
            />
          );
        })}
      </div>
    </div>
  );
}

// Font section
export function FontSection(props) {
  return (
    <div className="px-5 py-8 md:py-10 md:px-14">
      <p className={`break-all ${props.styles}`}>{props.description}</p>
      <p className="text-faded_iron rift font-bold mt-5">{props.title}</p>
    </div>
  );
}
