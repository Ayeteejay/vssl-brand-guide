"use client";
import { useState } from "react";
import Image from "next/image";

// Texturized Gin headers
export function MainText(props) {
  return (
    <h1 className="text-8xl relative gin-regular text-white">
      {props.title}
      <span className="gin-lines text-bronze absolute top-[2px] left-[2px] opacity-40">
        {props.title}
      </span>
    </h1>
  );
}

// H5
export function H5(props) {
  return (
    <h5 className={`gin-regular text-2xl ${props.styles}`}>{props.title}</h5>
  );
}

// Ink colored Wilson text
export function WilsonText(props) {
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

// Gin subheaders
export function SecondaryText(props) {
  return (
    <h2
      className={`text-smoke text-6xl font-medium gin-regular mb-4 ${props.styles}`}
    >
      {props.title}
    </h2>
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
export function ProfileCard(props) {
  return (
    <div>
      <h5 className="text-bronze gin-regular text-2xl">{props.title}</h5>
      <p className="text-smoke text-sm md:text-base elza my-3">
        {props.description}
      </p>
      {props.bullets && (
        <ul className="text-smoke text-sm md:text-base">
          {props.bullets.map((bullet) => {
            return (
              <li key={bullet.id} className="mb-3">
                {bullet.description}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

// Values cards
export function ValueCard(props) {
  return (
    <div className="flex gap-10 md:gap-20 flex-col md:flex-row items-center">
      <Image
        src={props.image.src}
        height={300}
        width={300}
        alt={props.image.alt}
      />
      <div>
        <h5 className="text-smoke gin-regular text-2xl">{props.title}</h5>
        <p className="text-smoke text-sm md:text-base elza my-3">
          {props.description}
        </p>
        {props.bullets && (
          <ul className="text-smoke text-sm md:text-base elza">
            {props.bullets.map((bullet) => {
              return (
                <li key={bullet.id} className="mb-3">
                  {bullet.description}
                </li>
              );
            })}
          </ul>
        )}
      </div>
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
