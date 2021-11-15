import Link from 'next/Link'

export default function Navigation() {
    return (
        <header className="text-blue-50 flex flex-row items-center w-full h-16 justify-end">
          <ul className="mr-20 flex flex-row gap-5">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/pages/projects">Projects</Link></li>
            <li><Link href="/pages/contact">Contact</Link></li>
          </ul>
        </header>
    )
}

