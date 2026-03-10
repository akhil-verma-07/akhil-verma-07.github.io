import { motion } from "framer-motion";
import { ReactNode } from "react";
import { sectionVariants, headerVariants } from "../../utils/animations";

interface SectionProps {
  id: string;
  label?: string;
  title: string;
  subtitle?: string;
  alt?: boolean;
  children: ReactNode;
}

const Section = ({ id, label: _label, title, subtitle, alt, children }: SectionProps) => (
  <motion.section
    id={id}
    className={`section ${alt ? "section-alt" : ""}`}
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
  >
    <div className="container">
      <motion.div className="section-header" variants={headerVariants}>
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </motion.div>
      {children}
    </div>
  </motion.section>
);

export default Section;
