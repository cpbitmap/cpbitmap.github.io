import React from "react";

type WidthContainerProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const WidthContainer = ({ children, style }: WidthContainerProps) => (
  <div
    style={{
      ...style,
      maxWidth: 700,
      margin: "0 auto 0 auto",
      padding: "0px 16px 0 16px",
    }}
  >
    {children}
  </div>
);

export default WidthContainer;
