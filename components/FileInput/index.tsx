import { Button } from "@primer/react";
import React, { InputHTMLAttributes, useRef } from "react";
import { useCallback } from "react";

type FileInputProps = InputHTMLAttributes<HTMLInputElement> & {
  onFilesChange: (files: File[]) => void;
  files: File[];
  style?: React.CSSProperties;
};

const FileInput = ({
  value,
  onFilesChange = ([]) => {},
  files = [],
  style,
  ...rest
}: FileInputProps) => {
  const labelRef = useRef<HTMLLabelElement>(null);
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList) {
      onFilesChange([...Array(fileList.length)].map((_, i) => fileList[i]));
    }
  }, []);

  return (
    <>
      <input
        {...rest}
        style={{ display: "none" }}
        key={files.length}
        id="file"
        type="file"
        onChange={onChange}
      />
      <label htmlFor="file" ref={labelRef} style={{ ...style, width: "100%" }}>
        <Button
          sx={{ width: "100%" }}
          onClick={() => labelRef.current?.click()}
        >
          Select cpbitmap file(s)
        </Button>
      </label>
    </>
  );
};

export default FileInput;
