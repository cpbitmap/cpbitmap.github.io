/* eslint-disable @typescript-eslint/no-unused-vars */
import "../styles/global.css";

import { ThemeProvider } from "@primer/react";
import type { AppProps } from "next/app";
import React from "react";

import Layout from "../components/Layout";
import githubStyles from "../styles/github.module.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <div className={githubStyles["markdown-body"]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  </ThemeProvider>
);

export default MyApp;
