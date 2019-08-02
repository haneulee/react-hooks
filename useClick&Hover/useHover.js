import React, { useState, useEffect, useRef } from "react";
export const useHover = onHover => {
  if (typeof onHover !== "function") {
    return;
  }

  const element = useRef();
  useEffect(() => {
    const curEl = element.current;
    if (curEl) {
      curEl.addEventListener("mouseenter", onHover);
    }

    return () => {
      if (curEl) {
        curEl.removeEventListener("mouseenter", onHover);
      }
    };
  }, []);

  return element;
};
