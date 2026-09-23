import Image from "next/image";
import { NavBar } from "./components/NavBar"
import { HeroSection } from "./components/HeroSection";

const links = [
  {
    title: "Birthday Song",
    href: "https://www.youtube.com/watch?v=3_QLj6S7cdQ&list=RD3_QLj6S7cdQ&start_radio=1",
  },
  {
    title: "Om Meg",
    href: "",
  },
  {
    title: "Prosjekter",
    href: "",
  },
  {
    title: "Kontakt Meg",
    href: "",
  },
]

export default function Home() {
  return (
    <div className="">
      <NavBar 
        links={links}
      />
      <HeroSection />
      <div className="justify-items-center place-content-center">
      </div>
    </div>
  );
}
