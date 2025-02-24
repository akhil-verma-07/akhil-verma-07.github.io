import { Skill } from "../../interfaces/interfaces"
import Block from "../common/block/Block"
import './Skills.scss';
import ssr from "../../assets/images/ssr.png";


const mySkills:Skill[] = [
    { name: "React", icon: "https://svgl.app/library/react_light.svg", score: 9 },
    { name: "Redux ToolKit", icon: "https://svgl.app/library/redux.svg", score: 8 },
    { name: "Angular", icon: "https://svgl.app/library/angular.svg", score: 8 },
    { name: "AngularJS", icon: "https://angularjs.org/img/AngularJS-large.png", score: 7 },
    { name: "KnockoutJS", icon: "https://www.cdnlogo.com/logos/k/50/knockout.svg", score: 6 },
    { name: "JavaScript", icon: "https://svgl.app/library/javascript.svg", score: 9 },
    { name: "HTML", icon: "https://svgl.app/library/html5.svg", score: 10 },
    { name: "CSS", icon: "https://svgl.app/library/css_old.svg", score: 6 },
    { name: "Node", icon: "https://svgl.app/library/nodejs.svg", score: 8 },
    { name: "Express", icon: "https://svgl.app/library/expressjs.svg", score: 7 },
    { name: "Material UI", icon: "https://svgl.app/library/materialui.svg", score: 8 },
    { name: "Bootstrap", icon: "https://svgl.app/library/bootstrap.svg", score: 7 },
    { name: "Tailwind CSS", icon: "https://svgl.app/library/tailwindcss.svg", score: 8 },
    { name: "Webpack", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIaTUqHahhh_W6J2EmzhFtof3trONNwTkDBg&s", score: 7 },
    { name: "SSR", icon: ssr, score: 7 },
    
    { name: "MongoDB", icon: "https://svgl.app/library/mongodb.svg", score: 7 },
    { name: "TypeScript", icon: "https://svgl.app/library/typescript.svg", score: 9 },
    { name: "Git", icon: "https://svgl.app/library/git.svg", score: 8 },
    { name: "Git", icon: "https://svgl.app/library/strapi.svg", score: 4 }
  ]

const Skills = () => {
  return (
    <div className="bg-light">
        <Block title="Skills">
        <div className="mb-16 flex justify-center text-center">
            <p>Demonstrating my expertise in web development through dynamic visual metrics, emphasizing continuous learning and improvement in each technology.</p>
        </div>
       
        <div className=" mt-8 flex flex-row flex-wrap gap-x-3 gap-y-2 justify-center">
            {
                mySkills.map((skill)=>(<div key={skill.name} className="skill-card shadow">
                    <div className="card-inner">
                      
                      <div className="card-front">
                        <img width={100} src={skill.icon} alt={skill.name} />
                      </div>
                  
                      <div className="card-back">
                        <span>{skill.name}</span>
                      </div>
                    </div>
                  </div>))
            }
        </div>
        </Block>
    </div>
  )
}

export default Skills