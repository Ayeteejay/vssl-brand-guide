import { SecondaryHeader } from "./utilities";
export default function Boilerplate() {
  const pageData = {
    title: "Boilerplate",
    description: [
      {
        id: 1,
        title: "About VSSL (short)",
        content:
          "VSSL Agency is a full-service creative digital marketing agency located in San Diego. VSSL builds brands, invents campaigns, and creates websites for growth-oriented B2B businesses who are ready to expand their digital future.",
      },
      {
        id: 2,
        title: "About VSSL (long)",
        content:
          "VSSL Agency is a full-service creative digital marketing agency located in San Diego. VSSL builds brands, invents campaigns, and creates websites for growth-oriented B2B businesses who are ready to expand their digital future. With our brand-first approach, companies can stand out in their market, attract the right customers, gain maximum value, and deliver bold digital marketing experiences that will drive sustained growth for long-term success.",
      },
    ],
  };
  return (
    <section className="max-w-5xl mx-auto px-8 relative mb-16 md:mb-32">
      <SecondaryHeader title={pageData.title} styles={"mb-10"} />
      <div className="grid md:grid-cols-2 gap-5 md:gap-14">
        {pageData.description.map((item) => {
          return (
            <div key={item.id} className="group">
              <h5 className="text-smoke gin-regular text-2xl transition-all duration-500 group-hover:text-bronze">
                {item.title}
              </h5>
              <p className="text-smoke text-sm md:text-base elza my-3 transition-all duration-500 group-hover:text-bronze">
                {item.content}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
