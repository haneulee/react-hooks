import React, { useState, useEffect, useRef } from "react";
const useConfirm = (msg = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }

  if (!onCancel || typeof onCancel !== "function") {
    return;
  }

  const confirmAction = () => {
    if (window.confirm(msg)) {
      onConfirm();
    } else {
      onCancel();
    }
  };

  return confirmAction;
};

const usePreventLeave = () => {
  const listener = event => {
    event.preventDefault();
    event.returnValue = "";
  };

  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return {
    enablePrevent,
    disablePrevent
  };
};

export { useConfirm, usePreventLeave };
