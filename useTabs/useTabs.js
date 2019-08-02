import React, { useState } from "react";
export const useTabs = (initialVal, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialVal);

  return { currentItem: allTabs[currentIndex], changeItem: setCurrentIndex };
};
