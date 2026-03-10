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
  const location = useLocation();

  useEffect(() => {
    const isJsonDiffPage = location.pathname === "/projects/json-diff";
    const pageTitle = isJsonDiffPage
      ? `JSON Diff Tool | ${personalInfo.name}`
      : personalInfo.seo.title;
    const pageDescription = isJsonDiffPage
      ? "Compare two JSON objects instantly with Akhil Verma's JSON Diff Tool. Highlight key differences, validate API payload changes, and debug faster."
      : personalInfo.seo.description;
    const canonicalUrl = `${window.location.origin}${location.pathname}`;
    const ogImage = `${window.location.origin}/og-cover.jpg`;

    document.title = pageTitle;

    const setMeta = (selector: string, attr: "name" | "property", key: string, content: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    setMeta('meta[name="description"]', "name", "description", pageDescription);
    setMeta('meta[name="keywords"]', "name", "keywords", personalInfo.seo.keywords);
    setMeta('meta[name="author"]', "name", "author", personalInfo.name);
    setMeta('meta[name="robots"]', "name", "robots", "index, follow, max-image-preview:large");
    setMeta('meta[property="og:type"]', "property", "og:type", isJsonDiffPage ? "article" : "website");
    setMeta('meta[property="og:title"]', "property", "og:title", pageTitle);
    setMeta('meta[property="og:description"]', "property", "og:description", pageDescription);
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMeta('meta[property="og:image"]', "property", "og:image", ogImage);
    setMeta('meta[property="og:locale"]', "property", "og:locale", "en_IN");
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", pageTitle);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", pageDescription);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", ogImage);
    setLink("canonical", canonicalUrl);

    const schema = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: personalInfo.name,
      jobTitle: "Frontend and Full Stack Developer",
      url: window.location.origin,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gurugram",
        addressCountry: "India",
      },
      sameAs: [personalInfo.social.linkedin, personalInfo.social.github],
      knowsAbout: ["React", "Angular", "TypeScript", "JavaScript", "Web Performance", "SEO"],
    };

    const scriptId = "ld-json-profile";
    let schemaScript = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = scriptId;
      schemaScript.type = "application/ld+json";
      document.head.appendChild(schemaScript);
    }
    schemaScript.text = JSON.stringify(schema);
  }, [location.pathname]);
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
