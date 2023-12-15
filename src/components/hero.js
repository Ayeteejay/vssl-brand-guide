"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { PrimaryHeader, WilsonHeader } from "./utilities";
import Image from "next/image";

export default function Hero() {
  const [componentData, setComponentData] = useState(null);

  const PORT = process.env.NEXT_PUBLIC_PORT || "1337";

  useEffect(() => {
    axios
      .get(`http://localhost:${PORT}/api/hero?populate=*`)
      .then((response) => {
        setComponentData(response.data);
        // console.log(response.data);
      });
  }, [PORT]);

  if (!componentData) {
    return <></>;
  }

  return (
    <section className="relative">
      <div className="relative z-10 max-w-xl mx-auto px-8 sm:px-0 pt-40">
        <PrimaryHeader title={componentData.data.attributes.Title} />
        <p className="elza text-white relative text-sm md:text-base pt-6">
          {componentData.data.attributes.Description[0].children[0].text}
        </p>
      </div>
      <div className="w-full absolute top-0 left-0 z-0 grid grid-areas-hero_small sm:grid-areas-hero_large">
        <Image
          src="/images/hero/pirates.png"
          width={1500}
          height={1500}
          alt="Pirates hanging out on the deck"
          className="grid-in-pirates pl-52 opacity-75"
          priority={true}
        />
        <Image
          src="/images/hero/shaka.png"
          width={350}
          height={350}
          alt="Hand throwing up a shaka in the water"
          className="grid-in-shaka"
        />
        <Image
          src="/images/hero/storm.jpg"
          width={500}
          height={500}
          alt="Person walking on the beach"
          className="grid-in-storm pl-32 transition-all duration-300 opacity-50 xl:opacity-100"
        />
        <div className="grid-in-coin relative pt-10">
          <Image
            src="/images/hero/coin.jpg"
            width={300}
            height={300}
            alt="VSSL Challenge coin"
            className="transition-all duration-300 opacity-50 lg:opacity-100 w-full h-auto"
          />
          <WilsonHeader
            title={componentData.data.attributes.Salty}
            styles={"absolute -top-5 -left-20 hidden xl:block"}
          />
        </div>
      </div>
    </section>
  );
}
