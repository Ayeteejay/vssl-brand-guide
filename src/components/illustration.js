import Image from "next/image";
import { SecondaryHeader, BronzeButton } from "./utilities";

const PORT = process.env.NEXT_PUBLIC_PORT || "http://127.0.0.1:1337";
const getData = async () => {
  const res = await fetch(
    `${PORT}/api/illustration?populate[0]=illustration_images&populate[1]=illustration_images.image&populate[2]=illustration_images.image.media&populate[3]=download`,
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
          {data.description.map((item, index) => {
            return (
              <p
                key={index}
                className="text-smoke text-sm md:text-base elza my-3"
              >
                {item.children[0].text}
              </p>
            );
          })}
          <BronzeButton
            title={"Download"}
            link={`${PORT}${data.download.data.attributes.url}`}
            styles={"mt-10 sm:mt-20"}
          />
        </div>
        <div className="relative mt-5 md:mt-0">
          {data.illustration_images.map((illustration) => {
            return (
              <Image
                key={illustration.id}
                src={`${PORT}${illustration.image.data.attributes.url}`}
                alt={illustration.image.data.attributes.alternativeText}
                width={illustration.width}
                height={illustration.height}
                className={illustration.class_name}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
