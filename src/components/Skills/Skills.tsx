import Block from "../common/block/Block"

const Skills = () => {
    const skills = [
        "React", "Redux ToolKit", "Angular","AngularJS",  "KnockoutJS", "Javascript", "html", "css","material UI", "bootstrap", "tailwind css", "webpack",
        "SSR", "Node", "Express", "MongoDB", "Typescript","Git"
    ]
  return (
    <div className="bg-light">
        <Block title="Skills">
        <div className="my-8">
            <p>Demonstrating my expertise in web development through dynamic visual metrics, emphasizing continuous learning and improvement in each technology.</p>
        </div>
        <div className="flex flex-row gap-x-1 gap-y-2 mb-4 flex-wrap">
            {
                skills.map((skill)=>(
                    <div key={skill} className="skill">{skill}</div>
                ))
            }
        </div>
        </Block>
    </div>
    // <section className="section-container py-16 px-32 bg-light">
    //     <p className='fs-32 fw-5 head'>Skills</p>
        
    // </section>
  )
}

export default Skills