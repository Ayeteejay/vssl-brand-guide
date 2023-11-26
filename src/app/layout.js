import Header from "@/components/header";
import "./globals.css";

export const metadata = {
  title: "VSSL Brand Guide",
  description:
    "This guide makes sure that the way we look and sound feels consistent across all of our communications. Keep diving to learn more about the VSSL brand.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-ink">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
