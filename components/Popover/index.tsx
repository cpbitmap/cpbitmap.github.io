import { XIcon } from "@primer/octicons-react";
import { Heading, IconButton, PointerBox } from "@primer/react";
import React from "react";

type PopoverProps = {
  success: boolean;
  onClose?: () => void;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export const Popover = ({
  success,
  onClose,
  style,
  children,
}: PopoverProps) => (
  <PointerBox
    minHeight={100}
    caret="top"
    sx={{
      mt: 3,
      p: 3,
      maxWidth: 400,
      width: "100%",
      boxSizing: "border-box",
      marginLeft: "auto",
      marginRight: "auto",
    }}
    style={style}
  >
    <div style={{ display: "flex", alignItems: "center", marginBottom: 6 }}>
      <Heading
        sx={{ fontSize: 2, color: success ? "success.fg" : "danger.fg" }}
      >
        {success
          ? " Successfully converted cpbitmap"
          : "Could not convert cpbitmap"}
      </Heading>
      <IconButton
        aria-label={"Close error window"}
        icon={XIcon}
        size="small"
        variant="invisible"
        onClick={onClose}
        style={{
          marginLeft: "auto",
          marginRight: -10,
          marginTop: -14,
        }}
        sx={{ color: "fg.subtle" }}
      />
    </div>
    {children}
  </PointerBox>
);
