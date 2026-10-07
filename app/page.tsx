"use client";
import { HeroSection } from "./components/HeroSection";

const techStack = ["Java", "Python", "Kotlin", "PostgreSQL", "C", "React", "TypeScript"]

export default function Home() {

  const downloadCV = (
    filename: string 
  ) => {
    const element = document.createElement("a");
    element.href = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
  return (
    <div className="min-h-screen">
      <div className="flex min-h-screen flex-col md:flex-row items-center justify-center gap-10 px-8 pb-30 md:gap-10">

        <div className="w-full md:w-1/2 flex justify-center">
          <HeroSection />
        </div>

        <div className="w-full md:w-1/2 max-w-2xl flex flex-col gap-6 border border-amber-50 bg-amber-50 shadow-amber-400 p-8 rounded-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-[#e1bb80]">
            Software Developer
          </h1>

          <p className="text-lg md:text-2xl font-bold text-[#e1bb80] leading-relaxed">
            M.Sc. Informatics: Artificial Intelligence @ NTNU
          </p>
          <p className="text-[#d09a48] text-justify">

            I am a creative and organized master’s student and aspiring
            software developer from NTNU. I am passionate about programming
            and developing innovative solutions. Throughout my studies and
            summer job I have gained solid knowledge and experience with core
            programming languages such as Java, Python, Kotlin, React/Next.js,
            SQL and C. I learn and grasp new concepts quickly and approach
            problems with a systematic, analytical and solution-oriented
            mindset. Through various work experiences and academic projects,
            I have also developed strong leadership and collaboration skills.
            I am looking for an appropriate opportunity which fulfills my
            professional ambitions.
          </p>
          <div className="flex flex-wrap gap-2 items-center justify-center">
                {techStack.map((tech) => (
                    <span className="border rounded-lg bg-[#A4AC86] pl-2 pr-2" key={tech}>{tech + ""}</span>
                ))}
          </div>
          <div className="flex gap-12 items-center justify-center">
            <button className="border rounded-2xl bg-amber-200 w-full pl-12 pr-12 pt-2 pb-2" id="downloadNorsk" value="download" onClick={() => downloadCV("/Pragathi_Gopal_CV.pdf")}>CV_Norsk</button>
            <button className="border rounded-2xl bg-amber-200 w-full pl-12 pr-12 pt-2 pb-2"id="downloadEngelsk" value="download" onClick={() => downloadCV("/Pragathi_Gopal_CV_eng.pdf")}>CV_Eng</button>
          </div>
        </div>
      </div>
    </div>
  );
}
