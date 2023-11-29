import Image from "next/image";
import { SecondaryText, ProfileCard } from "./utilities";
export default function Persona() {
  const pageData = {
    title: "Persona",
    description: [
      {
        id: 1,
        text: "We are a small, scrappy group of marketers passionate about creating killer work. We are located right on the water and influenced by the sailors and fishermen on the docks and in our building. We were founded with the intention to bring passion to our work and not just follow in the footsteps of other agencies. We never settle for the obvious solution and are always looking for ways to do unexpected things for our clients. We are who we are, and we don&rsquo;t want to fit into the box of a creative agency.",
      },
      {
        id: 2,
        text: "VSSL is two archetypes: The Outlaw and The Creator. That influences everything in our brand: our positioning, brand voice, visual identity, and culture. It gives us a very different brand voice that reflects our disruptive spirit, allows us to operate differently than other agencies, and gives us the opportunity to be super creative with our design. We are not just another agency, nor do we want to be.",
      },
    ],
    profiles: [
      {
        id: 1,
        title: "The Outlaw",
        description:
          "The Outlaw disrupts, challenges the status quo, paves their own path, and bucks trends. They can be divisive and aren't for everyone — people either love them or hate them. They have a set of unwavering beliefs and aren't known to follow the rules",
        bullets: [
          {
            id: 1,
            description:
              "At their best, they are independent, strong, and disruptive.",
          },
          {
            id: 2,
            description:
              "At their worst, they are stubborn, offputting, and arrogant.",
          },
          {
            id: 3,
            description: "Core Belief: Rules are meant to be broken.",
          },
        ],
      },
      {
        id: 2,
        title: "The Creator",
        description:
          "The Creator is excited to explore ideas and create things with lasting value, embracing the creative process just as much as the end result. They are original, self-expressive, and passionate. They tend to make products or provide services that enable other creators.",
        bullets: [
          {
            id: 1,
            description:
              "At their best, they are provocative, imaginative, and trendsetters.",
          },
          {
            id: 2,
            description:
              "At their worst, they are directionless, egotistical, and obsessive.",
          },
          {
            id: 3,
            description:
              "Core belief: If it can be imagined, it can be created.",
          },
        ],
      },
    ],
  };
  return (
    <section className="max-w-5xl mx-auto px-8 sm:px-[70px] md:px-28 relative py-10 sm:py-16">
      <div className="grid md:grid-cols-2 md:items-center">
        <div>
          <div className="z-10 relative">
            <SecondaryText title={pageData.title} />
            {pageData.description.map((item, index) => {
              return (
                <p
                  className={`text-smoke elza text-sm md:text-base ${
                    index === 0 ? "mb-4" : ""
                  }`}
                  key={item.id}
                >
                  {item.text}
                </p>
              );
            })}
          </div>
          <Image
            className="absolute -top-32 right-0 z-0 transition-all duration-300 opacity-40 md:opacity-100"
            src="/images/persona/shipwrecked.png"
            width={500}
            height={500}
            alt="Shipwrecked crew"
          />
        </div>
        <Image
          className="hidden md:block relative ml-auto"
          src="/images/persona/captain.png"
          width={250}
          height={250}
          alt="The captain of the ship"
        />
      </div>
      <div className="grid md:grid-cols-5 mt-10 md:mt-20">
        <Image
          src="/images/persona/lydia.jpg"
          height={250}
          width={250}
          alt="Lydia the tattooed lady"
          className="absolute left-0 hidden md:block transition-all duration-300 hover:rotate-2"
        />
        <div className="col-span-1"></div>
        <div className="flex col-span-4 md:pl-20 gap-10">
          {pageData.profiles.map((profile) => {
            return (
              <ProfileCard
                key={profile.id}
                title={profile.title}
                description={profile.description}
                bullets={profile.bullets}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
