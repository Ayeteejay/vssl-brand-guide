import { SecondaryText, GinCard } from "./utilities";
export default function Positioning() {
  const ginCardData = [
    {
      id: 1,
      title: "Our Mission",
      description:
        "Our mission is to set the course for our clients, creating bold marketing experiences that propel brands to success.",
    },
    {
      id: 2,
      title: "Our Vision",
      description:
        "We leave the world better than we found it by connecting people: the crew, our clients, and their customers—because collaboration is where cool shit happens.",
    },
  ];
  return (
    <section className="max-w-5xl mx-auto px-8 relative mt-10 md:mt-52 lg:mt-80 z-10">
      <div className="bg-bronze p-10 md:p-20 grid md:grid-cols-5 gap-5 md:gap-10 items-center">
        <div className="md:col-span-3">
          <SecondaryText title={"Positioning"} />
          <p className="elza text-sm md:text-base text-ink">
            VSSL builds brands, invents campaigns, and creates websites for
            growth-oriented B2B businesses. With our brand-first approach,
            companies can:
          </p>
          <ul className="text-sm md:text-base text-smoke mt-5">
            <li className="mb-3">
              <strong>Stand out</strong> in their market with a distinct,
              ownable position
            </li>
            <li className="mb-3">
              <strong>Attract</strong> the right customers by aligning messaging
              and positioning to their specific needs
            </li>
            <li className="mb-3">
              <strong>Gain</strong> maximum value by integrating brand strategy
              across your marketing funnel
            </li>
            <li className="mb-3">
              <strong>Deliver</strong> personalized creative and bold digital
              marketing experiences for their audiences
            </li>
            <li className="mb-3">
              <strong>Capture</strong> continuous, sustained growth for
              long-term success
            </li>
          </ul>
        </div>
        <div className="flex gap-5 flex-col md:col-span-2">
          {ginCardData.map((card) => {
            return (
              <GinCard
                key={card.id}
                title={card.title}
                description={card.description}
              ></GinCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
