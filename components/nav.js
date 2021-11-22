import Link from 'next/link'

export default function Nav(props) {
    return (
        <div className="justify-left align-middle w-full flex flex-row fixed text-left bottom-0 text-white sm:bottom-5 sm:w-10/12 sm:px-5">
            <Link href={props.url} passhref>
                <button className="text-5xl 2xl:text-6xl pb-2 bg-gray-900">
                    &larr;
                </button>
            </Link>
            <p className="w-auto 2xl:text-3xl pb-0 pl-2 self-center">{props.buttontext}</p>
        </div>
    )
}