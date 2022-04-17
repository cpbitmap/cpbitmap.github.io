import { Heading, Link, Text, useTheme } from "@primer/react";
import type { NextPage } from "next";
import React from "react";

import WidthContainer from "../components/WidthContainer";

const About: NextPage = () => {
  const { theme } = useTheme();
  return (
    <WidthContainer style={{ paddingBottom: 64 }}>
      <Heading
        as="h1"
        style={{ textAlign: "center" }}
        sx={{
          pb: 1,
        }}
      >
        <Link
          href="/"
          style={{ color: theme?.colorSchemes.light.colors.btn.outline.text }}
        >
          cpbitmap.github.io
        </Link>
      </Heading>
      <Text as="p">
        <Link
          href="/"
          style={{ color: theme?.colorSchemes.light.colors.btn.outline.text }}
        >
          cpbitmap.github.io
        </Link>{" "}
        is a free browser based tool that can convert cpbitmap files to multiple
        image formats.
      </Text>
      <Heading
        as="h2"
        sx={{
          fontSize: 3,
        }}
      >
        What is a cpbitmap file?
      </Heading>
      <Text as="p">
        The cpbitmap file format is a proprietary format created by Apple to
        store iOS background images.
      </Text>
      <Heading
        as="h2"
        sx={{
          pb: 1,
          fontSize: 4,
          borderBottomWidth: 1,
          borderBottomColor: "border.default",
          borderBottomStyle: "solid",
        }}
      >
        How do we know how to convert cpbitmap files?
      </Heading>
      <Text as="p">
        Apple has never released any documentation about the layout of cpbitmap
        files. We only know how to convert cpbitmap images due to some clever
        guessing and trial and error by{" "}
        <Link
          href="https://web.archive.org/web/20130917034207/http://www.codeproject.com/Articles/265333/Reading-Apple-iDevice-CPBitmap-files"
          style={{ color: theme?.colorSchemes.light.colors.btn.outline.text }}
        >
          Simon Whitehead in 2011
        </Link>
        .
      </Text>
      <Text as="p">
        There are a few scripts that use his description to convert cpbitmap
        images to other formats, but I couldn&apos;t find a working online
        version. The code used in this tool was originally written by{" "}
        <Link
          href="https://stackoverflow.com/a/48158807"
          style={{ color: theme?.colorSchemes.light.colors.btn.outline.text }}
        >
          dr15 in this Stack Overflow answer
        </Link>{" "}
        to work with Node.js, but has been slightly edited to run in the
        browser.
      </Text>
    </WidthContainer>
  );
};

export default About;
