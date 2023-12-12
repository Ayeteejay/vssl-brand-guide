import Image from "next/image";
import { SecondaryHeader } from "./utilities";
export default function Grid() {
  const pageData = {
    title: "Layout",
    content:
      "VSSL uses a really strong grid system to provide an underlying structure for things like collages and typography. Make sure to use a base unit of measurement (shown as “x” below) for all of your spacing and layering. That way, it is more obvious when we totally break it.",
    image: {
      src: "/images/grid/layout.jpg",
      alt: "Layout example showing proper grid usage",
    },
  };
  return (
    <section className="relative max-w-5xl mx-auto px-8 mt-[500px] sm:mt-[400px] md:mt-0 pt-20 sm:pt-40 pb-20 sm:pb-28">
      <div className="grid md:grid-cols-2">
        <div>
          <SecondaryHeader title={pageData.title} />
          <p className="text-smoke text-sm md:text-base elza my-3">
            {pageData.content}
          </p>
        </div>
      </div>
      <Image
        src={pageData.image.src}
        height={1000}
        width={1000}
        alt={pageData.image.alt}
        className="my-14 md:my-20"
      />
    </section>
  );
}
