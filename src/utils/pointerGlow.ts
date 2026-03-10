import type { MouseEvent } from "react";

export const handleCardPointerMove = (event: MouseEvent<HTMLElement>) => {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  event.currentTarget.style.setProperty("--mx", `${x}px`);
  event.currentTarget.style.setProperty("--my", `${y}px`);
};

export const handleCardPointerLeave = (event: MouseEvent<HTMLElement>) => {
  event.currentTarget.style.setProperty("--mx", "50%");
  event.currentTarget.style.setProperty("--my", "50%");
};
