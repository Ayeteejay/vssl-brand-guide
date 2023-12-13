"use client";
import { SecondaryHeader, ValueCard } from "./utilities";
export default function Values() {
  const pageData = {
    title: "Our Values",
    values: [
      {
        id: 1,
        image: {
          src: "/images/values/we-are-one-crew.svg",
          alt: "We are one crew",
        },
        title: "We Are One Crew",
        description:
          "The strongest crew is one that works (and celebrates) together. That's because none of us is as smart as all of us. Through everything, we always have each others' backs.",
        bullets: [
          {
            id: 1,
            description: "We act with integrity and respect",
          },
          {
            id: 2,
            description: "We honor each other's unique differences",
          },
          {
            id: 3,
            description: "We are open and honest",
          },
          {
            id: 4,
            description:
              "We [are/work/grow] better together. None of us is as smart as all of us",
          },
        ],
      },
      {
        id: 2,
        image: {
          src: "/images/values/communication-is-our-compass.svg",
          alt: "Communication is our compass",
        },
        title: "Communication Is Our Compass",
        description:
          "Clear communication is our guide. We're open with our thoughts and open-minded towards others. We're always respectful—but we don't sugarcoat shit.",
        bullets: [
          {
            id: 1,
            description: "We are transparent, honest, and we do not judge",
          },
          {
            id: 2,
            description: "We proactively communicate clearly and regularly",
          },
          {
            id: 3,
            description:
              "We provide as much detail as possible, as often as possible",
          },
          {
            id: 4,
            description: "We give and receive feedback in a respectful way",
          },
        ],
      },
      {
        id: 3,
        image: {
          src: "/images/values/quality-is-our-course.svg",
          alt: "Quality is our course",
        },
        title: "Quality Is Our Course",
        description:
          "Our people and our work are our greatest assets. That's why we don't compromise when it comes to our crew, our clients, and our work. We deliver the best—every damn time.",
        bullets: [
          {
            id: 1,
            description:
              "We do not sacrifice quality of work for quantity of work",
          },
          {
            id: 2,
            description:
              "We actively partner to deliver high-quality work for our clients",
          },
          {
            id: 3,
            description:
              "As we grow, we take into consideration the quality of people (employees) and clients we bring on",
          },
          {
            id: 4,
            description:
              "We are committed to our people and our projects, while maintaining healthy expectations",
          },
        ],
      },
      {
        id: 4,
        image: {
          src: "/images/values/all-hands-on-deck.svg",
          alt: "All hands on deck",
        },
        title: "All Hands On Deck",
        description:
          "We know how to solve problems together by staying focused on creative solutions. We aren't fazed by challenges or risk taking. In fact, that's where we thrive.",
        bullets: [
          {
            id: 1,
            description: "We are solutions oriented",
          },
          {
            id: 2,
            description: "We move thoughtfully and quickly to resolve problems",
          },
          {
            id: 3,
            description:
              "We assume positive intent and do not punish honest mistakes; we own our mistakes and learn from them",
          },
          {
            id: 4,
            description: "We confront issues not people",
          },
        ],
      },
      {
        id: 5,
        image: {
          src: "/images/values/up-spirits.svg",
          alt: "Up spirits",
        },
        title: "Up Spirits",
        description:
          "We're a tight-knit group—we celebrate our wins and have fun along the way. Each crew member contributes to our collective success. “Up Spirits!” is our rally cry when the grog starts flowing.",
        bullets: [
          {
            id: 1,
            description: "We have fun",
          },
          {
            id: 2,
            description: "We acknowledge each other's unique contributions",
          },
          {
            id: 3,
            description: "We are mindful of work-life balance",
          },
          {
            id: 4,
            description:
              "We celebrate often—all wins, big or small. Up spirits!",
          },
        ],
      },
    ],
  };
  return (
    <section className="max-w-5xl mx-auto px-8 sm:px-[70px] relative">
      <SecondaryHeader
        title={pageData.title}
        styles={"md:pl-[380px] pb-10 md:pb-4"}
      />
      <div className="flex flex-col gap-12 md:gap-16">
        {pageData.values.map((value, index) => {
          return (
            <ValueCard
              index={index}
              key={value.id}
              image={value.image}
              title={value.title}
              description={value.description}
              bullets={value.bullets}
            />
          );
        })}
      </div>
    </section>
  );
}
