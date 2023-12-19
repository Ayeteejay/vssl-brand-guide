import { PrimaryHeader, WilsonHeader } from "./utilities";
import Image from "next/image";

const PORT = process.env.NEXT_PUBLIC_PORT || "http://127.0.0.1:1337";
const getData = async () => {
  const res = await fetch(`${PORT}/api/grit?populate=*`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Error on data fetching!");
  }
  const jsonRes = await res.json();
  return jsonRes.data.attributes;
};

export default async function Grit() {
  const data = await getData();
  // link: "https://youtu.be/V6CLumsir34?si=c3_wVKEh3CPFwsA2",
  return (
    <section className="relative pb-40 sm:pb-20 sm:mb-20 lg:mt-72 lg:mb-64">
      <div className="relative z-10 grid md:grid-cols-5 md:gap-20 max-w-5xl mx-auto px-8">
        <div className="flex items-center md:col-span-4">
          <div className="">
            <PrimaryHeader title={data.title} />
            {data.description.map((item, index) => {
              return (
                <p
                  key={index}
                  className="text-smoke text-sm md:text-base elza mt-6 mb-4"
                >
                  {item.children[0].text}
                </p>
              );
            })}
          </div>
        </div>
        <div className="md:col-span-1"></div>
      </div>
      <div className="mt-10 sm:mt-20 lg:mt-0 lg:absolute -bottom-64 right-0 transition-all duration-500 grid grid-areas-grit_small lg:grid-areas-grit_large overflow-x-hidden">
        <WilsonHeader
          title={data.salty}
          styles={
            "transition-all duration-500 absolute sm:top-[500px] lg:top-[600px] left-52 z-10"
          }
        />
        <Image
          src={`${PORT}${data.fish_image.data.attributes.url}`}
          alt={`${data.fish_image.data.attributes.alternativeText}`}
          width={500}
          height={500}
          className="grid-in-fish translate-y-0 sm:w-72 md:w-96 transition-all duration-500 hover:-rotate-3"
        />
        <Image
          src={`${PORT}${data.fisherman_image.data.attributes.url}`}
          alt={`${data.fisherman_image.data.attributes.alternativeText}`}
          width={300}
          height={300}
          className="grid-in-crust transition-all duration-500 translate-y-20 lg:translate-y-0"
        />
        <Image
          src={`${PORT}${data.cliff_image.data.attributes.url}`}
          alt={`${data.cliff_image.data.attributes.alternativeText}`}
          width={300}
          height={300}
          className="grid-in-cliff transition-all duration-500 w-40 sm:w-32 md:w-72 -translate-x-10 translate-y-10 md:-translate-x-5 lg:-translate-x-10 md:translate-y-10 lg:-translate-y-20"
        />
      </div>
    </section>
  );
}
