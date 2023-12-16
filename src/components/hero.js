import Image from "next/image";
import { PrimaryHeader, WilsonHeader } from "./utilities";

const PORT = process.env.NEXT_PUBLIC_PORT || "http://127.0.0.1:1337";
const getData = async () => {
  const res = await fetch(`${PORT}/api/hero?populate=*`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Error on data fetching!");
  }
  const jsonRes = await res.json();
  return jsonRes.data.attributes;
};

export default async function Hero() {
  const data = await getData();
  return (
    <section className="relative">
      <div className="relative z-10 max-w-xl mx-auto px-8 sm:px-0 pt-40">
        <PrimaryHeader title={data.title} />
        <p className="elza text-white relative text-sm md:text-base pt-6">
          {data.description[0].children[0].text}
        </p>
      </div>
      <div className="w-full absolute top-0 left-0 z-0 grid grid-areas-hero_small sm:grid-areas-hero_large">
        <Image
          src={`${PORT}${data.top_right_image.data.attributes.url}`}
          alt={`${data.top_right_image.data.attributes.alternativeText}`}
          className="grid-in-pirates pl-52 opacity-75"
          height={1500}
          width={1500}
        />
        <Image
          src={`${PORT}${data.bottom_left_image.data.attributes.url}`}
          alt={`${data.bottom_left_image.data.attributes.alternativeText}`}
          className="grid-in-shaka"
          height={350}
          width={350}
        />
        <Image
          src={`${PORT}${data.bottom_middle_image.data.attributes.url}`}
          alt={`${data.bottom_middle_image.data.attributes.alternativeText}`}
          className="grid-in-storm pl-32 transition-all duration-300 opacity-50 xl:opacity-100"
          height={500}
          width={500}
        />
        <div className="grid-in-coin relative pt-10">
          <Image
            src={`${PORT}${data.bottom_right_image.data.attributes.url}`}
            alt={`${data.bottom_right_image.data.attributes.alternativeText}`}
            className="transition-all duration-300 opacity-50 lg:opacity-100 w-full h-auto"
            height={500}
            width={500}
          />
          <WilsonHeader
            title={data.salty}
            styles={"absolute -top-5 -left-20 hidden xl:block"}
          />
        </div>
      </div>
    </section>
  );
}
