import Hero from "@/components/hero";
import Positioning from "@/components/positioning";
import Persona from "@/components/persona";
import Values from "@/components/values";
import Voice from "@/components/voice";
import Boilerplate from "@/components/boilerplate";
import Grit from "@/components/grit";

export default function Home() {
  return (
    <div>
      <Hero />
      <Positioning />
      <Persona />
      <Values />
      <Voice />
      <Boilerplate />
      <Grit />
    </div>
  );
}
