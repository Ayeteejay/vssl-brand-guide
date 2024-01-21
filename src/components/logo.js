import Image from "next/image";
import {
  SecondaryHeader,
  TertiaryHeader,
  Paragraph,
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
    <section className="relative">
      <div className="overflow-scroll hidden lg:grid sm:grid-cols-2 md:grid-cols-2 md:w-[650px] xl:w-[750px] absolute right-0 top-[145px]">
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
      <div className="relative grid lg:grid-cols-5 md:gap-5 lg:gap-20 max-w-5xl mx-auto px-8 pb-0 lg:pb-80">
        <div className="md:col-span-2">
          <SecondaryHeader
            title={data.title}
            className={"mb-12 sm:mb-14 md:mb-20"}
          />
          <TertiaryHeader
            title={data.primary_title}
            className={"text-smoke mb-3"}
          />
          <Paragraph
            description={data.primary_description}
            className={"text-smoke text-sm md:text-base elza"}
          />
        </div>
        <WilsonHeader
          title={data.primary_salty}
          className={"block sm:hidden absolute top-52 left-5 z-10"}
        />
        <div className="md:col-span-3 flex lg:hidden mt-5 md:mt-0 mb-6 md:mb-0 overflow-scroll sm:grid sm:grid-cols-2 md:grid-cols-4">
          {data.primary_logos.map((logo) => {
            return (
              <Image
                key={logo.id}
                src={`${PORT}${logo.image.data.attributes.url}`}
                height={2000}
                width={2000}
                alt={logo.image.data.attributes.alternativeText}
                className={`py-12 sm:py-10 lg:py-12 px-16 bg-${logo.background_color}`}
              />
            );
          })}
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-8 pb-20 sm:pb-28">
        <div className="grid md:grid-cols-2 md:gap-20 md:mt-20 lg:mt-28">
          <LogoSection
            title={data.simplified_title}
            description={data.simplified_description}
            logos={data.simplified_logos}
            salty={data.simplified_salty}
            port={PORT}
          />
          <LogoSection
            title={data.flag_title}
            description={data.flag_description}
            logos={data.flag_logos}
            salty={data.flag_salty}
            port={PORT}
          />
        </div>
        <BronzeButton
          title="Download"
          link={`${PORT}${data.download.data.attributes.url}`}
          className={"mt-10 md:mt-20"}
        />
      </div>
    </section>
  );
}
