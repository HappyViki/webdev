import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import { useRef } from "react";
import { AppProvider } from "../context/appContext";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ParallaxProvider } from "react-scroll-parallax";
import "normalize.css";
import "nprogress/nprogress.css";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/globals.scss";

NProgress.configure({ showSpinner: true });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const queryClientRef = useRef();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <AppProvider>
      <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1 maximum-scale=1"
          />
          <meta name="description" content="I have 6 years of experience in software development. My strengths are in JavaScript, CSS, React, Node, Mobile, and Web Development. Seeking to work with professionals that have a positive attitude and a good sense of humor." />
          <meta name="robots" content="noindex, nofollow" />
          <meta name="keywords" content="JavaScript, CSS, React, Node, Mobile, Web" />
          <meta name="author" content="Nuclear Themes" />
          <meta name="theme-color" content="#72E2AE" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
          <link rel="apple-touch-icon" href="/icon-192x192.png" />
          <title>Veronica Eulenberg | Senior Front End Web Developer</title>
        </Head>
        <ParallaxProvider>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
        </ParallaxProvider>
      </AppProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default MyApp;
