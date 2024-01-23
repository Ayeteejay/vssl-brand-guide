import { SecondaryHeader, Paragraph, GinCard } from "./utilities";
import Markdown from "react-markdown";

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
    <section className="max-w-5xl mx-auto px-8 relative my-16 md:mt-52 lg:mt-80 z-10">
      <div className="bg-bronze p-10 md:p-20 grid md:grid-cols-5 gap-5 md:gap-10 items-center">
        <div className="md:col-span-3">
          <SecondaryHeader title={`${data.title}`} />
          <Paragraph description={data.description} className={"text-ink"} />
          <div className="mt-5">
            <Paragraph description={data.bullets} className={"text-smoke"} />
          </div>
        </div>
        <div className="flex gap-5 flex-col md:col-span-2">
          {data.positioning.map((position) => {
            return (
              <GinCard
                key={position.id}
                title={position.title}
                description={position.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
