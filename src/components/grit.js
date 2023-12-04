import { MainText, WilsonText } from "./utilities";
import Image from "next/image";
export default function Grit() {
  const pageData = {
    title: "Screw Pretty — We're Gritty",
    description:
      "In this section, we will get into the visual elements of the brand and the ways they should be used. Yes, these are rules to be followed—but they are also meant to be broken. As long as the spirit of the brand remains intact, you're probably good.",
    wilson_description: "Push the rules but don't fuck it up",
    images: [
      {
        id: 1,
        src: "/images/grit/fish.jpg",
        alt: "Dead fish",
        width: 500,
        height: 500,
        className: "grid-in-fish translate-y-10",
      },
      {
        id: 2,
        src: "/images/grit/crust.png",
        alt: "Crusty old fisherman",
        width: 300,
        height: 300,
        className: "grid-in-crust",
      },
      {
        id: 3,
        src: "/images/grit/cliff.jpg",
        alt: "Two fisherman on cliff",
        width: 300,
        height: 300,
        className: "grid-in-cliff -translate-y-6",
      },
    ],
  };
  return (
    <section className="relative max-w-5xl mx-auto px-8">
      <div className="grid md:grid-cols-5 gap-5 md:gap-14">
        <div className="col-span-3">
          <MainText title={pageData.title} />
          <p className="relative text-smoke text-sm md:text-base elza md:mt-56">
            {pageData.description}
          </p>
        </div>
        <div className="grid grid-areas-grit col-span-2">
          {pageData.images.map((image) => {
            return (
              <Image
                key={image.id}
                src={image.src}
                height={image.height}
                width={image.width}
                alt={image.alt}
                className={image.className}
              />
            );
          })}
          {/* <WilsonText title={pageData.wilson_description} /> */}
        </div>
      </div>
    </section>
  );
}
