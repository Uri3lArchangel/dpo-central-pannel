import "../styles/globals.css";
import type { AppProps } from "next/app";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "../source/front-end/layouts/loading";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const startLoad = () => {
    setLoading(true);
    console.log('start')
  };
  const endLoad = () => {
    setLoading(false);
    console.log('end')
  };

  useEffect(() => {
    router.events.on("routeChangeStart", startLoad);
    router.events.on("routeChangeComplete", endLoad);
    router.events.on("routeChangeError", endLoad);
    return () => {
      router.events.off("routeChangeStart", startLoad);
      router.events.off("routeChangeComplete", endLoad);
      router.events.off("routeChangeError", endLoad);
    };
  }, [router.events]);
  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <Head>
          <title>Direct Private Offers Dashboard Panel</title>
          <link rel="icon" href="/assets/handshake.png" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
