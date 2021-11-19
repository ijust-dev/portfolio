import Head from 'next/head'

export default function PageInfo(props) {
    return (
        <Head>
            <title className="lowercase">{props.pagetitle}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta charset="UTF-8" />
            <meta description={props.description} />
        </Head>
    )
}