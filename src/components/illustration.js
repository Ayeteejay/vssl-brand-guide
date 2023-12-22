import Image from "next/image";
import { SecondaryHeader, Paragraph, BronzeButton } from "./utilities";

const PORT = process.env.NEXT_PUBLIC_PORT || "http://127.0.0.1:1337";
const getData = async () => {
  const res = await fetch(
    `${PORT}/api/illustration?populate[0]=illustration_images&populate[1]=illustrations.image&populate[2]=illustrations.image.media&populate[3]=download`,
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

export default async function Illustration() {
  const data = await getData();
  return (
    <section className="relative max-w-5xl mx-auto px-8 pb-20 sm:pb-28">
      <div className="grid md:grid-cols-2">
        <div>
          <SecondaryHeader title={data.title} />
          <Paragraph
            description={data.description}
            className={"text-smoke text-sm md:text-base elza"}
          />
          <BronzeButton
            title={"Download"}
            link={`${PORT}${data.download.data.attributes.url}`}
            className={"mt-10 sm:mt-20"}
          />
        </div>
        <div className="relative mt-5 md:mt-0">
          {data.illustrations.map((illustration) => {
            let className = null;
            const label = illustration.label.toLowerCase();
            if (label === "lighthouse") {
              className = "top-5 sm:top-0 left-0 w-[250px]";
            } else if (label === "octopus") {
              className = "top-32 right-5 sm:top-20 sm:right-0 z-10 w-[250px]";
            } else if (label === "mermaid") {
              className = "top-72 right-20 sm:right-32 w-[300px]";
            }
            return (
              <div
                key={illustration.id}
                className={`${className} absolute sm:w-72`}
              >
                <Image
                  src={`${PORT}${illustration.image.data.attributes.url}`}
                  alt={illustration.image.data.attributes.alternativeText}
                  width={illustration.width}
                  height={illustration.height}
                  className="w-auto h-auto"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
