import { PROJECTS } from "../../pages/Projects"
import Block from "../common/block/Block"
import "./../Blogs/Blogs.scss"
import { Link } from "react-router-dom"

const PList = () => {
    const projectPage = "/projects"

  return (
    <div>
         <Block title="Projects">
        <div className="flex flex-row flex-wrap gap-2 justify-center">
            {
                PROJECTS.map((project)=>(
                    <div className="blog shadow" key={project.id}>
                        <div className="flex flex-col justify-between gap-1 mt-4">
                            <div>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                            <div>
                                <Link to={projectPage + project.url}  className="explore px-8 py-4 br-8" style={{color:"white"}} >Explore</Link>
                            </div>
                        </div>
                        
                    </div>
                ))
                    
                
            }
                    <div key="all">
                        <div className="flex flex-col justify-between gap-1 mt-4">
                            <div>
                                <h3>All Projects</h3>
                                <p>All the projects listed here</p>
                            </div>
                            <div>
                            <Link to={projectPage}> Explore All</Link>
                            </div>
                        </div>
                        
            </div>
        </div>
    </Block>
    </div>
  )
}

export default PList