import { MainText, WilsonText } from "./utilities";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="">
      <div className="relative z-10 max-w-xl mx-auto px-8 sm:px-0">
        <MainText title="Who the hell is VSSL?" />
        <p className="elza text-white relative text-lg pt-80 sm:pt-56">
          We&apos;re a crew of digital marketing creatives, builders, and
          strategists that know how to make brands stand out. We identify and
          amplify what makes your brand unique in order to make waves and sink
          the competition. This guide makes sure that the way we look and sound
          feels consistent across all of our communications. Keep diving to
          learn more about the VSSL brand.
        </p>
      </div>
      <div className="w-full absolute top-0 left-0 z-0 grid grid-areas-hero_small sm:grid-areas-hero_large">
        <Image
          src="/images/hero/pirates.png"
          width={1500}
          height={1500}
          alt="Pirates hanging out on the deck"
          className="grid-in-pirates pl-52"
        />
        <Image
          src="/images/hero/shaka.png"
          width={350}
          height={350}
          alt="Hand throwing up a shaka in the water"
          className="grid-in-shaka"
        />
        <Image
          src="/images/hero/storm.jpg"
          width={500}
          height={500}
          alt="Person walking on the beach"
          className="grid-in-storm pl-32"
        />
        <div className="grid-in-coin relative pt-10">
          <Image
            src="/images/hero/coin.jpg"
            width={300}
            height={300}
            alt="VSSL Challenge coin"
          />
          <WilsonText
            title="We're not pirates but we're salty as shit"
            styles={"absolute -top-5 -left-20 hidden xl:block"}
          />
        </div>
      </div>
    </section>
  );
}
