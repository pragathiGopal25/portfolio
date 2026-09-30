import Image from "next/dist/api/image";
import { Card } from "../../components/Card";

  
export default function Projects() {
    return (
      <div className="flex flex-col gap-10">
        <div className="flex w-full h-full justify-between items-center pt-20 pl-20 pr-20 gap-20">
          <Card
            title="Birthday Card"
            description="A website to send a birthday card."
            link="https://github.com/pragathiGopal25/birthdayCard"
            imagePath={`${process.env.NEXT_PUBLIC_BASE_PATH}/bday.png`}
          />

          <Card
            title="Portfolio"
            description="A portfolio showcasing my work and experiences."
            link="https://github.com/pragathiGopal25/portfolio"
            imagePath={`${process.env.NEXT_PUBLIC_BASE_PATH}/portfolio.png`}
          />

          <Card
            title="SunSaver"
            description="An app that helps users plan the intallation of solar panels on their rooftops."
            link="https://github.com/pragathiGopal25/SunSaver"
            imagePath={`${process.env.NEXT_PUBLIC_BASE_PATH}/SunSaver.png`}
          />
        </div>
        <div>
          <Image className="opacity-100 w-auto max-w-full"
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/bearIcon.png`}
                width={400}
                height={400}
                alt={""}      
            />
        </div>
      </div>
    );
  }