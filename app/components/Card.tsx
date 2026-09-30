"use client"
import Link from "next/link"
import Image from "next/image";

interface CardProps {
    link: string, 
    title: string,
    description: string,
    imagePath: string,
}

export const Card = (
    { title, description, link, imagePath }: CardProps
) => {
    return (
        <div 
            className="border border-amber-50 w-220 h-130 rounded-4xl bg-amber-50 flex flex-col shadow-lg shadow-amber-300 hover:scale-105"
            onClick={() => {window.location.href = link; }}>
            <h1 className="text-4xl text-center p-4 font-bold text-[#352208]">{title}</h1>
            <p className="p-4 text-center text-[#352208]">{description}</p>
            <Image className="opacity-100 w-auto max-w-full max-h-80 mx-auto"
                src={imagePath}
                width={500}
                height={500}
                alt={""}      
            />
            {/* <Link className="p-4 text-1.5xl mt-auto mx-auto underline underline-offset-1 text-[#352208] hover:font-bold" href={link}>{title}</Link> */}
        </div>
    );
}