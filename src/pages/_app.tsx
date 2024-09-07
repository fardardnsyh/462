import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import LayoutPage from './components/LayoutPage'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <LayoutPage>
            <Component {...pageProps} />
        </LayoutPage>
    )
}
