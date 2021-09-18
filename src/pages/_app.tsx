import { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <title>Twoblocks</title>
        <meta
          name="description"
          content="Free and open source 2fa manager built with Stacks. Protect yourself online!"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
