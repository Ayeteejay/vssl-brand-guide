import { SecondaryHeader, BronzeButton } from "./utilities";
export default function Typography() {
  const pageData = {
    title: "Typography",
    content:
      "VSSL uses four typefaces. I know, that's a lot but they all serve a pretty specific purpose. Gin is used for headlines. For main headlines, layer and offset Gin Regular with Gin Lines to provide some nice texture and depth. Rift Bold with ample tracking is used for tiny headlines and CTAs. It's similar to Gin but simpler and cleaner, which makes it more functional at small sizes. Elza text is the workhorse, used for all body copy and lengthy blocks of text. Lastly, we have Wilson Wells. Wilson Wells is a blackletter font that should be used very sparingly for textural and playful typography that evokes a brand personality more than anything else.",
    typography_types: [
      {
        id: 1,
        title: "Gin Regular & Gin Lines",
        content:
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?@#$%",
        class_name: "text-5xl md:text-8xl",
        link: "",
      },
      {
        id: 2,
        title: "Rift Bold",
        content:
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?@#$%",
        class_name: "text-smoke rift font-bold leading-[1.1] text-6xl",
        link: "",
      },
      {
        id: 3,
        title: "Elza Light",
        content:
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?@#$%",
        class_name: "text-smoke elza font-thin leading-tight text-5xl",
        link: "",
      },
      {
        id: 4,
        title: "Wilson Wells",
        content:
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?@#$%",
        class_name: "text-smoke wilson font-thin leading-tight text-4xl",
        link: "",
      },
    ],
  };
  return (
    <section className="relative max-w-5xl mx-auto px-8 pb-20 sm:pb-28">
      <SecondaryHeader title={pageData.title} />
      <p className="text-smoke text-sm md:text-base elza my-3">
        {pageData.content}
      </p>
      {pageData.typography_types.map((type, index) => {
        if (index === 0) {
          return (
            <div key={type.id} className="bg-iron p-10 md:p-14 my-14 md:my-20 transition-all duration-300 hover:-rotate-2">
              <p className={`gin-regular text-white relative break-all ${type.class_name}`}>
                {type.content}
                <span className="gin-lines text-iron absolute top-[2px] left-[2px] opacity-40">
                  {type.content}
                </span>
              </p>
              <p className="text-faded_iron rift font-bold mt-5">
                {type.title}
              </p>
            </div>
          );
        } else {
          return (
            <div key={type.id} className="px-5 py-8 md:py-10">
              <p className={`break-all ${type.class_name}`}>{type.content}</p>
              <p className="text-faded_iron rift font-bold mt-5">
                {type.title}
              </p>
            </div>
          );
        }
      })}
      <BronzeButton title={"Download"} link={"#"} styles={"mt-10"}/>
    </section>
  );
}
