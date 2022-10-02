import { Heading, Text } from "@primer/react";
import type { NextPage } from "next";
import React from "react";

import { StyledLink } from "../components/StyledLink";
import WidthContainer from "../components/WidthContainer";

const About: NextPage = () => {
  return (
    <WidthContainer
      style={{
        paddingBottom: "64px !important",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Heading
        as="h1"
        sx={{
          pb: 1,
          borderBottomWidth: 1,
          borderBottomColor: "border.default",
          borderBottomStyle: "solid",
        }}
      >
        <StyledLink href="/">cpbitmap.github.io</StyledLink>
      </Heading>
      <Text as="p">
        <StyledLink href="/">cpbitmap.github.io</StyledLink> is a free browser
        based tool that can convert cpbitmap files to multiple image formats.
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
        store iOS background images. The most common examples are the{" "}
        <code>LockBackground.cpbitmap</code> and{" "}
        <code>HomeBackground.cpbitmap</code> files found in iPhone or iPad
        backups.
      </Text>
      <Heading
        as="h2"
        sx={{
          fontSize: 3,
        }}
      >
        My image isn&apos;t being converted properly
      </Heading>
      <Text as="p">
        If the output image is corrupt or looks like it has been stretched and
        distorted, try selecting another iOS version and exporting again. The
        cpbitmap format has changed slightly over the years and may change again
        at some point in the future. This tool has been tested for iOS versions
        up to iOS 15. If this tool is no longer working with a new version of
        iOS, consider opening an issue on{" "}
        <StyledLink href="https://github.com/cpbitmap/cpbitmap.github.io">
          GitHub
        </StyledLink>
        .
      </Text>
      <Text as="p" mt={0}>
        If you encounter an error along the lines of{" "}
        <code>
          RangeError: The value &quot;...&quot; is invalid for option
          &quot;size&quot;
        </code>
        , the cpbitmap file may be from an encrypted backup. Consider using{" "}
        <StyledLink href="https://www.iphonebackupextractor.com/">
          this free tool
        </StyledLink>{" "}
        to extract the cpbitmap files from the encrypted backup. The cpbitmap
        files are stored in the <code>Home/Library/SpringBoard</code> path of
        your device (accessible under &quot;expert mode&quot; in the free tool
        linked above).
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
        Apple have never released any documentation about the layout of cpbitmap
        files. We only know how to convert cpbitmap images due to some clever
        guessing and trial and error by{" "}
        <StyledLink href="https://web.archive.org/web/20130917034207/http://www.codeproject.com/Articles/265333/Reading-Apple-iDevice-CPBitmap-files">
          Simon Whitehead in 2011
        </StyledLink>
        .
      </Text>
      <Text as="p" mt={0}>
        There are a few scripts that use his description to convert cpbitmap
        images to other formats, but there doesn&apos;t seem to be a working
        browser based solution. The code used in this tool was originally
        written by{" "}
        <StyledLink href="https://stackoverflow.com/a/48158807">
          dr15 in this Stack Overflow answer
        </StyledLink>{" "}
        to run in Node.js, so it has been slightly edited to run in the browser.
      </Text>
    </WidthContainer>
  );
};

export default About;
