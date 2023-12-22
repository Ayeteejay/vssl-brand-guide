"use client";
import useSWR from "swr";
import { motion } from "framer-motion";
import Image from "next/image";

const PORT = process.env.NEXT_PUBLIC_PORT || "http://127.0.0.1:1337";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Navigation() {
  const { data, error, isLoading } = useSWR(
    `${PORT}/api/navigation?populate=*`,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";

  return (
    <nav className="px-10 lg:px-20 absolute top-0 left-0 z-10">
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.25, type: "tween" }}
        className="min-w-[300px]"
      >
        <Image
          src={`${PORT}${data.data.attributes.image.data.attributes.url}`}
          alt={`${data.data.attributes.image.data.attributes.alternativeText}`}
          width={500}
          height={500}
          priority={true}
          className="w-40 -translate-y-3 transition-all duration-300 md:w-[250px] md:-translate-y-6"
        />
      </motion.div>
    </nav>
  );
}
