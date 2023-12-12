import Image from "next/image";
import { SecondaryHeader, WilsonHeader, BronzeButton } from "./utilities";
export default function Logos() {
  const pageData = {
    title: "Logo",
    logo_types: [
      {
        id: 1,
        title: "Primary Logo",
        content:
          "This is VSSL's primary logo. You can use it in bronze, ink, or smoke. Whatever gives the most contrast and looks sweet. It's super important but not precious. Crop it, layer it, make it huge or tiny…just don't stretch or distort it.",
        images: [
          {
            id: 1,
            src: "/images/logos/primary-bronze.svg",
            alt: "VSSL primary logo in bronze",
            background: "ink",
          },
          {
            id: 2,
            src: "/images/logos/primary-bronze.svg",
            alt: "VSSL primary logo in bronze",
            background: "smoke",
          },
          {
            id: 3,
            src: "/images/logos/primary-ink.svg",
            alt: "VSSL primary logo in ink",
            background: "bronze",
          },
          {
            id: 4,
            src: "/images/logos/primary-smoke.svg",
            alt: "VSSL primary logo in smoke",
            background: "iron",
          },
        ],
      },
      {
        id: 2,
        title: "Simplified Logo",
        content:
          "Sometimes the texture gets to be too much, such as printing, silkscreening, or embroidery. For those rare cases, we have this clean version to use. Whenever possible, keep it grungy.",
        images: [
          {
            id: 1,
            src: "/images/logos/simplified-smoke.svg",
            alt: "VSSL simplified logo in smoke",
            background: "ink",
          },
          {
            id: 2,
            src: "/images/logos/simplified-ink.svg",
            alt: "VSSL simplified logo in ink",
            background: "bronze",
          },
          {
            id: 3,
            src: "/images/logos/simplified-bronze.svg",
            alt: "VSSL simplified logo in bronze",
            background: "smoke",
          },
        ],
      },
      {
        id: 3,
        title: "Flag Logo",
        content:
          "The flag logo is a nice secondary option to use really small, on things like email signatures, favicons, or powerpoint decks. It's more of a graphic element that reflects our brand.",
        images: [
          {
            id: 1,
            src: "/images/logos/flag-smoke.svg",
            alt: "VSSL flag logo in smoke",
            background: "ink",
          },
          {
            id: 2,
            src: "/images/logos/flag-ink.svg",
            alt: "VSSL flag logo in ink",
            background: "bronze",
          },
          {
            id: 3,
            src: "/images/logos/flag-bronze.svg",
            alt: "VSSL flag logo in bronze",
            background: "smoke",
          },
        ],
      },
    ],
  };
  return (
    <section className="relative max-w-5xl mx-auto px-8 pb-20 sm:pb-28">
      <SecondaryHeader title={"Logo"} styles={"mb-12 sm:mb-14 md:mb-20"} />
      <div className="relative grid md:grid-cols-5 md:gap-20">
        <div className="md:col-span-2">          
          <h5 className="text-smoke gin-regular text-2xl transition-all duration-500 group-hover:text-bronze">
            {pageData.logo_types[0].title}
          </h5>
          <p className="text-smoke text-sm md:text-base elza my-3">
            {pageData.logo_types[0].content}
          </p>
        </div>
        <WilsonHeader
          title={"Scroll left and right ya' loser"}
          styles={"block sm:hidden absolute top-36 -left-5 sm:top-32 z-10"}
        />
        <div className="md:col-span-3 flex mt-3 md:mt-0 mb-6 md:mb-0 overflow-scroll sm:grid sm:grid-cols-2 md:grid-cols-2">
          {pageData.logo_types[0].images.map((image) => {
            return (
              <Image
                key={image.id}
                src={image.src}
                height={2000}
                width={2000}
                alt={image.alt}
                className={`py-12 px-16 bg-${image.background}`}
              />
            );
          })}
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-20 md:mt-32">
        {pageData.logo_types.map((logo, index) => {
          if (index !== 0) {
            return (
              <div className="relative" key={logo.id}>
                <h5 className="text-smoke gin-regular text-2xl transition-all duration-500 group-hover:text-bronze">
                  {logo.title}
                </h5>
                <p className="text-smoke text-sm md:text-base elza my-3">
                  {logo.content}
                </p>
                <WilsonHeader
                  title={"Scroll left and right ya' loser"}
                  styles={"block sm:hidden absolute top-32 -left-5 z-10"}
                />
                <div className="flex overflow-scroll sm:grid sm:grid-cols-3 mb-6 md:mb-0">
                  {logo.images.map((image) => {
                    return (
                      <Image
                        key={image.id}
                        src={image.src}
                        height={2000}
                        width={2000}
                        alt={image.alt}
                        className={`mt-5 p-10 bg-${image.background}`}
                      />
                    );
                  })}
                </div>
              </div>
            );
          }
        })}
      </div>
      <BronzeButton title="Download" link={"#"} styles={"mt-10 md:mt-20"} />
    </section>
  );
}
