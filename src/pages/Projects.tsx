import { Link } from "react-router-dom"

const Projects = () => {

  const projects = [{
    title:"Json Diff",
    description:"Show the different with two JSON objects",
    url: "/json-diff"
  }]
  return (
    <div>
      <h4>Projects</h4>
      <div>
        
        {
          projects.map((project:any)=>{
            return <div key={project.url}>
                <h5>{project.title}</h5>
                <Link to={"/projects"+project.url}> Demo</Link>
              </div>
          })
        }
      </div>
    </div>
  )
}

export default Projects