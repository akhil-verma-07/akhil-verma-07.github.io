import Block from '../common/block/Block';
import './About.scss';
import dp from '../../assets/images/dp.jpg'
import PlaceIcon from '@mui/icons-material/Place';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EmailIcon from '@mui/icons-material/Email';
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], observerInstance) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observerInstance.disconnect(); // Stop observing after animation
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
      <Block title="About me">
        <div ref={sectionRef} className='flex flex-wrap flex-row justify-center '>
          
            <div className={`profile-container ${hasAnimated ? "visible-left" : ""}`}>
              <img className="profile text-center" src={dp} alt="Akhil Verma" />
             
            </div>
            <div className={`profile-content ${hasAnimated ? "visible-right" : ""}`}>
              <h2>5+ Years Experience in Web Development</h2>
              <p className='py-8 text-justify'>Creative Frontend Developer with a passion for crafting interactive, 
                responsive, and user-friendly web experiences. Skilled in React, JavaScript, and modern UI/UX principles, 
                I transform ideas into seamless digital solutions. Constantly learning, improving, and building innovative web applications.
              </p>
              <div className='flex flex-row gap-1 align-center flex-wrap'>
                <div className='flex'>
                  <PlaceIcon fontSize="medium"/>
                  <span className='ml-4'>Gurugram, India</span>
                </div>
                <div className='flex'>
                  <ContactPhoneIcon fontSize="medium"/>
                  <span className='ml-4'>+91 - 9997714831</span>
                </div>
                <div className='flex'>
                  <EmailIcon fontSize="medium"/>
                  <span className='ml-4'>v.akhil.m@gmail.com</span>
                </div>
              </div>
            </div>
        </div>
      </Block>
    
    
  )
}

export default About