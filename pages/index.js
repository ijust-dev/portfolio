import PageInfo from '../components/pageinfo'
import Header from '../components/header'
import Project from '../components/project'

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen sm:items-center">
            <PageInfo
                pagetitle="Jacob Barrett"
                description="A personal portfolio page."
            />

            <Header
                title="Jacob Barrett"
                description="Hello! This is a visual display of some of the things I've worked on. Contact me at the email below."
                urlhref="mailto:jacob@ijust.dev"
                urldisplay="jacob@ijust.dev"
            />

            <main className="h-full flex flex-col text-white flex-1 py-10 text-left flex-wrap sm:justify-start sm:content-start sm:w-10/12 xl:flex-row">
                <Project
                    name="gokzstats"
                    url="https://gokzstats.com"
                    tags="javascript, jquery, css, html"
                    image="/images/gokzstats/homepage.jpg"
                    alttext="Screenshot of the homepage for the website gokzstats.com"
                />

                <Project
                    name="WoW HC Creator"
                    url="https://hardcore-wow-character-creator.vercel.app/"
                    tags="Next.js, tailwindcss"
                    image="/images/hardcore-wow-creator.jpg"
                    alttext="Screenshot of the hardcore wow creator tool"
                />

                <Project
                    name="college react project"
                    url="https://github.com/ijust-dev/FotoGallery"
                    tags="react, css"
                    image="/images/college_project/college_final_project_homepage.jpg"
                    alttext="Screenshot of a green and white website with large text displaying 'First Name'"
                />

                <Project
                    name="task list"
                    url="https://ijust-dev.github.io/task_list/"
                    tags="javascript, css, html"
                    image="/images/tasklist_screenshot.jpg"
                    alttext="Screenshot of a black and white website for creating task lists"
                />

                <Project
                    name="portfolio"
                    url="/"
                    tags="next.js, tailwindcss"
                    image="/images/portfolio_homepage.jpg"
                    alttext="Screenshot of the homepage for my personal portfolio"
                />

                <Project
                    name="teron gorefiend sim"
                    url="https://play.unity.com/mg/other/teron-gorefiend-sim"
                    tags="unity"
                    image="/images/gorefiend_sim.jpg"
                    alttext="Screenshot of the teron gorefiend sim/game being played."
                />
            </main>
        </div>
    )
}
