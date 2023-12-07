import { SecondaryText } from "./utilities";
export default function Texture() {
  const pageData = {
    title: "Texture",
    content:
      "VSSL uses texture to create dimension and counter-balance the graphic quality of our typography. Screened back film dust, abstract water, ropes, shiplap, or parts of a ship are good things to explore. Always make sure that texture comes from raster-based assets, not vector ones.",
    images: [
      {
        id: 1,
        src: "/images/texture/paper.jpg",
      },
      {
        id: 2,
        src: "/images/texture/ocean.png",
      },
      {
        id: 3,
        src: "/images/texture/ship.png",
      },
      {
        id: 4,
        src: "/images/texture/wood.jpg",
      },
    ],
  };
  return (
    <section className="relative max-w-5xl mx-auto px-8 pb-20 sm:pb-28">
      <div className="grid md:grid-cols-2">
        <div>
          <SecondaryText title={pageData.title} />
          <p className="relative text-smoke text-sm md:text-base elza mt-6">
            {pageData.content}
          </p>
        </div>
      </div>
      <div className="my-14 md:my-20 grid grid-cols-4 sm:grid-cols-2 sm:gap-8">
        {pageData.images.map((image) => {
          return (
            <div
              key={image.id}
              className={`h-72 bg-cover bg-center bg-no-repeat`}
              style={{ backgroundImage: `url(${image.src})` }}
            ></div>
          );
        })}
      </div>
    </section>
  );
}
