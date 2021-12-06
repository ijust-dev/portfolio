import Link from "next/link";
import Image from "next/image";

export default function Project(props) {

    function description() {
        switch (props.name) {
            case "Gokzstats":
                return (
                    <div>
                        <p className="mb-5">A leaderboard website for the Counter-Strike: Global Offensive Kreedz community, built from scratch using <span className="text-javascript">javascript</span>, <span className="text-html">html</span>, and <span className="text-css">css</span>.</p>
                        <p>This site was built as a display of their new API system, storing information such as level completion, fastest times, world records, and more. Since it’s existence, it’s been visited by over 20,000 players.</p>
                    </div>
                );
            case "WoW HC Creator":
                return (
                    <div>
                        <p className="mb-5">A World of Warcraft hardcore character creator built using <span className="text-javascript">next.js</span> and <span className="text-css">tailwindcss</span>.</p>
                        <p>A weekend project made for the purposes of generating a set of random restrictions for a player wanting to experience a “hardcore” version of the game.</p>
                    </div>
                );
            case "Personal store project":
                return (
                    <div>
                        <p>A 3-person college project to design and create a portfolio and store front using <span className="text-javascript">React</span>.</p>
                    </div>
                );
            case "Task list":
                return (
                    <div>
                        <p className="mb-5">A simple task list app built from scratch using <span className="text-javascript">javascript</span>, <span className="text-html">html</span>, and <span className="text-css">css</span>.</p>
                        <p>This was created to replicate a friend's task list app so we could compare each other's code.</p>
                    </div>
                );
            case "Portfolio":
                return (
                    <div>
                        <p>My personal website built with <span className="text-javascript">next.js</span> and <span className="text-css">tailwindcss</span>. Designed with Figma using references.</p>
                    </div>
                );
            case "Teron Gorefiend simulator":
                return (
                    <div>
                        <p className="mb-5">A non-web development project. This was a Unity project made to replicate an old flash game.</p>
                        <p>The goal of the game is to teach the user how to handle the Teron Gorefiend encounter in World of Warcraft's raid "Black Temple". Built with Unity and C#.</p>
                    </div>
                );
        }
    }

    return (
        <div className="flex flex-row rounded-lg mb-5 max-w-5xl bg-objectbackground">

            {/* Tablet+Desktop */}

            <div className="flex bg-highlight rounded-l-lg md:flex"> </div>
            <div className="pt-3 pl-3 flex flex-col w-11/12 md:flex md:m-10">
                <h1 className="font-medium text-2xl mb-3.5">
                    {props.name}
                </h1>
                <div className="font-normal text-md max-w-lg">
                    {description()}
                </div>

                <div className="mt-5 mb-5 md:mb-0">
                    <Link passhref href={props.githuburl}>
                        <a className={props.githuburl == "/na" ? "hidden" : "font-normal border-2 text-center rounded-lg px-5 mr-2.5 py-1 border-border border-opacity-40"}>
                            Github
                        </a>
                    </Link>
                    <Link passhref href={props.url}>
                        <a className={props.url == "/na" ? "hidden" : "font-normal border-2 text-center rounded-lg px-5 mr-2.5 py-1 border-border border-opacity-40"}>
                            Visit
                        </a>
                    </Link>
                </div>
                
            </div>
            <div className="hidden self-start h-full m-10 ml-0 md:flex lg:self-center xl:h-auto">
                <Image
                    priority
                    className="rounded-lg"
                    src={props.image}
                    height={315}
                    width={560}
                    alt={props.alttext}
                />
            </div>
        </div>
    )
}