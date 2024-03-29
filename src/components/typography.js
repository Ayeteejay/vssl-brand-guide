import {
  SecondaryHeader,
  Paragraph,
  FontSection,
  BronzeButton,
} from "./utilities";

const PORT = process.env.NEXT_PUBLIC_PORT || "http://127.0.0.1:1337";
const getData = async () => {
  const res = await fetch(`${PORT}/api/typography?populate=*`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Error on data fetching!");
  }
  const jsonRes = await res.json();
  return jsonRes.data.attributes;
};

export default async function Typography() {
  const data = await getData();
  return (
    <section className="relative max-w-5xl mx-auto px-8 pb-20 sm:pb-28">
      <div className="sm:w-[600px]">
        <SecondaryHeader title={data.title} />
        <Paragraph description={data.description} className={"text-smoke"} />
      </div>
      {data.typography.map((font) => {
        if (font.font_family.toLowerCase() === "gin") {
          return (
            <div
              key={font.id}
              className="bg-iron p-10 md:p-14 my-14 md:my-20 transition-all duration-300 hover:-rotate-2"
            >
              <p
                className={`gin-regular text-white relative break-all text-5xl md:text-8xl`}
              >
                {font.description}
                <span className="gin-lines text-iron absolute top-[2px] left-[2px] opacity-40">
                  {font.description}
                </span>
              </p>
              <p className="text-faded_iron rift font-bold mt-5">
                {font.title}
              </p>
            </div>
          );
        } else {
          return (
            <FontSection
              key={font.id}
              title={font.title}
              description={font.description}
              className={`text-smoke ${font.font_family} leading-tight text-5xl`}
            />
          );
        }
      })}
      <BronzeButton
        title={"Download"}
        link={`${PORT}${data.download.data.attributes.url}`}
        className={"mt-10"}
      />
    </section>
  );
}
