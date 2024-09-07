import styles from '@/styles/NotFound.module.scss';

import Head from 'next/head';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000);
    }, []);

    return (
        <>
            <Head>
                <meta content="Cris-aian Vergara Portfolio Website" name="description"></meta>
                <meta content="Cris-aian Vergara" name="author"></meta>
                <meta content="portfolio website" name="keywords"></meta>
                <title>Cris-aian Vergara | 404 Not Found</title>
            </Head>
            <div className={styles.notfound}>
                <h1>404</h1>
                <h2>Ooops, page not found.</h2>
            </div>
        </>
    )
}

export default NotFound
