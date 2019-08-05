import React, { useState, useEffect, useRef } from "react";
export const useNotification = (title, option) => {
  if (!("Notification" in window)) {
    return;
  }

  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(result => {
        if (result === "granted") {
          new Notification(title, option);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, option);
    }
  };

  return fireNotif;
};
