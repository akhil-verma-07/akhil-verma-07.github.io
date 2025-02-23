import { useEffect } from "react";

const SEO = () => {
    const title="Home | Akhil Verma - Software Developer";
    const description="I'm Akhil Verma, a frontend developer specializing in React, Angular, and modern web technologies. Explore my projects and skills here!";
    const keywords="react developer,MEAN & MERN developer, frontend developer, portfolio, javascript, angular, typescript";
    useEffect(() => {
        document.title = title;
    
        const setMetaTag = (name: string, content: string) => {
          let element = document.querySelector(`meta[name="${name}"]`);
          if (!element) {
            element = document.createElement("meta");
            element.setAttribute("name", name);
            document.head.appendChild(element);
          }
          element.setAttribute("content", content);
        };
    
        setMetaTag("description", description);
        setMetaTag("keywords", keywords);
        setMetaTag("author", "Your Name");
    
        setMetaTag("og:title", title);
        setMetaTag("og:description", description);
        // setMetaTag("og:image", image);
        // setMetaTag("og:url", url);
    
        setMetaTag("twitter:card", "summary_large_image");
        setMetaTag("twitter:title", title);
        setMetaTag("twitter:description", description);
        // setMetaTag("twitter:image", image);
    
        return () => {
          document.title = "Your Name - Portfolio"; // Reset on unmount
        };
      }, []);
    
      return null;
}

export default SEO