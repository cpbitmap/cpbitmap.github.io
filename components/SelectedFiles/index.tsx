import { XIcon } from "@primer/octicons-react";
import { Box, IconButton, Text } from "@primer/react";
import React from "react";

type SelectedFilesProps = {
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
  style?: React.CSSProperties;
};

const SelectedFiles = ({ files, setFiles, style }: SelectedFilesProps) => {
  return (
    <div style={{ ...style, width: "100%" }}>
      <Box
        borderColor="border.default"
        borderWidth={1}
        borderStyle="solid"
        borderTopLeftRadius={6}
        borderTopRightRadius={6}
        borderBottomLeftRadius={files.length > 0 ? 0 : 6}
        borderBottomRightRadius={files.length > 0 ? 0 : 6}
        p={2}
        bg="pageHeaderBg"
        sx={{ width: "100%", boxSizing: "border-box" }}
      >
        <Text fontWeight="bold" fontSize={1} pl={2}>
          {files.length === 0 ? "No files selected" : "Files selected"}
        </Text>
      </Box>
      {files.length > 0 && (
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
              pr={2}
              pl={3}
              sx={{ width: "100%", boxSizing: "border-box" }}
              key={i}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text fontSize={1}>{name}</Text>
                <IconButton
                  aria-label={`Remove ${name}`}
                  icon={XIcon}
                  size="small"
                  variant="invisible"
                  onClick={() => setFiles(files.filter((_, j) => i !== j))}
                />
              </div>
            </Box>
          ))}
        </Box>
      )}
    </div>
  );
};

export default SelectedFiles;
