import Image from "next/image";
import { BronzeButton, SecondaryHeader } from "./utilities";
export default function Photography() {
  const pageData = {
    title: "Photography",
    content: [
      {
        id: 1,
        body: "VSSL combines several photographic styles from several different time periods. It's kind of chaotic but totally works. Historical photos, old nautical lithographs, and contemporary photos with a film-inspired aesthetic all combine into a style that feels vintage, eclectic, crafted, and collected.",
      },
      {
        id: 2,
        body: "The most important thing to consider when choosing photos is that they feel authentic. Resources like unsplash or public archives will likely give you better content than iStock.",
      },
      {
        id: 3,
        body: "Relevant subject matter includes sailors, ships, beach culture (but in a goth kind of way), dogs, fish/fishers, and tattoo culture.",
      },
      {
        id: 4,
        body: "Make sure to find photos that represent and include all kinds of people. We are welcoming, not exclusive.",
      },
    ],
    images: [
      {
        id: 0,
        src: "/images/photography/deck.png",
        alt: "Ship deck with wheel",
        class_name: "absolute bottom-0 left-0 z-0",
      },
      {
        id: 1,
        src: "/images/photography/beach.jpg",
        alt: "People standing around bonfire at beach",
        class_name: "grid-in-beach translate-x-10 translate-y-10",
      },
      {
        id: 2,
        src: "/images/photography/surfboards.jpg",
        alt: "Surfboards leaning on wall",
        class_name: "grid-in-surfboards z-30 translate-y-32",
      },
      {
        id: 3,
        src: "/images/photography/dog.jpg",
        alt: "Vintage photograph of a dog",
        class_name: "grid-in-dog z-30",
      },
      {
        id: 4,
        src: "/images/photography/captain.jpg",
        alt: "Lithograph of captain at wheel",
        class_name: "grid-in-captain z-20 absolute -bottom-32",
      },
      {
        id: 5,
        src: "/images/photography/vehicle.jpg",
        alt: "Man leaning against SUV near the beach",
        class_name: "grid-in-vehicle z-10 xl:-translate-x-10 translate-y-10",
      },
      {
        id: 6,
        src: "/images/photography/lighthouse.jpg",
        alt: "Lighthouse at sunset",
        class_name:
          "grid-in-lighthouse z-40 translate-y-16 w-52 translate-x-10 lg:w-72",
      },
    ],
    download: {
      title: "Download",
      src: "#",
      class_name: "mb-28 sm:mb-0 mt-10 md:mt-20",
    },
  };
  return (
    <section className="relative pb-20 sm:pb-28">
      <div className="grid lg:grid-cols-2 md:gap-20 max-w-5xl mx-auto px-8">
        <div>
          <SecondaryHeader title={pageData.title} />
          {pageData.content.map((item) => {
            return (
              <p
                key={item.id}
                className="relative text-smoke text-sm md:text-base elza mt-6"
              >
                {item.body}
              </p>
            );
          })}
          <BronzeButton
            title={pageData.download.title}
            link={pageData.download.src}
            styles={pageData.download.class_name}
          />
        </div>
        <div></div>
      </div>
      <div className="-translate-y-20 sm:translate-y-5 md:-translate-y-10 lg:translate-y-0 lg:absolute top-10 right-0 transition-all duration-500 sm:w-full lg:w-[600px] 2xl:w-[800px] grid grid-areas-photography_large">
        {pageData.images.map((image) => {
          return (
            <Image
              key={image.id}
              src={image.src}
              alt={image.alt}
              width={1000}
              height={1000}
              className={image.class_name}
            />
          );
        })}
      </div>
    </section>
  );
}
