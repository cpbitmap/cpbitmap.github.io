import { Button, UnderlineNav } from "@primer/react";
import { useRouter } from "next/router";
import React from "react";

import WidthContainer from "../WidthContainer";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  return (
    <>
      <UnderlineNav aria-label="Main" full style={{ marginBottom: 48 }}>
        <WidthContainer
          style={{ display: "flex", width: 700, alignItems: "center" }}
        >
          <UnderlineNav.Link href="/" selected={router.pathname === "/"}>
            Convert
          </UnderlineNav.Link>
          <UnderlineNav.Link
            href="about"
            selected={router.pathname === "/about"}
          >
            About
          </UnderlineNav.Link>
          <a
            href="https://github.com/cpbitmap/cpbitmap.github.io"
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: "auto", textDecoration: "none" }}
          >
            <Button variant="invisible">Source on GitHub</Button>
          </a>
        </WidthContainer>
      </UnderlineNav>
      {children}
    </>
  );
};

export default Layout;
