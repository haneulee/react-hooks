import React, { useState } from "react";
export const useInput = (initialVal, validator) => {
  const [value, setItem] = useState(initialVal);

  const onChange = event => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;

    if (typeof validator === "function") {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setItem(value);
    }
  };

  return { value, onChange };
};
