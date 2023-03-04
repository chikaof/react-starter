import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import NextNProgress from "nextjs-progressbar";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";
import nextSeoConfig from "next-seo.config";

import "@/styles/globals.css";
import Layout from "@/components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        color="#979797"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        showOnShallow={true}
      />
      <DefaultSeo {...nextSeoConfig} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Analytics />
    </>
  );
}

export default MyApp;
