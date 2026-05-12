import type { Metadata } from "next";
import { inter, cormorant } from "@/lib/fonts";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Holly Natasha",
  description:
    "Personal site of Holly Natasha. Mechanical Engineering at Tsinghua, AI products, short-form video. Based in Beijing.",
  metadataBase: new URL("https://hollynatasha.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black-coffee">
        <Nav />
        <main className="flex-1 pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
