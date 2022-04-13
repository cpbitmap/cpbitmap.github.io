import React, { InputHTMLAttributes } from "react";
import { useCallback } from "react";

type FileInputProps = InputHTMLAttributes<HTMLInputElement> & {
  onFilesChange: (files: File[]) => void;
  files: File[];
};

const FileInput = ({
  value,
  onFilesChange = ([]) => {},
  files = [],
  ...rest
}: FileInputProps) => {
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList) {
      onFilesChange([...Array(fileList.length)].map((_, i) => fileList[i]));
    }
  }, []);

  return (
    <>
      <label>
        Click to select some files...
        <input
          {...rest}
          style={{ display: "none" }}
          key={files.length}
          type="file"
          onChange={onChange}
        />
      </label>
      {files.length > 0 && (
        <div>
          <h3>Selected files:</h3>
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
                onClick={() => onFilesChange(files.filter((_, j) => i !== j))}
              >
                {file.name}
              </button>
            ))}
          </div>
          <br />
        </div>
      )}
    </>
  );
};

export default FileInput;
