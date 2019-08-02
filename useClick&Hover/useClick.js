import React, { useState, useEffect, useRef } from "react";
export const useClick = onClick => {
  if (typeof onClick !== "function") {
    return;
  }

  const element = useRef();
  useEffect(() => {
    const curEl = element.current;
    if (curEl) {
      curEl.addEventListener("click", onClick);
    }

    return () => {
      if (curEl) {
        curEl.removeEventListener("click", onClick);
      }
    };
  }, []);

  return element;
};
