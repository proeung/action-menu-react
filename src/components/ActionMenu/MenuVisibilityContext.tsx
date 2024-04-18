import { createContext, useContext } from "react";

export const MenuVisibilityContext = createContext({
  isMenuVisible: false,
  setIsMenuVisible: () => {
    // do nothing.
  },
});

export const useMenuVisibility = () => useContext(MenuVisibilityContext);
