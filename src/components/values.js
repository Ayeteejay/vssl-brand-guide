"use client";
import useSWR from "swr";
import { usePort } from "./hooks";
import { SecondaryHeader, ValueCard } from "./utilities";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Values() {
  const PORT = usePort();
  const { data, error, isLoading } = useSWR(
    `${PORT}/api/our-value?populate[0]=values&populate[1]=values.image&populate[2]=values.image.media`,
    fetcher
  );
  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";

  return (
    <section className="relative max-w-5xl mx-auto px-8 sm:px-[70px]">
      <SecondaryHeader
        title={`${data.data.attributes.title}`}
        className={"md:pl-[380px] pb-10 md:pb-4"}
      />
      <div className="flex flex-col gap-12 md:gap-16">
        {data.data.attributes.values.map((value) => {
          return (
            <ValueCard
              key={value.image.data.id}
              image={`${PORT}${value.image.data.attributes.url}`}
              alt={value.image.data.attributes.alternativeText}
              title={value.title}
              description={value.description}
            />
          );
        })}
      </div>
    </section>
  );
}
