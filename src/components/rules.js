import Image from "next/image";
import { SecondaryText } from "./utilities";
export default function Rules() {
  const pageData = {
    title: "What not to do",
    content: "Sure, rules are meant to be broken. But don't break these.",
    images: [
      {
        id: 1,
        src: "/images/rules/staged.jpg",
        alt: "Staged and pristine objects",
        title: "Don't choose images that are too pretty, pristine, or staged.",
      },
      {
        id: 2,
        src: "/images/rules/layouts.jpg",
        alt: "Examples of bad layouts",
        title: "Make sure layouts have strong layout and contrast of scale.",
      },
      {
        id: 3,
        src: "/images/rules/colors.jpg",
        alt: "Examples of poor color usage",
        title: "Don't get crazy with color.",
      },
      {
        id: 4,
        src: "/images/rules/illustrations.jpg",
        alt: "Examples of over usage of illustrations",
        title: "Don't incorporate too many illustrative or silly elements.",
      },
    ],
  };
  return (
    <section className="relative max-w-5xl mx-auto px-8 pb-20 sm:pb-28">
      <div className="grid md:grid-cols-2">
        <div>
          <SecondaryText title={pageData.title} />
          <p className="text-smoke text-sm md:text-base elza my-3">
            {pageData.content}
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 sm:gap-7 my-14 md:my-20">
        {pageData.images.map((image) => {
          return (
            <div key={image.id} className="">
              <Image src={image.src} alt={image.alt} height={500} width={500} />
              <p className="text-smoke text-sm md:text-base elza mt-4 mb-12 sm:mb-5 text-center">
                {image.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
