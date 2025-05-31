import Block from "../common/block/Block"
import ssrimg  from "../../assets/images/ssr_blog.jpg";
import "./Blogs.scss"
import { Button } from "@mui/material";

import closureimg from "../../assets/images/closure.jpeg"
import r19 from '../../assets/images/react-19.jpeg';
const blogs = [{
    id:1,
    title:"The Power of Server-Side Rendering (SSR) in React Projects",
    description: "In the ever-evolving world of web development, performance and user experience are paramount. One powerful technique to...",
    image:ssrimg,
    redirection:"https://www.linkedin.com/posts/akhil-verma-a935b4a0_the-power-of-server-side-rendering-ssr-activity-7200156074291703809-beZ_?utm_source=share&utm_medium=member_desktop&rcm=ACoAABVyGA8BhkNcVWIap4JSRi-Exx2ruPFjzM4"
},{
    id:2,
    title:"Exploring Closures in JavaScript: A Fundamental Concept for Every Developer",
    description:"In the vast landscape of JavaScript, there lies a fundamental concept that often perplexes developers, yet holds immense power in shaping the way we...",
    image:closureimg,
    redirection:"https://www.linkedin.com/pulse/exploring-closures-javascript-fundamental-concept-every-akhil-verma-95w8c/?trackingId=z5Cuchh9StG51J7aNlTF0w%3D%3D"
},{
    id:3,
    title:"React 19: Exciting New Features You Need to Know",
    description:"React 19 is a game-changer with : Auto optimizing compiler, Stable server components, Action API, Smarter assets loading, useOptimistice hook and ...",
    image:r19,
    redirection: "https://www.linkedin.com/posts/akhil-verma-a935b4a0_summary-react-19-key-highlights-activity-7312749068235993089-k0S1?utm_source=share&utm_medium=member_android&rcm=ACoAABVyGA8BhkNcVWIap4JSRi-Exx2ruPFjzM4"
}]

const Blogs = () => {
  return (
   <div className="bg-light">
     <Block title="Blogs">
        <div className="flex flex-row flex-wrap gap-2 justify-center">
            {
                blogs.map((blog)=>(
                    <div className="blog shadow" key={blog.id}>
                        <div className="blog-img"><img width="inherit" src={blog.image}/></div>
                        <div className="flex flex-col justify-between gap-1 mt-4">
                            <div>
                                <h3>{blog.title}</h3>
                                <p>{blog.description}</p>
                            </div>
                            <div>
                                <Button href={blog.redirection} target="_blank" className="explore" variant="contained" >Explore</Button>
                            </div>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    </Block>
   </div>
  )
}

export default Blogs