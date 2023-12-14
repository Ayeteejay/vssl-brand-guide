"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Header() {
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
          src="/images/vssl-logo.svg"
          alt="VSSL logo"
          width={500}
          height={500}
          priority={true}
          className="w-40 -translate-y-3 transition-all duration-300 md:w-[250px] md:-translate-y-6"
        />
      </motion.div>
    </nav>
  );
}
