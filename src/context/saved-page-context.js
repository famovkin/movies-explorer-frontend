import { createContext } from "react";

const savedPageContext = createContext({
  onSavedPage: false,
  setOnSavedPage: () => {},
});

export default savedPageContext;
