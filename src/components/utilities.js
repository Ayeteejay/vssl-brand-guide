"use client";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import Image from "next/image";

// H1
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

// H2
export function SecondaryHeader(props) {
  return (
    <h2
      className={`text-smoke text-6xl font-medium gin-regular mb-4 antialiased ${
        props.className ? props.className : ""
      }`}
    >
      {props.title}
    </h2>
  );
}

// H5
export function TertiaryHeader(props) {
  return (
    <h5
      className={`gin-regular text-2xl antialiased ${
        props.className ? props.className : ""
      }`}
    >
      {props.title}
    </h5>
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
  return (
    <h4
      className={`text-white wilson text-xl xl:text-2xl bg-ink py-2 p-1 inline-block -rotate-2 ${
        props.className ? props.className : ""
      }`}
    >
      <span>{sliceStr(props.title, "start")}</span>
      <br />
      <span className="rotate-3 block translate-x-2 -translate-y-1">
        {sliceStr(props.title, "end")}
      </span>
    </h4>
  );
}

// Gin cards
export function GinCard(props) {
  return (
    <div className="border border-ink transition-all duration-300 md:hover:-rotate-2">
      <TertiaryHeader
        title={props.title}
        className={"border-b border-ink py-3 px-4 text-ink"}
      />
      <p className="text-smoke text-sm md:text-base elza py-4 px-4">
        {props.description}
      </p>
    </div>
  );
}

// Persona cards
export function PersonaCard(props) {
  return (
    <div>
      <TertiaryHeader title={props.title} className={"text-bronze mb-3"} />
      <Paragraph
        description={props.description}
        className={"text-smoke text-sm md:text-base"}
      />
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
        className="min-w-[300px] w-auto h-52 md:h-72 relative"
      >
        <Image src={props.image} fill={true} alt={props.alt} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, type: "tween" }}
      >
        <TertiaryHeader
          title={props.title}
          className={"text-smoke mb-3 antialiased"}
        />
        <Paragraph
          description={props.description}
          className={"text-smoke text-sm md:text-base elza"}
        />
      </motion.div>
    </div>
  );
}

// Bronze buttons
export function BronzeButton(props) {
  return (
    <a
      href={props.link}
      className={`cursor-pointer w-[115px] h-[115px] -rotate-6 rounded-full flex items-center justify-center transition-all duration-300 border border-bronze text-smoke rift text-lg font-bold tracking-widest hover:bg-bronze hover:rotate-0 ${
        props.className ? props.className : ""
      }`}
    >
      {props.title}
    </a>
  );
}

// Logo section
export function LogoSection(props) {
  return (
    <div className="relative">
      <TertiaryHeader title={props.title} className={"text-smoke mb-4"} />
      <Paragraph
        description={props.description}
        className={"text-smoke text-sm md:text-base elza md:min-h-[125px]"}
      />
      <WilsonHeader
        title={props.salty}
        className={"block sm:hidden absolute top-36 -left-5 sm:top-32 z-10"}
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
              className={`md:h-28 lg:h-32 mt-5 p-10 bg-${logo.background_color}`}
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
      <p className={`break-all ${props.className ? props.className : ""}`}>
        {props.description}
      </p>
      <p className="text-faded_iron rift font-bold mt-5">{props.title}</p>
    </div>
  );
}

// Paragraphs (body text)
export function Paragraph(props) {
  return (
    <>
      {props.description.map((item, index) => {
        return (
          <p
            key={uuidv4()}
            className={`antialiased font-light ${
              props.className ? props.className : ""
            } ${
              props.description.length > 0 &&
              index === props.description.length - 1
                ? ""
                : "mb-3"
            }`}
          >
            {item.children[0].text}
          </p>
        );
      })}
    </>
  );
}
