import Image from "next/image";
import { MainText } from "./utilities";
export default function Footer() {
  const pageData = {
    title: "Questions?",
    content:
      "Still have questions? Don't sweat it. Shoot us an email at design@vsslagency.com and we will help you out. Up Spirits!",
  };
  return (
    <footer className="relative max-w-5xl mx-auto px-8 pb-20 sm:pb-40">
      <div className="grid md:grid-cols-2">
        <div>
          <MainText title={pageData.title} />
          <p className="relative text-smoke text-sm md:text-base elza mt-6">
            {pageData.content}
          </p>
        </div>
        <Image
          src="/images/vssl-logo.svg"
          alt="VSSL logo"
          width={2000}
          height={2000}
          priority={true}
          className="translate-y-40"
        />
      </div>
    </footer>
  );
}
