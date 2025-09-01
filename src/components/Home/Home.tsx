import About from "../About/About"
import Blogs from "../Blogs/Blogs"
import Profile from "../common/Profile/Profile"
import Experience from "../Experience/Experience"
import PList from "../PList/PList"
import Skills from "../Skills/Skills"

const Home = () => {
  return (
    <div>
      <Profile/>
        <About/>
        <Skills/>
        <Experience/>
        <PList/>
        <Blogs/>
    </div>
  )
}

export default Home