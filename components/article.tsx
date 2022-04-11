import Head from "next/head";
import React from "react";

import githubStyles from "../styles/github.module.css";

interface Props {
  title: string;
  children?: React.ReactNode;
}

export const Article = ({ title, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div
        // Set article style
        className={githubStyles["markdown-body"]}
      >
        {children}
      </div>
    </>
  );
};
