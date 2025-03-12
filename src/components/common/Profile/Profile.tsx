import { useEffect, useState } from 'react';
import './Profile.scss';
import { Container, IconButton } from '@mui/material';
import hero from '../../../assets/images/hero.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const words = ["Web Developer", "Full Stack Developer"];
const connectIcons =[
  {
    name: "LinkedIn",
    icon: <LinkedInIcon fontSize='medium'/>,
    url: "https://www.linkedin.com/in/akhil-verma-a935b4a0/"
  },
  {
    name:"Github",
    icon: <GitHubIcon fontSize='medium'/>,
    url: "https://github.com/akhil-verma-07"
  }
]

const TypingEffect = ({ words, typingSpeed = 150, deleteSpeed = 100, delay = 1000 }:any) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  
  useEffect(() => {
    const currentWord = words[wordIndex];
    let timer:any;

    if (!isDeleting) {
      if (text.length < currentWord.length) {
        timer = setTimeout(() => {
          setText((prev) => prev + currentWord.charAt(prev.length));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => setIsDeleting(true), delay);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deleteSpeed, delay]);

  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorBlink);
  }, []);

  return <span>{text}{showCursor ? "|" : ""}</span>;
};

const Profile = () => {
   
      
  return (
    <section className='hero'>
        <img src={hero}/>
        <Container className='name-container' sx={{position:'relative'}}>
          <div >
            <p className='fs-30'>Hello, I'm</p>
            <p className='fs-64 fw-6'>Akhil Verma</p>
            <p className='fs-40'>a <span className='fw-6'><TypingEffect words={words}/></span></p>
          </div>
          <div className='flex flex-row gap-2 mt-16'>
            {
              connectIcons.map((c)=>(
                <div key={c.name} className='connect'><IconButton color='inherit' href={c.url}>{c.icon}</IconButton></div>
              ))
            }
          </div>
        </Container>
        
    </section>
  )
}

export default Profile