import { saveAs } from "file-saver";
import Jimp from "jimp/es";
import type { NextPage } from "next";
import React, { useRef } from "react";

import { Article } from "../components/article";
import { Navbar } from "../components/Navbar/navbar";

const Home: NextPage = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Navbar />
      <Article title="Converter">
        <input type="file" multiple ref={inputFileRef} />
        <button
          onClick={async () => {
            const arrayBuffer =
              await inputFileRef?.current?.files?.[0]?.arrayBuffer();
            if (arrayBuffer) {
              const buffer = Buffer.from(arrayBuffer);
              const width = buffer.readInt32LE(buffer.length - 4 * 5);
              const height = buffer.readInt32LE(buffer.length - 4 * 4);
              console.log(`Image height: ${height}, width: ${width}`);
              const image = await new Jimp(width, height, 0x000000ff);
              const calcOffsetInCpbmp = (
                x: number,
                y: number,
                widthh: number
              ) => {
                const lineSize = Math.ceil(widthh / 16) * 16;
                return x * 4 + y * lineSize * 4;
              };

              const calcOffsetInImage = (
                x: number,
                y: number,
                widthh: number
              ) => {
                return x * 4 + y * widthh * 4;
              };

              const swapRBColors = (c: number) => {
                const r = c & 0xff;
                const b = (c & 0xff0000) >> 16;
                c &= 0xff00ff00;
                c |= r << 16;
                c |= b;
                return c;
              };

              for (let y = 0; y < height; y++) {
                for (let x = 0; x < width; x++) {
                  const color = buffer.readInt32LE(
                    calcOffsetInCpbmp(x, y, width)
                  );
                  image.bitmap.data.writeInt32LE(
                    swapRBColors(color),
                    calcOffsetInImage(x, y, width)
                  );
                }
              }
              const outputBuffer = await image.getBufferAsync(Jimp.MIME_PNG);

              const file = new File([outputBuffer], "out.png", {
                type: "image/png",
              });

              saveAs(file);
            }
          }}
        >
          Hello
        </button>
      </Article>
    </>
  );
};

export default Home;
