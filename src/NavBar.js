import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./colors";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const NavBar = () => {
  const [padding] = useState(15);

  return (
    <header
      css={css`
        background-color: ${colors.secondary};
        padding: ${padding}px;
      `}
    >
      <Link to="/">Adopt me!</Link>
      <span
        css={css`
          font-size: 60px;
          display: inline-block;
          animation: 3s ${spin} linear infinite;

          &:hover {
            text-decoration: underline;
            animation: 3s ${spin} linear reverse;
          }
        `}
        role="img"
        aria-label="logo"
      >
        &#128054;
      </span>
    </header>
  );
};

export default NavBar;
