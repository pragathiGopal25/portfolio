import { HeroSection } from "./components/HeroSection";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row items-center justify-center gap-60 p-16">
        <HeroSection />
        <div className="flex flex-col gap-10">
          <h1 className="text-6xl font-bold text-[#e1bb80]">Software Developer</h1>
          <p className="text-2xl font-bold text-[#e1bb80]">
            Masters student at NTNU 
            <br></br>
            Always up for a new challenge and opportunity!
          </p>
        </div>
      </div>
    </div>
  );
}
