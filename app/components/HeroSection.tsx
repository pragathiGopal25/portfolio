import Image from "next/image";

export const HeroSection = () => {
    return <div className="h-full">
        <Image className="opacity-80 pl-4"
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/profile.png`}
            width={500}
            height={500}
            alt={""}      
        />
    </div>
}