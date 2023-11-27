import Image from "next/image";
export default function Header() {
  return (
    <nav className="px-10 lg:px-20 absolute top-0 left-0">
      <Image
        src="/images/vssl-logo.svg"
        alt="VSSL logo"
        width={500}
        height={500}
        priority={true}
        className="w-40 -translate-y-3 transition-all duration-300 md:w-[250px] md:-translate-y-6"
      />
    </nav>
  );
}
