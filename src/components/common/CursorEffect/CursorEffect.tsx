import { useEffect } from "react";
import "./CursorEffect.scss"; // Create this file for styles

const CursorEffect = () => {
  useEffect(() => {
    const gradientOverlay :any= document.querySelector(".gradient-overlay");
    document.addEventListener("mousemove", (e) => {
      gradientOverlay.style.transform = `translate(${e.clientX - window.innerWidth / 2}px, ${e.clientY - window.innerHeight / 2}px)`;
    });
  }, []);

  return <div className="gradient-overlay"></div>;
};

export default CursorEffect;
