"use client";
import useSWR from "swr";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { SecondaryHeader, PersonaCard, Paragraph } from "./utilities";

const PORT = process.env.NEXT_PUBLIC_PORT || "http://127.0.0.1:1337";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Persona() {
  const { scrollYProgress } = useScroll();
  const captainTranslateY = useTransform(scrollYProgress, [0, 1], [0, -5000]);
  const lydiaTranslateY = useTransform(scrollYProgress, [0, 1], [0, -4000]);

  const { data, error, isLoading } = useSWR(
    `${PORT}/api/persona?populate=*`,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";

  return (
    <section className="max-w-5xl mx-auto px-8 sm:px-[70px] md:px-28 relative pt-4 pb-20 sm:py-32">
      <div className="grid md:grid-cols-2 md:items-center">
        <div>
          <div className="z-10 relative">
            <SecondaryHeader title={`${data.data.attributes.title}`} />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, type: "tween" }}
            >
              <Paragraph
                description={data.data.attributes.description}
                className={"text-smoke"}
              />
            </motion.div>
          </div>
          <Image
            className="absolute -top-32 right-0 z-0 transition-all duration-300 opacity-40 md:opacity-60 h-auto w-auto"
            src={`${PORT}${data.data.attributes.shipwreck_image.data.attributes.url}`}
            alt={`${data.data.attributes.shipwreck_image.data.attributes.alternativeText}`}
            width={500}
            height={500}
            priority={true}
          />
        </div>

        <motion.div
          className="hidden md:block relative ml-auto top-96"
          style={{ translateY: captainTranslateY }}
        >
          <Image
            src={`${PORT}${data.data.attributes.captain_image.data.attributes.url}`}
            alt={`${data.data.attributes.captain_image.data.attributes.alternativeText}`}
            width={250}
            height={250}
            className="h-auto w-auto"
          />
        </motion.div>
      </div>
      <div className="grid md:grid-cols-5 mt-10 md:mt-20">
        <motion.div
          className="absolute top-[1200px] left-0 hidden md:block hover:rotate-2"
          style={{ translateY: lydiaTranslateY }}
        >
          <Image
            src={`${PORT}${data.data.attributes.tattooed_image.data.attributes.url}`}
            alt={`${data.data.attributes.tattooed_image.data.attributes.alternativeText}`}
            height={250}
            width={250}
            className="h-auto w-auto"
          />
        </motion.div>
        <div className="col-span-1"></div>
        <div className="flex col-span-4 md:pl-20 gap-10">
          {data.data.attributes.personas.map((persona) => {
            return (
              <PersonaCard
                key={persona.id}
                title={persona.title}
                description={persona.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
