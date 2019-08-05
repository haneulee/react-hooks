import React, { useState, useEffect, useRef } from "react";
export const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.online);

  const handle = () => {
    if (typeof onChange !== "function") {
      onChange(navigator.online);
    }
    setStatus(navigator.online);
  };

  useEffect(() => {
    window.addEventListener("online", handle);
    window.addEventListener("offline", handle);
    return () => {
      window.removeEventListener("online", handle);
      window.removeEventListener("offline", handle);
    };
  }, []);
  return { status };
};
