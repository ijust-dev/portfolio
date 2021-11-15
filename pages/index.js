import Head from 'next/head'
import Header from '../components/header'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen sm:items-center">
      <Head>
        <title className="lowercase">Jacob Barrett</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="h-full flex flex-col text-white flex-1 py-10 text-left flex-wrap sm:justify-start sm:content-start sm:w-10/12 xl:flex-row">
        <div className="relative mb-5 max-w-xl sm:w-full xl:p-5 xl:max-w-2xl">
          <h2 className="absolute bottom-0 w-full pt-10 pl-3 lowercase z-10 bg-gradient-to-t from-gray-900 xl:bottom-5 p-3 xl:text-2xl">
            Gokzstats | Javascript, jQuery, CSS, HTML
          </h2>
          <Image
            src="/images/gokzstats/homepage.png"
            height={315}
            width={560}
            alt="Screenshot of the homepage for the website gokzstats.com"
          />
        </div>

        <div className="relative mb-5 max-w-xl sm:w-full xl:p-5 xl:max-w-2xl">
          <h2 className="absolute bottom-0 w-full pt-10 pl-3 lowercase z-10 bg-gradient-to-t from-gray-900 xl:bottom-5 p-3 xl:text-2xl">
            College react project | React, CSS
          </h2>
          <Image
            src="/images/college_project/college_final_project_homepage.png"
            height={315}
            width={560}
            alt="Screenshot of a blue and white website with large text displaying 'First Name'"
          />
        </div>

        <div className="relative mb-5 max-w-xl sm:w-full xl:p-5 xl:max-w-2xl">
          <h2 className="absolute bottom-0 w-full pt-10 pl-3 lowercase z-10 bg-gradient-to-t from-gray-900 xl:bottom-5 p-3 xl:text-2xl">
            Task list | Javascript, CSS, HTML 
          </h2>
          <Image
            src="/images/tasklist_screenshot.png"
            height={315}
            width={560}
            alt="Screenshot of a black and white website for creating task lists"
          />
        </div>

        <div className="relative mb-5 max-w-xl sm:w-full xl:p-5 xl:max-w-2xl">
          <h2 className="absolute bottom-0 w-full pt-10 pl-3 lowercase z-10 bg-gradient-to-t from-gray-900 xl:bottom-5 p-3 xl:text-2xl">
            Portfolio | next.js, tailwindcss
          </h2>
          <Image
            src="/images/portfolio_homepage.png"
            height={315}
            width={560}
            alt="Screenshot of the homepage for my personal portfolio (the page you're on now)"
          />
        </div>
      </main>
    </div>
  )
}
