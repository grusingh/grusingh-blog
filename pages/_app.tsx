import '../styles/globals.css';
import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '../prismicio'
import {LinkResolverFunction} from "@prismicio/helpers";

function App({Component, pageProps}: any) {
    return (
        <PrismicProvider
            linkResolver={linkResolver as LinkResolverFunction<string>}
            internalLinkComponent={({href, children, ...props}) => (
                <Link href={href}>
                    <a {...props} />
                </Link>
            )}
        >
            <PrismicPreview repositoryName={repositoryName}>
                <Component {...pageProps} />
            </PrismicPreview>
        </PrismicProvider>
    )
}

export default App;
