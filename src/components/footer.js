import Image from "next/image";
import { PrimaryHeader } from "./utilities";

const PORT = process.env.NEXT_PUBLIC_PORT || "http://127.0.0.1:1337";
const getData = async () => {
  const res = await fetch(`${PORT}/api/footer?populate=*`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Error on data fetching!");
  }
  const jsonRes = await res.json();
  return jsonRes.data.attributes;
};

export default async function Footer() {
  const data = await getData();
  return (
    <footer className="relative max-w-5xl mx-auto px-8 pb-20 sm:pb-40 overflow-hidden">
      <div className="grid md:grid-cols-2 pb-52">
        <div>
          <PrimaryHeader title={data.title} />
          {data.description.map((item, index) => {
            return (
              <p
                key={index}
                className={`text-smoke text-sm md:text-base elza ${
                  index === 0 ? "mt-6" : "my-3"
                }`}
              >
                {item.children[0].text}
              </p>
            );
          })}
        </div>
        <Image
          src={`${PORT}${data.image.data.attributes.url}`}
          alt={`${data.image.data.attributes.alternativeText}`}
          height={2000}
          width={2000}
          className="w-[600px] absolute -bottom-20 -left-5 sm:bottom-auto sm:left-auto sm:top-52 sm:right-10"
        />
      </div>
      <div hidden className="hidden">
        <span className="bg-iron"></span>
        <span className="bg-bronze"></span>
        <span className="bg-ink"></span>
        <span className="bg-smoke"></span>
        <span className="bg-faded_iron"></span>
        <span className="bg-barnacle_green"></span>
        <span className="bg-rusted_brown"></span>
        <span className="bg-faded_blue"></span>
        <span className="bg-sand_beige"></span>
      </div>
    </footer>
  );
}
