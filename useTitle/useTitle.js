import React, { useState, useEffect } from "react";
export const useTitle = initialVal => {
  const [title, setTitle] = useState(initialVal);
  const updateTitle = () => {
    const titleEl = document.querySelector("title");
    titleEl.innerText = title;
  };
  /**
   * useEffect내 함수 는 dependency 가 없으면 매번 호출, 있으면 componentDidMount에서만 호출
   * useEffect내 return 함수는 componentWillUnMount에서 호출됨
   */
  useEffect(updateTitle, [title]);
  return setTitle;
};
