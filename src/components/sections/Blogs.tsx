import { motion } from "framer-motion";
import Section from "../layout/Section";
import { blogs } from "../../data/content";
import { fadeUpSmall as cardVariants } from "../../utils/animations";
import { handleCardPointerLeave, handleCardPointerMove } from "../../utils/pointerGlow";

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

const Blogs = () => (
  <Section
    id="blogs"
    label="Blogs"
    title="Latest Articles"
    subtitle="Sharing knowledge and insights about web development."
  >
    <div className="blogs-grid">
      {blogs.map((blog) => (
        <motion.a
          key={blog.id}
          href={blog.redirection}
          target="_blank"
          rel="noopener noreferrer"
          className="blog-card interactive-card"
          variants={cardVariants}
          onMouseMove={handleCardPointerMove}
          onMouseLeave={handleCardPointerLeave}
        >
          <div className="blog-card-image">
            <img src={blog.image} alt={blog.title} loading="lazy" />
          </div>
          <div className="blog-card-body">
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <span className="blog-card-link">
              Read Article <ArrowRightIcon />
            </span>
          </div>
        </motion.a>
      ))}
    </div>
  </Section>
);

export default Blogs;
