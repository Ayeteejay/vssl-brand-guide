import Image from "next/image";
import {
  SecondaryHeader,
  WilsonHeader,
  LogoSection,
  BronzeButton,
} from "./utilities";

const PORT = process.env.NEXT_PUBLIC_PORT || "http://127.0.0.1:1337";
const getData = async () => {
  const res = await fetch(
    `${PORT}/api/logo?populate[0]=primary_logos&populate[1]=primary_logos.image&populate[2]=primary_logos.image.media&populate[3]=simplified_logos&populate[4]=simplified_logos.image&populate[5]=simplified_logos.image.media&populate[6]=flag_logos&populate[7]=flag_logos.image&populate[8]=flag_logos.image.media&populate[9]=download`,
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

export default async function Logos() {
  const data = await getData();
  return (
    <section className="relative max-w-5xl mx-auto px-8 pb-20 sm:pb-28">
      <SecondaryHeader title={data.title} styles={"mb-12 sm:mb-14 md:mb-20"} />
      <div className="relative grid md:grid-cols-5 md:gap-20">
        <div className="md:col-span-2">
          <h5 className="text-smoke gin-regular text-2xl transition-all duration-500 group-hover:text-bronze">
            {data.primary_title}
          </h5>
          {data.primary_description.map((item, index) => {
            return (
              <p
                key={index}
                className="text-smoke text-sm md:text-base elza my-3"
              >
                {item.children[0].text}
              </p>
            );
          })}
        </div>
        <WilsonHeader
          title={data.primary_salty}
          styles={"block sm:hidden absolute top-36 -left-5 sm:top-32 z-10"}
        />
        <div className="md:col-span-3 flex mt-3 md:mt-0 mb-6 md:mb-0 overflow-scroll sm:grid sm:grid-cols-2 md:grid-cols-2">
          {data.primary_logos.map((logo) => {
            return (
              <Image
                key={logo.id}
                src={`${PORT}${logo.image.data.attributes.url}`}
                height={2000}
                width={2000}
                alt={logo.image.data.attributes.alternativeText}
                className={`py-12 px-16 bg-${logo.background_color}`}
              />
            );
          })}
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-20 md:mt-32">
        {["simplified", "flag"].map((item, index) => {
          return (
            <LogoSection
              key={item}
              title={index === 0 ? data.simplified_title : data.flag_title}
              description={
                index === 0
                  ? data.simplified_description
                  : data.flag_description
              }
              logos={index === 0 ? data.simplified_logos : data.flag_logos}
              salty={index === 0 ? data.simplified_salty : data.flag_salty}
              port={PORT}
            />
          );
        })}
      </div>
      <BronzeButton
        title="Download"
        link={`${PORT}${data.download.data.attributes.url}`}
        styles={"mt-10 md:mt-20"}
      />
    </section>
  );
}
