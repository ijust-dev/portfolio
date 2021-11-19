import Link from "next/link";
import Image from "next/image";

export default function Project(props) {
    return (
        <Link passhref href={props.url}>
            <a className="relative mb-5 max-w-xl sm:w-full xl:p-5 xl:max-w-2xl cursor-pointer">
                <h2 className="absolute bottom-0 w-full pt-10 pl-3 lowercase z-10 bg-gradient-to-t from-gray-900 xl:bottom-5 p-3 xl:text-2xl">
                    {props.name} | {props.tags}
                </h2>
                <Image
                    src={props.image}
                    height={315}
                    width={560}
                    alt={props.alttext}
                />
            </a>
        </Link>
    )
}