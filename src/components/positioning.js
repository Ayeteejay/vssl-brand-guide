import { SecondaryHeader, GinCard } from "./utilities";

const PORT = process.env.NEXT_PUBLIC_PORT || "http://127.0.0.1:1337";
const getData = async () => {
  const res = await fetch(`${PORT}/api/positioning?populate=*`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Error on data fetching!");
  }
  const jsonRes = await res.json();
  return jsonRes.data.attributes;
};

export default async function Positioning() {
  const data = await getData();
  return (
    <section className="max-w-5xl mx-auto px-8 relative mt-10 md:mt-52 lg:mt-80 z-10">
      <div className="bg-bronze p-10 md:p-20 grid md:grid-cols-5 gap-5 md:gap-10 items-center">
        <div className="md:col-span-3">
          <SecondaryHeader title={`${data.title}`} />
          <p className="elza text-sm md:text-base text-ink">
            {data.description[0].children[0].text}
          </p>
          <ul className="text-sm md:text-base text-smoke mt-5">
            {data.bullets.map((bullet, index) => {
              return (
                <li key={index} className="mb-3">
                  {bullet.children[0].text}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex gap-5 flex-col md:col-span-2">
          <GinCard
            title={data.mission_title}
            description={data.mission_description[0].children[0].text}
          />
          <GinCard
            title={data.vision_title}
            description={data.vision_description[0].children[0].text}
          />
        </div>
      </div>
    </section>
  );
}
