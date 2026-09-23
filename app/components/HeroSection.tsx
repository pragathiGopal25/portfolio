import Image from "next/image";

export const HeroSection = () => {
    return <div className="w-full h-full">
        <Image className="opacity-80 w-full"
            src={"/birthdayCake.png"}
            width={1000}
            height={1000}
            alt={""}      
        />
    </div>
}