import React, { useState, useEffect, useRef } from "react";
export const useBeforeLeave = onBefore => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = event => {
    const { clientY } = event;
    console.log(clientY);
    if (clientY <= 20) {
      onBefore();
    }
  };
  useEffect(() => {
    document.body.addEventListener("mouseleave", handle);
    return () => document.body.removeEventListener("mouseleave", handle);
  }, []);
};
