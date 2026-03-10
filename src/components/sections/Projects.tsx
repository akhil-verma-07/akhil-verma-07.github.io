import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Section from "../layout/Section";
import { projects } from "../../data/content";
import { fadeUpSmall as cardVariants } from "../../utils/animations";
import { handleCardPointerLeave, handleCardPointerMove } from "../../utils/pointerGlow";

const FolderIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
  </svg>
);

const Projects = () => (
  <Section
    id="projects"
    label="Projects"
    title="Featured Projects"
    subtitle="Things I've built to explore ideas and solve problems."
    alt
  >
    <div className="projects-grid">
      {projects.map((project) => (
        <motion.div
          className="project-card interactive-card"
          key={project.id}
          variants={cardVariants}
          onMouseMove={handleCardPointerMove}
          onMouseLeave={handleCardPointerLeave}
        >
          <div className="project-card-icon">
            <FolderIcon />
          </div>
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
              Live Demo <ArrowIcon />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div className="projects-cta" variants={cardVariants}>
      <Link to="/projects" className="btn btn-secondary">
        View All Projects
      </Link>
    </motion.div>
  </Section>
);

export default Projects;
