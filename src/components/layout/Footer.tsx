const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-text">© 2025 Akhil Verma. All rights reserved.</p>
        <button className="footer-back-top" onClick={scrollToTop} aria-label="Back to top">
          Back to top ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
