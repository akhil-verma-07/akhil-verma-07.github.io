import Block from "../common/block/Block";
import './Experience.scss'

const Experience = () => {
    const exp = [
        {
            title:"Senior Software Developer",
            start: "2024",
            end: "Current",
            company: "Yatra Online Limited, Gurugram, Haryana",
            responsibilities:[
                "Built and optimized user-friendly interfaces for Yatra’s online booking platform, enhancing UX and boosting conversion.",
                "Improved application performance by 70% through code refactoring, efficient API integration, and optimized frontend architecture.",
                "Modernized legacy systems by migrating to React + Redux Toolkit and Angular, reducing technical debt and improving scalability.",
                "Partnered with backend and design teams to ensure smooth API integration and streamlined data flow.",
                "Mentored junior team members, fostering skill development and promoting collaborative problem-solving.",
                "Implemented SEO and accessibility best practices, improving search rankings and page performance."
            ]
        },
        {
            title:"Senior Software Developer",
            start: "2023",
            end: "2024",
            company: "Hughes Systique, Gurugram, Haryana",
            responsibilities:[
                "Migrated and modernized legacy applications to Angular 17 and contemporary frameworks, improving maintainability, scalability, and long-term system reliability.",
                "Designed and implemented a dynamic API-driven form generation system using Angular + Formly, enabling flexible configurations and reducing development effort",
                "Delivered multi-language (i18n) support, ensuring seamless localization and accessibility for global user bases.",
                "Optimized frontend performance and state management with React, Redux, and Angular, achieving faster load times and smoother user interactions.",
                "Partnered with client stakeholders and cross-functional teams to troubleshoot critical production issues, delivering stable, high-quality solutions under tight deadlines.",
            ]
        },
        {
        title:"Software Developer",
        start: "2019",
        end: "2023",
        company: "Patch Infotech Pvt. Ltd., Gurugram, Haryana",
        responsibilities:[
            "Led the development of a multi-license business administration web application using Angular 13, TypeScript, Material UI, Tailwind CSS, and NPM, ensuring scalable and maintainable code.",
            "Built and optimized reusable UI components, reducing maintenance efforts and accelerating development cycles.",
            "Conducted unit testing with Jasmine and Karma, ensuring robust and error-free application deployment.",
            "Mentored and led a team of five developers, fostering skill development and career growth in a competitive environment.",
            "Developed and maintained a business administrator tool leveraging C# (.NET) and KnockoutJS, improving operational workflows.",
            "Strong cross-functional collaboration, effectively communicating with stakeholders, UX/UI designers, and backend teams to align development goals and deliver high-quality products on time.",
            "Delivered responsive UI/UX designs that ensured seamless functionality across devices, enhancing user engagement and accessibility.",
            "Successfully gathered, analyzed, and implemented client requirements for NowFloats as a Senior Software Developer, ensuring timely and accurate project deliveries."
        ]
        }]
  return (
    <Block title="Experience">
        <div className="py-16  px-sm-8 px-xs-8 px-md-48 px-lg-48">
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