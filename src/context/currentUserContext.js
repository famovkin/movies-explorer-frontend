import { createContext } from "react";

const currentUserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

export default currentUserContext;
