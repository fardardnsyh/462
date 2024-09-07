import styles from '@/styles/Home.module.scss'

import Head from 'next/head';

import Typewriter from 'typewriter-effect';

export default function Home() {
    return (
        <>
            <Head>
                <meta content="Cris-aian Vergara Portfolio Website" name="description"></meta>
                <meta content="Cris-aian Vergara" name="author"></meta>
                <meta content="portfolio website" name="keywords"></meta>
                <title>Cris-aian Vergara | Home</title>
            </Head>
            <div className={styles.home}>
                <h1>Hello, I am Cris-aian.</h1>
                <h3>
                    <Typewriter
                        options={{
                            strings: ['Software Engineer!', 'Farmer!', 'Day Trader!'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h3>
            </div>
        </>
    )
}
