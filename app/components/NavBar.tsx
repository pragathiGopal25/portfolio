"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";


interface NavBarProps {
    links: {
        title: string,
        href: string
    }[]
}

export const NavBar = (
    {links}: NavBarProps
) => {
    const pathName = usePathname()

    return <div className="flex bg-[#352208]  h-25.5 ">
        <div className="w-full text-4xl font-bold justify-end items-center pl-4 pt-8 text-[#e1bb80]">Pragathi Gopalakrishnan</div>
        <div className="w-full flex gap justify-between items-center p-4 text-2xl text-[#e1bb80]">
            {links.map((link) => {
                const isActive = pathName === link.href;
                return (
                    <Link 
                        key={link.title} 
                        className={`hover:font-bold ${isActive ? "font-bold" : ""}`}
                        href={link.href}>
                    {link.title}
                    </Link>);
                })}
        </div>
    </div>
}
