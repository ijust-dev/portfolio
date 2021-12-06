import Head from 'next/head'
import { useEffect } from 'react';

export default function PageInfo(props) {

    

    useEffect(() => {
        let lang = 'en';
        document.documentElement.lang = lang;
    });

    return (
        <Head>
            <title className="lowercase">{props.pagetitle}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta charset="UTF-8" />
            <meta name="description" content={props.description} />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;700&display=swap" rel="stylesheet" />
        </Head>
    )
}