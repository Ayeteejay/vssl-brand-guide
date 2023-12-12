import Image from "next/image";
import { SecondaryHeader } from "./utilities";
export default function Voice() {
  const pageData = {
    title: "Tone of Voice",
    description: [
      {
        id: 1,
        text: "When speaking, we're straight and to the point, with no fluff. We say what we mean, but keep it light and not heavy-handed. Cursing is ok for emphasis, but should be used sparingly. Nautical phrases come up from time-to-time, but they're not forced and need to be subtle. Avoid pirate-speak at all costs. Copy should be clever or witty but not silly - there's a slight wink behind things.",
      },
      {
        id: 2,
        text: "The VSSL tone is always used on key website pages, collateral, sales decks, social media, etc. A less stylized (but professional/conversational) tone is appropriate for project outlines and SOWs, as well as blog posts and social media posts that discuss content that isn't specific to VSSL (e.g. general marketing or other B2B-oriented content).",
      },
    ],
    images: [
      {
        id: 1,
        src: "/images/voice/docks.png",
        alt: "Docked boat with life vest and gear",
        width: 700,
        height: 700,
        className: "absolute top-5 md:top-20 -left-20",
      },
      {
        id: 2,
        src: "/images/voice/painting.jpg",
        alt: "Painting of a sailor being held by a person",
        width: 300,
        height: 300,
        className: "grid-in-painting relative -translate-y-5",
      },
      {
        id: 3,
        src: "/images/voice/pup.jpg",
        alt: "The sailor's trusty companion",
        width: 200,
        height: 200,
        className: "grid-in-dog relative",
      },
      {
        id: 4,
        src: "/images/voice/boat.jpg",
        alt: "Boat docked",
        width: 200,
        height: 200,
        className: "grid-in-boat relative m-3",
      },
    ],
    tone: "When writing for VSSL, think of the narrator as a 30-40 year old scraggly man, who works at the dock and hangs out with sailors. He is NOT a pirate, but he lives on a boat with his dog.",
  };
  return (
    <section className="bg-ink relative">
      <div className="max-w-5xl mx-auto px-8 py-16 my-16 md:py-32 md:my-32">
        <SecondaryHeader title={pageData.title} />
        <div className="grid md:grid-cols-2 md:gap-14">
          <div id="collage" className="order-2 md:order-1 mt-10">
            <div className="grid grid-areas-voice relative pt-5 md:pt-10 px-10 md:p-5">
              {pageData.images.map((image) => {
                return (
                  <Image
                    key={image.id}
                    height={image.height}
                    width={image.width}
                    alt={image.alt}
                    src={image.src}
                    className={image.className}
                  />
                );
              })}
            </div>
            <p className="text-smoke text-sm md:text-base elza mt-4 md:mt-0">
              {pageData.tone}
            </p>
          </div>
          <div className="order-1 md:order-2">
            {pageData.description.map((item, index) => {
              return (
                <p
                  key={item.id}
                  className={`text-smoke text-sm md:text-base elza ${
                    index === 0 ? "mb-4" : ""
                  }`}
                >
                  {item.text}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
