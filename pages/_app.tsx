import { ThemeProvider } from '@emotion/react';
import { LinkResolverFunction } from '@prismicio/helpers';
import { PrismicPreview } from '@prismicio/next';
import { PrismicProvider } from '@prismicio/react';
import mixpanel from 'mixpanel-browser';
import { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { linkResolver, repositoryName } from 'prismicio';
import React, { FC, useEffect } from 'react';
import theme from 'theme';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const mixPanelToken = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

  useEffect(() => {
    if (mixPanelToken) {
      mixpanel.init(mixPanelToken, { debug: true });
      mixpanel.track('Land');
    }
  }, [mixPanelToken]);

  useEffect(() => {
    const handleRouteChange = () => {
      if (mixPanelToken) {
        mixpanel.track('Open Page');
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events, mixPanelToken]);

  return (
    <PrismicProvider
      linkResolver={linkResolver as LinkResolverFunction}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props} />
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </PrismicPreview>
    </PrismicProvider>
  );
};

export default App;
