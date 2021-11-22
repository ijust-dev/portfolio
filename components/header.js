import Link from "next/link";

export default function Header(props) {
    return (
        <header className="text-blue-50 flex flex-col pt-10 xl:pt-20 sm:text-left sm:w-10/12 xl:p-5">
            <div className="w-full flex flex-col sm:w-96 lowercase">
              <h1 className="text-4xl 2xl:text-6xl">
                {props.title}
              </h1>
              <p className="text-xl mt-5 sm:w-96 2xl:text-3xl"> 
                {props.description}
              </p>
              <address className=" text-xl 2xl:text-2xl mt-5 underline not-italic">
                <Link href={props.urlhref}>
                  {props.urldisplay}
                </Link>
              </address>
            </div>
        </header>
    )
}