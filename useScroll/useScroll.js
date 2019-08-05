import React, { useState, useEffect, useRef } from "react";
export const useScroll = () => {
  const [status, setStatus] = useState({ y: 0, x: 0 });

  const onScroll = () => {
    setStatus({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return status;
};
