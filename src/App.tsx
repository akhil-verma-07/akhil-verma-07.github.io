import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./index.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/Home/Home";
import { personalInfo } from "./data/content";

const ProjectsPage = lazy(() => import("./pages/Projects"));
const JsonDiff = lazy(() => import("./components/Projects/JsonDiff"));

const SEO = () => {
  useEffect(() => {
    document.title = personalInfo.seo.title;
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("description", personalInfo.seo.description);
    setMeta("keywords", personalInfo.seo.keywords);
    setMeta("author", personalInfo.name);
    setMeta("og:title", personalInfo.seo.title);
    setMeta("og:description", personalInfo.seo.description);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", personalInfo.seo.title);
    setMeta("twitter:description", personalInfo.seo.description);
  }, []);
  return null;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const LoadingFallback = () => (
  <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <div style={{ width: 32, height: 32, border: "3px solid var(--border)", borderTopColor: "var(--accent)", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

function App() {
  return (
    <>
      <SEO />
      <ScrollToTop />
      <div className="grain-overlay" />
      <Navbar />
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/json-diff" element={<JsonDiff />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
