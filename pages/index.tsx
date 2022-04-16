import { Box, Button, IconButton, Spinner, Text } from "@primer/react";
import { saveAs } from "file-saver";
import Jimp from "jimp/es";
import type { NextPage } from "next";
import React, { useState } from "react";

import { DarkmodeToggle } from "../components/DarkmodeToggle";
import FileInput from "../components/FileInput";
import githubStyles from "../styles/github.module.css";

const calcOffsetInCpbitmap = (x: number, y: number, width: number) => {
  const lineSize = Math.ceil(width / 16) * 16;
  return x * 4 + y * lineSize * 4;
};

const calcOffsetInImage = (x: number, y: number, width: number) => {
  return x * 4 + y * width * 4;
};

const swapRBColors = (c: number) => {
  const r = c & 0xff;
  const b = (c & 0xff0000) >> 16;
  c &= 0xff00ff00;
  c |= r << 16;
  c |= b;
  return c;
};

const Home: NextPage = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  const convertCpbitmap = async () => {
    for (const file of files) {
      const arrayBuffer = await file.arrayBuffer();
      if (arrayBuffer) {
        const buffer = Buffer.from(arrayBuffer);
        const width = buffer.readInt32LE(buffer.length - 4 * 5);
        const height = buffer.readInt32LE(buffer.length - 4 * 4);

        const image = await new Jimp(width, height, 0x000000ff);

        for (let y = 0; y < height; y++) {
          for (let x = 0; x < width; x++) {
            const color = buffer.readInt32LE(calcOffsetInCpbitmap(x, y, width));
            image.bitmap.data.writeInt32LE(
              swapRBColors(color),
              calcOffsetInImage(x, y, width)
            );
          }
        }
        const outputBuffer = await image.getBufferAsync(Jimp.MIME_PNG);

        const outputFile = new File([outputBuffer], `${file.name}.png`, {
          type: "image/png",
        });

        setLoading(false);
        saveAs(outputFile);
      }
    }
  };

  return (
    <div className={githubStyles["markdown-body"]}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <DarkmodeToggle />
        <FileInput
          multiple
          onFilesChange={(fs) => setFiles(fs)}
          files={files}
          style={{ marginBottom: 16 }}
        />
        <div style={{ width: "100%", marginBottom: 16 }}>
          <Box
            borderColor="border.default"
            borderWidth={1}
            borderStyle="solid"
            borderTopLeftRadius={6}
            borderTopRightRadius={6}
            p={2}
            bg="pageHeaderBg"
            sx={{ width: "100%", boxSizing: "border-box" }}
          >
            <Text fontWeight="bold" fontSize={1} pl={2}>
              {files.length === 0 ? "No files selected" : "Files selected"}
            </Text>
          </Box>
          <Box
            borderColor="border.default"
            borderWidth={1}
            borderStyle="solid"
            borderTopWidth={0}
            borderBottomLeftRadius={6}
            borderBottomRightRadius={6}
            sx={{ width: "100%", boxSizing: "border-box" }}
          >
            {files.map(({ name }, i) => (
              <Box
                borderTopColor="border.default"
                borderTopWidth={i === 0 ? 0 : 1}
                borderTopStyle="solid"
                p={1}
                pl={3}
                sx={{ width: "100%", boxSizing: "border-box" }}
                key={i}
              >
                <Text fontSize={1} sx={{ width: "100%" }}>
                  {name}
                </Text>
                {/* <IconButton
                  aria-label="Search"
                  icon={SearchIcon}
                  size="small"
                /> */}
              </Box>
            ))}
          </Box>
        </div>
        {files.length > 0 && (
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {files.map((file, i) => (
                <button
                  key={i}
                  onClick={() => setFiles(files.filter((_, j) => i !== j))}
                >
                  {file.name}
                </button>
              ))}
            </div>
            <br />
          </div>
        )}
        <Button
          disabled={files.length === 0}
          onClick={() => {
            setLoading(true);
            convertCpbitmap();
          }}
          sx={{ width: "100%" }}
        >
          {loading ? (
            <Spinner size="small" sx={{ margin: "2px 0 -2px 0" }} />
          ) : (
            "Convert"
          )}
        </Button>
      </div>
    </div>
  );
};

export default Home;
