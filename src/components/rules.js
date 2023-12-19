import Image from "next/image";
import { SecondaryHeader } from "./utilities";

const PORT = process.env.NEXT_PUBLIC_PORT || "http://127.0.0.1:1337";
const getData = async () => {
  const res = await fetch(
    `${PORT}/api/rule?populate[0]=rules&populate[1]=rules.image&populate[2]=rules.image.media`,
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

export default async function Rules() {
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
        </div>
      </div>
      <div className="grid sm:grid-cols-2 sm:gap-7 my-14 md:my-20">
        {data.rules.map((rule) => {
          return (
            <div key={rule.id} className="">
              <Image
                src={`${PORT}${rule.image.data.attributes.url}`}
                alt={rule.image.data.attributes.alternativeText}
                height={500}
                width={500}
              />
              <p className="text-smoke text-sm md:text-base elza mt-4 mb-12 sm:mb-5 text-center">
                {rule.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
