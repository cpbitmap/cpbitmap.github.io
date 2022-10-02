import { Link, useTheme } from "@primer/react";
import React from "react";

type StyledLinkProps = {
  href?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export const StyledLink = ({ href, style, children }: StyledLinkProps) => {
  const { theme } = useTheme();

  return (
    <Link
      href={href}
      style={{
        color: theme?.colorSchemes.light.colors.btn.outline.text,
        ...style,
      }}
    >
      {children}
    </Link>
  );
};
