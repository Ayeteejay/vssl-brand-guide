import Image from "next/image";
import { SecondaryHeader, Paragraph } from "./utilities";

const PORT = process.env.NEXT_PUBLIC_PORT || "http://127.0.0.1:1337";
const getData = async () => {
  const res = await fetch(`${PORT}/api/voice?populate=*`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Error on data fetching!");
  }
  const jsonRes = await res.json();
  return jsonRes.data.attributes;
};

export default async function Voice() {
  const data = await getData();
  return (
    <section className="bg-ink relative">
      <div className="max-w-5xl mx-auto px-8 py-16 my-16 md:py-32 md:my-32">
        <SecondaryHeader title={data.title} />
        <div className="grid md:grid-cols-2 md:gap-14">
          <div id="collage" className="order-2 md:order-1 mt-10">
            <div className="grid grid-areas-voice relative pt-5 md:pt-10 px-10 md:p-5">
              <Image
                src={`${PORT}${data.background_image.data.attributes.url}`}
                alt={`${data.background_image.data.attributes.alternativeText}`}
                width={700}
                height={700}
                className="absolute top-5 md:top-20 -left-20"
              />
              <Image
                src={`${PORT}${data.portrait_image.data.attributes.url}`}
                alt={`${data.portrait_image.data.attributes.alternativeText}`}
                width={300}
                height={300}
                className="grid-in-painting relative -translate-y-5"
              />
              <Image
                src={`${PORT}${data.dog_image.data.attributes.url}`}
                alt={`${data.dog_image.data.attributes.alternativeText}`}
                width={300}
                height={300}
                className="grid-in-dog relative"
              />
              <Image
                src={`${PORT}${data.boat_image.data.attributes.url}`}
                alt={`${data.boat_image.data.attributes.alternativeText}`}
                width={200}
                height={200}
                className="grid-in-boat relative m-3"
              />
            </div>
            <Paragraph
              description={data.tone}
              className={
                "text-smoke text-sm md:text-base elza mt-4 md:mt-0 md:mb-4"
              }
            />
          </div>
          <div className="order-1 md:order-2">
            <Paragraph
              description={data.description}
              className={"text-smoke text-sm md:text-base elza"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
