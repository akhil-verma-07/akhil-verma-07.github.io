
// import { Container, Tab, Tabs } from '@mui/material'
import './App.scss'
// import { useState } from 'react'
// import Router from './components/Router/Router'
// import Profile from './components/common/Profile/Profile'
// import About from './components/About/About'
// import Skills from './components/Skills/Skills'
// import Experience from './components/Experience/Experience'
import SEO from './components/SEO'
// import Blogs from './components/Blogs/Blogs'
import Footer from './components/Footer/Footer'
import CustomRouter from './components/CustomRouter/CustomRouter'

function App() {
  // const [tab,setTab] = useState()
  return (
    <>
    <SEO/>
      {/* <header id="header" className='header'>
        <Container className='flex flex-row j-between align-center'>
          <h2>Akhil Verma</h2>
          <div>
            <Tabs  value={tab} onChange={(_e,value)=>setTab(value)} textColor='inherit'  sx={{
                "& .MuiTab-root": { color: "white",fontWeight:'600',fontSize:'16px',outline:'none' }, // Default tab color
                "& .Mui-selected": { color: "white" }, // Selected tab color
                "& .MuiTabs-indicator": { backgroundColor: "white" }, // Indicator color
              }}>
              <Tab disableFocusRipple value={'home'} label="Home"/>
              <Tab disableFocusRipple value={'about'} label="About"/>
              <Tab disableFocusRipple value={'contact'} label="Contact"/>
            </Tabs>
          </div>
        </Container>

      </header> */}
      <main>
        <CustomRouter/>
      </main>
      <Footer/>
      {/* <Router/> */}
    </>
  )
}

export default App
