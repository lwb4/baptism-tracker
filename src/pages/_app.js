import '@/styles/globals.css';
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Baptism Tracker</title>
        <meta name="description" content="Baptism Tracker" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="mask-icon" href="/logo.png" color="#FFFFFF" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Baptism Tracker" />
        <meta property="og:description" content="Baptism Tracker" />
        <meta property="og:site_name" content="Baptism Tracker" />
        <meta property="og:url" content="https://baptism-tracker.vercel.app" />
        <meta property="og:image" content="/logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
