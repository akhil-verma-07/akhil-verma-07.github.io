import Block from '../common/block/Block';
import './About.scss';
import dp from '../../assets/images/dp.jpg'
import PlaceIcon from '@mui/icons-material/Place';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EmailIcon from '@mui/icons-material/Email';

const About = () => {
  return (
      <Block title="About me">
        <div className='flex flex-wrap flex-row justify-center '>
          
            <div className='profile-container'>
              <img className="profile text-center" src={dp} alt="Akhil Verma" />
             
            </div>
            <div className='profile-content'>
              <h2>5+ Year's Experience in Web Development</h2>
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