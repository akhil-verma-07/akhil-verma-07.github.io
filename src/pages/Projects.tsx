import { Link } from "react-router-dom"
import Block from "../components/common/block/Block"
import {  Card, Grid2 } from "@mui/material"

const Projects = () => {

  const projects = [{
    title:"Json Diff",
    description:"Show the different with two JSON objects",
    url: "/json-diff"
  }]
  return (
    <Block title="Projects">
      <Grid2 container >
        {
          projects.map((project:any)=>{
            return <Grid2 size={{sm:12,md:6,lg:4}} key={project.url}>
                <Card className="p-8 shadow"><h2>{project.title}</h2>
                <Link to={"/projects"+project.url}> Demo</Link></Card>
              </Grid2>
          })
        }
      </Grid2>
    </Block>
  )
}

export default Projects