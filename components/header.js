import Link from "next/link";

export default function Header(props) {
    return (
        <header className="pt-10 xl:pt-20 lg:pr-24 xl:pr-24">
            <div className="w-full flex flex-col">
              <h1 className="text-4xl xl:text-5xl text-header font-bold">
                {props.title}
              </h1>
              <p className="text-xl mt-5 xl:text-xl text-font font-medium tracking-wide lg:tracking-normal lg:w-6/12"> 
                {props.description}
              </p>
              <address className="text-xl xl:text-xl mt-5 underline not-italic text-email font-medium">
                <Link href={props.urlhref}>
                  {props.urldisplay}
                </Link>
              </address>
            </div>
        </header>
    )
}