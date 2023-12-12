import { PrimaryHeader, WilsonHeader } from "./utilities";
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
        className:
          "grid-in-fish translate-y-0 sm:w-72 md:w-96 transition-all duration-500 hover:-rotate-3",
        link: "https://youtu.be/V6CLumsir34?si=c3_wVKEh3CPFwsA2",
      },
      {
        id: 2,
        src: "/images/grit/crust.png",
        alt: "Crusty old fisherman",
        width: 300,
        height: 300,
        className:
          "grid-in-crust transition-all duration-500 translate-y-20 lg:translate-y-0",
      },
      {
        id: 3,
        src: "/images/grit/cliff.jpg",
        alt: "Two fisherman on cliff",
        width: 300,
        height: 300,
        className:
          "grid-in-cliff transition-all duration-500 w-40 sm:w-32 md:w-72 -translate-x-10 translate-y-10 md:-translate-x-5 lg:-translate-x-10 md:translate-y-10 lg:-translate-y-20",
      },
    ],
  };
  return (
    <section className="relative pb-40 sm:pb-20 sm:mb-20 lg:mt-72 lg:mb-64">
      <div className="relative z-10 grid md:grid-cols-5 md:gap-20 max-w-5xl mx-auto px-8">
        <div className="flex items-center md:col-span-4">
          <div className="">
            <PrimaryHeader title={pageData.title} />
            <p className="text-smoke text-sm md:text-base elza mt-6">
              {pageData.description}
            </p>
          </div>
        </div>
        <div className="md:col-span-1"></div>
      </div>
      <div className="mt-10 sm:mt-20 lg:mt-0 lg:absolute -bottom-64 right-0 transition-all duration-500 grid grid-areas-grit_small lg:grid-areas-grit_large">
        <WilsonHeader
          title={pageData.wilson_description}
          styles={
            "transition-all duration-500 absolute sm:top-[500px] lg:top-[600px] left-52 z-10"
          }
        />
        {pageData.images.map((image) => {
          if (image.link !== undefined) {
            return (
              <a
                key={image.id}
                className={image.className}
                href={image.link}
                target="_blank"
              >
                <Image
                  key={image.id}
                  src={image.src}
                  height={image.height}
                  width={image.width}
                  alt={image.alt}
                />
              </a>
            );
          } else {
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
          }
        })}
      </div>
    </section>
  );
}
