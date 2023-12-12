import Image from "next/image";
import { SecondaryHeader, BronzeButton } from "./utilities";
export default function Illustration() {
  const pageData = {
    title: "Illustration",
    content:
      "VSSL doesn't use icons. Ideally, concepts can be conveyed using beautiful typography and photography. If a smaller visual is needed to communicate an idea, use a sticker. Our stickers are smaller illustrations of nautical stuff that can represent larger concepts. We have several but custom ones can be created too.",
    images: [
      {
        id: 1,
        src: "/images/illustration/lighthouse.png",
        alt: "Lighthouse sticker",
        class_name: "absolute left-0",
      },
      {
        id: 2,
        src: "/images/illustration/octopus.png",
        alt: "Octopus sticker",
        class_name: "absolute top-20 right-0 z-10",
      },
      {
        id: 3,
        src: "/images/illustration/mermaid.png",
        alt: "Mermaid sticker",
        class_name: "absolute top-72 right-32",
      },
    ],
    download: {
      title: "Download",
      src: "#",
      styles: "mt-10 sm:mt-20",
    },
  };
  return (
    <section className="relative max-w-5xl mx-auto px-8 pb-20 sm:pb-28">
      <div className="grid md:grid-cols-2">
        <div>
          <SecondaryHeader title={pageData.title} />
          <p className="text-smoke text-sm md:text-base elza my-3">
            {pageData.content}
          </p>
          <BronzeButton
            title={pageData.download.title}
            link={pageData.download.src}
            styles={pageData.download.styles}
          />
        </div>
        <div className="relative mt-5 md:mt-0">
          {pageData.images.map((image) => {
            return (
              <Image
                key={image.id}
                src={image.src}
                height={300}
                width={300}
                alt={image.alt}
                className={image.class_name}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
