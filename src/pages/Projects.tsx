import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/content";
import { fadeIn as containerVariants, fadeUpSmall as itemVariants } from "../utils/animations";

const Projects = () => (
  <motion.section
    className="section"
    style={{ paddingTop: "calc(var(--nav-height) + 48px)" }}
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <div className="container">
      <motion.div className="section-header" variants={itemVariants}>
        <span className="section-label">Projects</span>
        <h2 className="section-title">All Projects</h2>
        <p className="section-subtitle">Explore the tools and apps I've built.</p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div className="project-card" key={project.id} variants={itemVariants}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.tech && (
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            )}
            <div className="project-links">
              <Link to={`/projects${project.url}`} className="project-link">
                Live Demo
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                </svg>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div variants={itemVariants} style={{ marginTop: 40 }}>
        <Link to="/" className="btn btn-secondary">
          ← Back to Home
        </Link>
      </motion.div>
    </div>
  </motion.section>
);

export default Projects;
