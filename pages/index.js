import Head from 'next/head'
import Header from '../components/header'
import Project from '../components/project'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen sm:items-center">
      <Head>
        <title className="lowercase">Jacob Barrett</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="h-full flex flex-col text-white flex-1 py-10 text-left flex-wrap sm:justify-start sm:content-start sm:w-10/12 xl:flex-row">
        <Project
          name="gokzstats"
          url="https://gokzstats.com"
          tags="javascript, jquery, css, html"
          image="/images/gokzstats/homepage.png"
          alttext="Screenshot of the homepage for the website gokzstats.com"
        />

        <Project
          name="college react project"
          url="https://github.com/ijust-dev/FotoGallery"
          tags="react, css"
          image="/images/college_project/college_final_project_homepage.png"
          alttext="Screenshot of a green and white website with large text displaying 'First Name'"
        />

        <Project
          name="task list"
          url="https://ijust-dev.github.io/task_list/"
          tags="javascript, css, html"
          image="/images/tasklist_screenshot.png"
          alttext="Screenshot of a black and white website for creating task lists"
        />

        <Project
          name="portfolio"
          url="/"
          tags="next.js, tailwindcss"
          image="/images/portfolio_homepage.png"
          alttext="Screenshot of the homepage for my personal portfolio"
        />
      </main>
    </div>
  )
}
