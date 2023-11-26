"use client";
import { useState } from "react";

// Texturized Gin headers
export function MainText(props) {
  return (
    <h1 className="text-8xl relative">
      <span className="gin-regular text-white absolute top-0 left-0">
        {props.title}
      </span>
      <span className="gin-lines text-bronze absolute top-[2px] left-[2px] opacity-40">
        {props.title}
      </span>
    </h1>
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
