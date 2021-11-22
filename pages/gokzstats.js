import PageInfo from '../components/pageinfo'
import Header from '../components/header'
import Nav from '../components/nav'

export default function Gokzstats() {
    return (
        <div className="flex flex-col min-h-screen sm:items-center">

            <PageInfo
                pagetitle="Jacob Barrett - gokzstats"
                description="An overview of the project gokzstats.com."
            />

            <Header
                title="gokzstats"
                description="A leaderboard website for the CS:GO Kreedz Community"
                urlhref="https://gokzstats.com"
                urldisplay="gokzstats.com"
            />

            <main className="h-full flex flex-col text-white flex-1 py-10 text-left flex-wrap sm:justify-start sm:content-start sm:w-10/12 xl:flex-row">
                Lorem Ipsum

            </main>
            <Nav
                url="/"
                buttontext="home"
            />
        </div>
    )
}
