import { motion } from "framer-motion";
import Section from "../layout/Section";
import { skills, type Skill } from "../../data/content";
import { fadeUpScale as badgeVariants, staggerContainer as groupVariants } from "../../utils/animations";

const categories: { key: Skill["category"]; label: string }[] = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "tools", label: "Tools & DevOps" },
];

const Skills = () => (
  <Section
    id="skills"
    label="Skills"
    title="Tech Stack"
    subtitle="Demonstrating my expertise in web development, emphasizing continuous learning and improvement in each technology."
    alt
  >
    <div className="skills-categories">
      {categories.map(({ key, label }) => {
        const categorySkills = skills.filter((s) => s.category === key);
        if (categorySkills.length === 0) return null;

        return (
          <motion.div key={key} variants={groupVariants}>
            <h3 className="skills-category-label">{label}</h3>
            <motion.div className="skills-grid" variants={groupVariants}>
              {categorySkills.map((skill) => (
                <motion.div key={skill.name} className="skill-badge" variants={badgeVariants}>
                  <img src={skill.icon} alt={skill.name} width="22" height="22" loading="lazy" />
                  <span>{skill.name}</span>
                  <div className="skill-score">
                    <motion.div
                      className="skill-score-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.score * 10}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  </Section>
);

export default Skills;
