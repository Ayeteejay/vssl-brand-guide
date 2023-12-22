import { SecondaryHeader, TertiaryHeader, Paragraph } from "./utilities";

const PORT = process.env.NEXT_PUBLIC_PORT || "http://127.0.0.1:1337";
const getData = async () => {
  const res = await fetch(`${PORT}/api/boilerplate?populate=*`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Error on data fetching!");
  }
  const jsonRes = await res.json();
  return jsonRes.data.attributes;
};

export default async function Boilerplate() {
  const data = await getData();

  return (
    <section className="max-w-5xl mx-auto px-8 relative mb-16 md:mb-32">
      <SecondaryHeader title={data.title} className={"md:mb-14"} />
      <div className="grid md:grid-cols-2 gap-5 md:gap-14">
        {data.about.map((item) => {
          return (
            <div key={item.id} className="group">
              <TertiaryHeader
                title={item.title}
                className={
                  "text-smoke transition-all duration-500 group-hover:text-bronze"
                }
              />
              <Paragraph
                description={item.description}
                className={
                  "text-smoke text-sm md:text-base elza mt-3 transition-all duration-500 group-hover:text-bronze"
                }
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
