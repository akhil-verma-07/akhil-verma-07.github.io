import { motion } from "framer-motion";
import Section from "../layout/Section";
import { experiences } from "../../data/content";
import { slideInLeft as itemVariants } from "../../utils/animations";
import { handleCardPointerLeave, handleCardPointerMove } from "../../utils/pointerGlow";

const Experience = () => (
  <Section
    id="experience"
    label="Experience"
    title="Work Experience"
    subtitle="My professional journey building scalable web applications."
  >
    <div className="experience-grid">
      {experiences.map((exp, i) => (
        <motion.div
          className="experience-card interactive-card"
          key={`${exp.start}-${exp.end}`}
          variants={itemVariants}
          custom={i}
          onMouseMove={handleCardPointerMove}
          onMouseLeave={handleCardPointerLeave}
        >
          <div className="experience-card-header">
            <span className="experience-index">{String(i + 1).padStart(2, "0")}</span>
            <span className="experience-date">
              {exp.start} — {exp.end}
            </span>
          </div>
          <h3 className="experience-title">{exp.title}</h3>
          <p className="experience-company">{exp.company}</p>
          <ul className="experience-list">
            {exp.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="experience-card-accent" aria-hidden="true" />
        </motion.div>
      ))}
    </div>
  </Section>
);

export default Experience;
