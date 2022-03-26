import React from "react";

const Burger = ({ className, handler }) => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    onClick={handler}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M36 14H8v-3h28v3ZM36 24H8v-3h28v3ZM36 34H8v-3h28v3Z"
      fill="#fff"
    />
  </svg>
);

export default Burger;
