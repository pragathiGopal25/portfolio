import Timeline from "../../components/Timeline";


const timelineItems = [
  {
    date: "08.2026 – Present",
    title: "Software Developer",
    location: "Dotkom – Online, NTNU",
    responsibility:
    "Member of the development committee in Online, the informatics student association at NTNU. Contributing to the development and maintenance of the student association's website.",
    stack: ["React", "TypeScript"]
  },
  {
    date: "08.2026 – Present",
    title: "AI Engineer",
    location: "Cogito – NTNU",
    responsibility:
    "Working on real-world AI projects as part of the Copperhead project. Currently developing a neural network in NumPy for handwritten digit classification using the MNIST dataset, with plans to work on a DQN implementation for Snake.",
    stack: ["Python", "NumPy", "WandB"]
  },
  {
    date: "06.2026 – 08.2026",
    title: "Software Intern",
    location: "Kongsberg Maritime – Project Revolution Green",
    responsibility:
      "Worked in the data analysis and visualization team as part of Project Revolution Green. Developed four of eight pages of a website meant to visualise data from a ferry, established the project structure, and created reusable UI components including filters and sidebars.",
    stack: ["React", "Next.js","TypeScript", "Python", "Figma", "Azure"]
    },
  {
    date: "03.2025 – 05.2025",
    title: "Software Developer – SunSaver",
    location: "University of Oslo – IN2000",
    responsibility:
      "Developed SunSaver, a solar planning application, as part of a six-person team in collaboration with the Norwegian Meteorological Institute. Contributed to both frontend and backend development, API integration, application architecture, design and testing. The project placed 3rd out of 60 teams.",
    stack: ["Kotlin", "AndroidStudio", "Figma", "Ktor"]
  },
  {
    date: "12.2024 – 09.2025",
    title: "Software Intern",
    location: "Optime Subsea – Halliburton",
    responsibility:
      "Worked as a Software Intern supporting User Interfaces for the Remote Operated Control System (ROCS). I was responsible for UI Design, backend data processing, software testing and creating the user manual for ControlWare.",
    stack: ["C", "ControlWare", "ModbusSlave"]
  },
];
let icons = [

]

export default function Experience() {
    return (
      <div className="">
        <div className="justify-items-center place-content-center">
          <Timeline
            experiences={timelineItems}
          />
        </div>
      </div>
    );
  }