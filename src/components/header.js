import Image from "next/image";
export default function Header() {
  return (
    <nav className="max-w-7xl mx-auto relative z-50">
      <Image
        src="/images/vssl-logo.svg"
        alt="VSSL logo"
        width={250}
        height={250}
        priority={true}
        className="-translate-y-6"
      />
    </nav>
  );
}
