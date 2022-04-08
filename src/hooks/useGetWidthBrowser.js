import { useLayoutEffect, useState } from "react";

import { LAPTOP_WIDTH } from "../utils/constants";

export const useGetWidthBrowser = () => {
  const [width, setWidth] = useState(LAPTOP_WIDTH);
  useLayoutEffect(() => {
    const getWidth = () => {
      setWidth(window.innerWidth);
    };

    function debounce(func, ms) {
      let timer;
      return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          timer = null;
          func.apply(this, arguments);
        }, ms);
      };
    }

    const debouncedGetWidth = debounce(getWidth, 1000);

    window.addEventListener("resize", debouncedGetWidth);
    getWidth();
    return () => window.removeEventListener("resize", debouncedGetWidth);
  }, []);
  return width;
};
