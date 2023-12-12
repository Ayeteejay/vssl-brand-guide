import { SecondaryHeader, TertiaryHeader, SmallHeader } from "./utilities";
export default function Colors() {
  const pageData = {
    title: "Color",
    content:
      "VSSL uses a pretty limited color palette, which feels purposeful, elegant, and utilitarian. Ink, Smoke, and Iron are the primary colors, with small hits of Bronze here and there to create emphasis. And yes, Ink and Smoke are just black and white. But that's boring.",
    primary_colors: [
      {
        id: 1,
        title: "Ink",
        title_color: "smoke",
        hexcode: "#000000",
        rgb: "0, 0, 0",
        rgba: "60, 40, 40, 100",
        code_color: "faded_iron",
      },
      {
        id: 2,
        title: "Smoke",
        title_color: "ink",
        hexcode: "#FFFFFF",
        rgb: "255, 255, 255",
        rgba: "0, 0, 0, 0",
        code_color: "faded_iron",
      },
      {
        id: 3,
        title: "Bronze",
        title_color: "smoke",
        hexcode: "#9C794F",
        rgb: "156, 121, 79",
        rgba: "36, 48, 75, 13",
        code_color: "ink",
      },
      {
        id: 4,
        title: "Iron",
        title_color: "smoke",
        hexcode: "#222222",
        rgb: "34, 34, 34",
        rgba: "70, 65, 65, 60",
        code_color: "faded_iron",
      },
    ],
    secondary_colors: {
      title: "Secondary Colors",
      content:
        "When in doubt, don't use these colors. These are only to be used in things like graphs or data visualization where more than 3 colors are absolutely essential. They should not be used in anything for web, social, swag, ads, or layouts.",
      colors: [
        {
          id: 1,
          title: "barnacle_green",
          hexcode: "#686A4E",
          rgb: "104, 106, 78",
        },
        {
          id: 2,
          title: "rusted_brown",
          hexcode: "#6E4929",
          rgb: "110, 73, 41",
        },
        {
          id: 3,
          title: "faded_blue",
          hexcode: "#49555D",
          rgb: "73, 85, 93",
        },
        {
          id: 4,
          title: "sand_beige",
          hexcode: "#978B77",
          rgb: "151, 139, 119",
        },
      ],
    },
  };
  return (
    <section className="relative max-w-5xl mx-auto px-8 pb-20 sm:pb-28">
      <div className="bg-ink bg-smoke bg-bronze bg-iron bg-barnacle_green bg-rusted_brown bg-faded_blue bg-sand_beige hidden"></div>
      <div className="grid md:grid-cols-2">
        <div>
          <SecondaryHeader title={pageData.title} />
          <p className="text-smoke text-sm md:text-base elza my-3">
            {pageData.content}
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 my-14 md:my-20">
        {pageData.primary_colors.map((color) => {
          return (
            <div
              key={color.id}
              className={`px-10 py-10 sm:py-16 bg-${color.title.toLowerCase()}`}
            >
              <TertiaryHeader
                title={color.title}
                styles={`mb-4 text-${color.title_color}`}
              />
              <p
                className={`rift font-bold leading-tight text-${color.code_color}`}
              >
                {color.title}
                <br />
                {color.hexcode}
                <br />
                {color.rgb}
                <br />
                {color.rgba}
              </p>
            </div>
          );
        })}
      </div>
      <div className="grid md:grid-cols-2 md:gap-20">
        <div>
          <TertiaryHeader
            title={pageData.secondary_colors.title}
            styles={"text-smoke"}
          />
          <p className="text-smoke text-sm md:text-base elza my-3">
            {pageData.secondary_colors.content}
          </p>
        </div>
        <div className="grid grid-cols-4 sm:py-5 mt-5 sm:mt-0">
          {pageData.secondary_colors.colors.map((color) => {
            return (
              <div
                key={color.id}
                className={`flex justify-center py-6 md:py-0 items-center bg-${color.title}`}
              >
                <p className={`rift font-bold leading-tight`}>
                  {color.hexcode}
                  <br />
                  {color.rgb}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
