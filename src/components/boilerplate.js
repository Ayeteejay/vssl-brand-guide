import { SecondaryHeader } from "./utilities";

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
      <SecondaryHeader title={data.title} styles={"mb-10"} />
      <div className="grid md:grid-cols-2 gap-5 md:gap-14">
        {data.about.map((item, index) => {
          return (
            <div key={index} className="group">
              <h5 className="text-smoke gin-regular text-2xl transition-all duration-500 group-hover:text-bronze">
                {item.title}
              </h5>
              {item.description.map((subitem, index) => {
                return (
                  <p
                    key={index}
                    className="text-smoke text-sm md:text-base elza mt-3 transition-all duration-500 group-hover:text-bronze"
                  >
                    {subitem.children[0].text}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}
