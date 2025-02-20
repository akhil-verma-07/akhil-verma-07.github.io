import Block from "../common/block/Block";
import './Experience.scss'

const Experience = () => {
    const exp = [{
        title:"Senior Software Developer",
        start: "2023",
        end: "2024",
        company: "Hughes Systique, Gurugram, Haryana",
        responsibilities:[
            "Developed and optimized enterprise-level applications for Yatra Online Limited, focusing on flights, hotels, cabs, and trip management systems within a corporate environment.",
            "Led the migration of legacy applications from AngularJS to React 18, enhancing performance, scalability, and maintainability while reducing technical debt.",
            "Designed and implemented reusable UI components, standardizing development practices and improving efficiency across multiple projects.",
            "Integrated Server-Side Rendering (SSR) in React applications, significantly improving SEO performance, page load speeds, and user experience.",
            "Redesigned and restructured project architecture, aligning with modern best practices to improve code organization, maintainability, and team collaboration.",
            "Developed dynamic, config-driven, and backend-driven user interfaces, enabling real-time content management and customization tailored to business requirements."
        ]
        },
        {
        title:"Software Developer",
        start: "2019",
        end: "2023",
        company: "Patch Infotech Pvt. Ltd., Gurugram, Haryana",
        responsibilities:[
            "Designed and implemented high-performance web applications, integrating third-party libraries and software solutions to enhance functionality and user experience.",
            "Led the development of a multi-license business administration web application using Angular 13, TypeScript, Material UI, Tailwind CSS, and NPM, ensuring scalable and maintainable code.",
            "Built and optimized reusable UI components, reducing maintenance efforts and accelerating development cycles.",
            "Conducted unit testing with Jasmine and Karma, ensuring robust and error-free application deployment.",
            "Collaborated in Agile/Scrum environments, actively participating in sprint planning, task estimation, and cross-functional discussions to enhance project efficiency.",
            "Mentored and led a team of five developers, fostering skill development and career growth in a competitive environment.",
            "Developed and maintained a business administrator tool leveraging C# (.NET) and KnockoutJS, improving operational workflows.",
            "Strong cross-functional collaboration, effectively communicating with stakeholders, UX/UI designers, and backend teams to align development goals and deliver high-quality products on time.",
            "Delivered responsive UI/UX designs that ensured seamless functionality across devices, enhancing user engagement and accessibility.",
            "Successfully gathered, analyzed, and implemented client requirements for NowFloats as a Senior Software Developer, ensuring timely and accurate project deliveries."
        ]
        }]
  return (
    <Block title="Professional Experience">
        <div className="py-16 px-48">
            {
                exp.map((item,i)=>(
                    <div className={`${i==exp.length-1 ? 'pb-2':'pb-10'}  px-10 exp-item `} key={item.start + item.end}>
                        <h4 className="uppercase m-0">{item.title}</h4>
                        <h5 className="my-4 ">{item.start} - {item.end}</h5>
                        <p className="italic">{item.company}</p>
                        <ul>
                            {
                                item.responsibilities.map((res)=>(
                                    <li className="my-4" key={res}>{res}</li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    </Block>
  )
}

export default Experience