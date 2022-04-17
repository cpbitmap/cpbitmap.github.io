import { DownloadIcon } from "@primer/octicons-react";
import { Button, Spinner } from "@primer/react";
import { saveAs } from "file-saver";
import Jimp from "jimp/es";
import type { NextPage } from "next";
import React, { useState } from "react";

import FileInput from "../components/FileInput";
import Select from "../components/Select";
import SelectedFiles from "../components/SelectedFiles";
import WidthContainer from "../components/WidthContainer";

// from what I've seen online, I believe that:
// iOS ~9 is 4 bytes
// iOS 11 is 8 bytes
// iOS 12 is 16 bytes
const iosOffsets: Record<string, number> = {
  "iOS 9 or earlier": 4,
  "iOS 10 or 11": 8,
  "iOS 12 or later": 16,
};

const imageFormats = ["PNG", "JPEG", "TIFF"];

const splitExtension = (fileName: string) => {
  const periodIndex = fileName.lastIndexOf(".");
  return {
    name: fileName.substring(0, periodIndex),
    ext: fileName.substring(periodIndex + 1),
  };
};

const calcOffsetInCpbitmap = (
  x: number,
  y: number,
  width: number,
  iosVersion?: string
) => {
  // default to 16 bytes if somehow a bad iOS version is chosen
  const offset = iosVersion ? iosOffsets[iosVersion] : 16;
  const lineSize = Math.ceil(width / offset) * offset;
  return x * 4 + y * lineSize * 4;
};

const calcOffsetInImage = (x: number, y: number, width: number) =>
  x * 4 + y * width * 4;

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
  const [outputFormat, setOutputFormat] = useState(imageFormats[0]);
  const [iosVersion, setIosVersion] = useState(Object.keys(iosOffsets).pop());

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
            const color = buffer.readInt32LE(
              calcOffsetInCpbitmap(x, y, width, iosVersion)
            );
            image.bitmap.data.writeInt32LE(
              swapRBColors(color),
              calcOffsetInImage(x, y, width)
            );
          }
        }

        const mime = `image/${outputFormat.toLowerCase()}`;
        const outputBuffer = await image.getBufferAsync(mime);

        const outputFile = new File(
          [outputBuffer],
          `${splitExtension(file.name).name}.${outputFormat.toLowerCase()}`,
          { type: mime }
        );

        setLoading(false);
        saveAs(outputFile);
      }
    }
  };

  return (
    <WidthContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <FileInput
          multiple
          onFilesChange={(fs) => setFiles(fs)}
          files={files}
          style={{ marginBottom: 16 }}
        />
        <SelectedFiles
          files={files}
          setFiles={setFiles}
          style={{ marginBottom: 16 }}
        />
        <Select
          value={outputFormat}
          onChange={(e) => setOutputFormat(e.target.value)}
          label="Output file format"
          options={imageFormats}
          style={{ marginBottom: 16 }}
        />
        <Select
          value={iosVersion}
          onChange={(e) => setIosVersion(e.target.value)}
          label="iOS version"
          options={Object.keys(iosOffsets)}
          style={{ marginBottom: 16 }}
        />
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
            <>
              <DownloadIcon />
              &nbsp;Convert to {outputFormat}
            </>
          )}
        </Button>
      </div>
    </WidthContainer>
  );
};

export default Home;
