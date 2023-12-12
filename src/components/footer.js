import Image from "next/image";
import { PrimaryHeader } from "./utilities";
export default function Footer() {
  const pageData = {
    title: "Questions?",
    content:
      "Still have questions? Don't sweat it. Shoot us an email at design@vsslagency.com and we will help you out. Up Spirits!",
  };
  return (
    <footer className="relative max-w-5xl mx-auto px-8 pb-20 sm:pb-40 overflow-hidden">
      <div className="grid md:grid-cols-2 pb-52">
        <div>
          <PrimaryHeader title={pageData.title} />
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
          className="w-[600px] absolute -bottom-20 -left-5 sm:bottom-auto sm:left-auto sm:top-52 sm:right-10"
        />
      </div>
    </footer>
  );
}
