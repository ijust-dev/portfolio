import PageInfo from '../components/pageinfo'
import Header from '../components/header'
import Project from '../components/project'

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen md:items-center">
            <PageInfo
                pagetitle="Jacob"
                description="A personal portfolio page."
            />

            <Header
                title="Hello! I'm Jacob."
                description="I write apps for the people I play games with and to solve problems. I can be contacted at my email below."
                urlhref="mailto:jacob@ijust.dev"
                urldisplay="jacob@ijust.dev"
            />

            <main className="h-full flex flex-col text-white flex-1 py-10 text-left flex-wrap sm:justify-start sm:content-start">
                <h2 className="font-bold text-2xl md:text-3xl mb-5">
                    Projects
                </h2>

                <Project
                    name="Gokzstats"
                    url="https://gokzstats.com"
                    githuburl="https://github.com/ijust-dev/gokzstats"
                    tags="javascript, jquery, css, html"
                    image="/images/gokzstats/homepage.jpg"
                    alttext=""
                />

                <Project
                    name="WoW HC Creator"
                    url="https://hardcore-wow-character-creator.vercel.app/"
                    githuburl="https://github.com/ijust-dev/hardcore_wow_character_creator"
                    tags="Next.js, tailwindcss"
                    image="/images/hardcore-wow-creator.jpg"
                    alttext=""
                />

                <Project
                    name="Portfolio"
                    url="/na"
                    githuburl="https://github.com/ijust-dev/portfolio"
                    tags="next.js, tailwindcss"
                    image="/images/portfolio_homepage.jpg"
                    alttext=""
                />

                <Project
                    name="Personal store project"
                    url="/na"
                    githuburl="https://github.com/ijust-dev/FotoGallery"
                    tags="react"
                    image="/images/college_project/college_final_project_homepage.jpg"
                    alttext=""
                />

                <Project
                    name="Task list"
                    url="https://ijust-dev.github.io/task_list/"
                    githuburl="https://github.com/ijust-dev/task_list"
                    tags="javascript, css, html"
                    image="/images/tasklist_screenshot.jpg"
                    alttext=""
                />

                <Project
                    name="Teron Gorefiend simulator"
                    url="https://play.unity.com/mg/other/teron-gorefiend-sim"
                    githuburl="/na"
                    tags="unity"
                    image="/images/gorefiend_sim.jpg"
                    alttext=""
                />
            </main>
        </div>
    )
}
