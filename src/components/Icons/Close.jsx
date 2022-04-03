import React from "react";

const Close = ({ className, handler }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    onClick={handler}
  >
    <path fill="#fff" d="M7.16 9.282 9.28 7.161l15.556 15.556-2.121 2.122z" />
    <path
      fill="#fff"
      d="m22.717 7.161 2.121 2.122L9.282 24.839l-2.121-2.121z"
    />
  </svg>
);

export default Close;
