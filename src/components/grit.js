import { MainText, WilsonText } from "./utilities";
import Image from "next/image";
export default function Grit() {
  const pageData = {
    title: "Screw Pretty — We're Gritty",
    description:
      "In this section, we will get into the visual elements of the brand and the ways they should be used. Yes, these are rules to be followed—but they are also meant to be broken. As long as the spirit of the brand remains intact, you're probably good.",
    wilson_description: "Push the rules but don't fuck it up",
    images: [
      {
        id: 1,
        src: "/images/grit/fish.jpg",
        alt: "Dead fish",
        width: 500,
        height: 500,
        className: "grid-in-fish translate-y-10 sm:w-72 md:w-full transition-all duration-500 opacity-50 md:opacity-100 hover:-rotate-3",
        link:"https://youtu.be/V6CLumsir34?si=c3_wVKEh3CPFwsA2",
      },
      {
        id: 2,
        src: "/images/grit/crust.png",
        alt: "Crusty old fisherman",
        width: 300,
        height: 300,
        className: "grid-in-crust transition-all duration-500 opacity-50 md:opacity-100",
      },
      {
        id: 3,
        src: "/images/grit/cliff.jpg",
        alt: "Two fisherman on cliff",
        width: 300,
        height: 300,
        className: "grid-in-cliff transition-all duration-500 w-40 sm:w-52 md:w-full translate-x-10 translate-y-10 opacity-25 md:opacity-100 md:translate-x-0 md:-translate-y-6",
      },
    ],    
  };
  return (
    <section className="relative max-w-5xl mx-auto px-8 pb-48 sm:pb-28">
      <div className="grid md:grid-cols-5 gap-5 md:gap-14">
        <div className="md:col-span-2 relative flex items-center">
          <div className="absolute top-1/3 md:w-[700px] lg:w-[800px] z-10">
          <MainText title={pageData.title} />
          <p className="relative text-smoke text-sm md:text-base elza mt-6">
            {pageData.description}
          </p>
          </div>
        </div>
        <div className="py-10 md:py-0 md:col-span-3 relative grid grid-areas-grit_small md:grid-areas-grit_large">          
        <WilsonText title={pageData.wilson_description} styles={"transition-all duration-500 opacity-0 md:opacity-100 absolute top-[600px] left-52 z-10"}/>
          {pageData.images.map((image) => {
            if(image.link !== undefined){
              return (
                <a key={image.id} className={image.className} href={image.link} target="_blank">              
                <Image
                  key={image.id}
                  src={image.src}
                  height={image.height}
                  width={image.width}
                  alt={image.alt}                  
                />              
              </a>
              )
            }else{
              return (
                <Image
                  key={image.id}
                  src={image.src}
                  height={image.height}
                  width={image.width}
                  alt={image.alt}
                  className={image.className}
                />
              );
            }
          })}                    
        </div>
      </div>
    </section>
  );
}
