import { SecondaryHeader, BronzeButton } from "./utilities";

const PORT = process.env.NEXT_PUBLIC_PORT || "http://127.0.0.1:1337";
const getData = async () => {
  const res = await fetch(`${PORT}/api/texture?populate=*`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Error on data fetching!");
  }
  const jsonRes = await res.json();
  return jsonRes.data.attributes;
};

export default async function Texture() {
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
                className="relative text-smoke text-sm md:text-base elza mt-6"
              >
                {item.children[0].text}
              </p>
            );
          })}
        </div>
      </div>
      <div className="my-14 md:my-20 grid grid-cols-4 sm:grid-cols-2 sm:gap-8">
        {data.texture_images.data.map((texture) => {
          return (
            <div
              key={texture.id}
              className={`h-72 bg-cover bg-center bg-no-repeat`}
              style={{
                backgroundImage: `url(${PORT}${texture.attributes.url})`,
              }}
            ></div>
          );
        })}
      </div>
      <BronzeButton
        title={"Download"}
        link={`${PORT}${data.download.data.attributes.url}`}
        styles={"mt-10"}
      />
    </section>
  );
}
