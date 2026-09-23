import Link from "next/link"

interface NavBarProps {
    links: {
        title: string,
        href: string
    }[]
}

export const NavBar = (
    {links}: NavBarProps
) => {
    return <div className="flex">
        <div className="w-full text-4xl font-bold justify-end pl-4 pt-2">Portfolio</div>
        <div className="w-full flex gap justify-between items-center p-4 text-2xl">
            {links.map((link) => {return <Link key={link.title} className="hover:font-bold" href={link.href}>{link.title}</Link>})}
        </div>
    </div>
}
