import { motion } from "framer-motion";
import Section from "../layout/Section";
import { personalInfo } from "../../data/content";
import dp from "../../assets/images/Akhil.webp";
import { fadeUp as cardVariants, scaleIn as imageVariants } from "../../utils/animations";

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
  </svg>
);

const About = () => (
  <Section
    id="about"
    label="About"
    title="About Me"
    subtitle={personalInfo.about.headline}
  >
    <div className="about-grid">
      <motion.div className="about-image-wrapper" variants={imageVariants}>
        <div className="about-image-ring">
          <img className="about-image" src={dp} alt="Akhil Verma" loading="lazy" />
        </div>
      </motion.div>

      <motion.div className="about-text" variants={cardVariants}>
        <h3>{personalInfo.about.headline}</h3>
        <p>{personalInfo.about.description}</p>

        <div className="about-info">
          <div className="about-info-item">
            <MapPinIcon />
            <span>{personalInfo.location}</span>
          </div>
          <div className="about-info-item">
            <PhoneIcon />
            <span>{personalInfo.phone}</span>
          </div>
          <a href={`mailto:${personalInfo.email}`} className="about-info-item">
            <MailIcon />
            <span>{personalInfo.email}</span>
          </a>
        </div>
      </motion.div>
    </div>
  </Section>
);

export default About;
