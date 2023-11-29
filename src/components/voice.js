import { SecondaryText } from "./utilities";
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
        src: "/images/voice/docks.jpg",
        alt: "Docked boat with life vest and gear",
      },
      {
        id: 2,
        src: "/images/voice/painting.jpg",
        alt: "Painting of a sailor being held by a person",
      },
      {
        id: 3,
        src: "/images/voice/pup.jpg",
        alt: "The sailor's trusty companion",
      },
      {
        id: 4,
        src: "/images/voice/boat.jpg",
        alt: "Boat docked",
      },
    ],
    tone: "When writing for VSSL, think of the narrator as a 30-40 year old scraggly man, who works at the dock and hangs out with sailors. He is NOT a pirate, but he lives on a boat with his dog.",
  };
  return (
    <section>
      <SecondaryText tile={pageData.title} />
    </section>
  );
}
