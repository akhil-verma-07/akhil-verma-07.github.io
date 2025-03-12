import { useEffect, useRef, useState } from "react";
import './TextAnimation.scss'
const TextAnimation = ({text,resetOnLeave = false }:{text:string,resetOnLeave:boolean}) => {
    // const [key, setKey] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    // const restartAnimation = () => {
    //   setKey((prevKey) => prevKey + 1);
    // };

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            } else if (resetOnLeave) {
              setIsVisible(false);
            }
          },
          { threshold: 0.3 }
        );
    
        if (sectionRef.current) {
          observer.observe(sectionRef.current);
        }
    
        return () => {
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        };
      }, [resetOnLeave]);
  
    return (
      <div className={`animate three ${isVisible ? "visible" : ""}`} ref={sectionRef}>
        {text.split(" ").map((word, index) => (
          <span key={index}>    
            {word.split("" ).map((letter, i) => (
              <span key={i} style={{ animationDelay: `${i * 0.05}s` }}>
                {letter}
              </span>
            ))}
            &nbsp;
          </span>
        ))}
        {/* <button className="repeat" onClick={restartAnimation}>Repeat Animation</button> */}
      </div>
    );
}

export default TextAnimation