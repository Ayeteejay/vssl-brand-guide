import Image from "next/image";
import { BronzeButton, SecondaryHeader } from "./utilities";

const PORT = process.env.NEXT_PUBLIC_PORT || "http://127.0.0.1:1337";
const getData = async () => {
  const res = await fetch(
    `${PORT}/api/photography?populate[0]=photography&populate[1]=photography.image&populate[2]=photography.image.media&populate[3]=download`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Error on data fetching!");
  }
  const jsonRes = await res.json();
  return jsonRes.data.attributes;
};

export default async function Photography() {
  const data = await getData();
  return (
    <section className="relative pb-20 sm:pb-28">
      <div className="grid lg:grid-cols-2 md:gap-20 max-w-5xl mx-auto px-8">
        <div>
          <SecondaryHeader title={data.title} />
          {data.description.map((item, index) => {
            return (
              <p
                key={index}
                className="relative text-smoke text-sm md:text-base elza mt-6"
              >
                {item.children[0].text}
              </p>
            );
          })}
          <BronzeButton
            title={"Download"}
            link={`${PORT}${data.download.data.attributes.url}`}
            styles={"mb-28 sm:mb-0 mt-10 md:mt-20"}
          />
        </div>
        <div></div>
      </div>
      <div className="-translate-y-20 sm:translate-y-5 md:-translate-y-10 lg:translate-y-0 lg:absolute top-10 right-0 transition-all duration-500 sm:w-full lg:w-[600px] 2xl:w-[800px] grid grid-areas-photography_large">
        {data.photography.map((photograph) => {
          let className = null;
          const label = photograph.label.toLowerCase();
          if (label === "ship") {
            className = "absolute bottom-0 left-0 z-0";
          } else if (label === "bonfire") {
            className = "grid-in-beach translate-x-10 translate-y-10";
          } else if (label === "surfboards") {
            className = "grid-in-surfboards z-30 translate-y-32";
          } else if (label === "dog") {
            className = "grid-in-dog z-30 w-auto";
          } else if (label === "captain") {
            className = "grid-in-captain z-20 absolute -bottom-32";
          } else if (label === "vehicle") {
            className =
              "grid-in-vehicle z-10 xl:-translate-x-10 translate-y-10";
          } else if (label === "lighthouse") {
            className =
              "grid-in-lighthouse z-40 translate-y-16 w-52 translate-x-10 lg:w-72";
          }
          return (
            <Image
              key={photograph.id}
              src={`${PORT}${photograph.image.data.attributes.url}`}
              alt={photograph.image.data.attributes.alternativeText}
              width={photograph.width}
              height={photograph.height}
              className={className}
            />
          );
        })}
      </div>
    </section>
  );
}
