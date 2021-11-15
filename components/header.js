import Link from "next/link";

export default function Header() {
    return (
        <header className="text-blue-50 flex flex-col pt-10 sm:text-left sm:w-10/12 xl:p-5">
            <div className="w-full flex flex-col sm:w-96 lowercase">
              <h1 className="text-4xl 2xl:text-5xl">Jacob Barrett</h1>
              <p className="text-xl mt-5 sm:w-96 2xl:text-3xl"> 
                Hello! I'm a web developer currently learning next.js and Tailwind CSS. You can contact me at my email below.
              </p>
              <p className="text-xl mt-5 underline">
                <Link href="mailto:jacob@ijust.dev">
                  jacob@ijust.dev
                </Link>
              </p>
            </div>
        </header>
    )
}