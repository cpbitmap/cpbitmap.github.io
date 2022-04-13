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

const convertCpbitmap = async (files: File[]) => {
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

      saveAs(outputFile);
    }
  }
};

const Home: NextPage = () => {
  const [files, setFiles] = useState<File[]>([]);

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
        />
        <button onClick={() => convertCpbitmap(files)}>Convert</button>
      </div>
    </div>
  );
};

export default Home;
