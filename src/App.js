import React, {useState, useEffect}from 'react'
import Header from './components/header/Header';
import "./App.css"
import Home from './components/home/Home';
import About from './components/about/About';
import Skill from "./components/skill/Skill";
import Education from './components/education/Education';
import Experience from './components/education/Experience';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Preloader from './components/preloader/Preloader';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(()=> {
    setTimeout(()=> {
      setIsLoading(false)
    },4000)

  },[])

  return (
    <>
      {
        isLoading ? 
          <Preloader /> : 
          <div className='App'>
            <Header />
            <Home />
            <About />
            <Skill />
            <Experience />
            <Education />
            <Work />
            <Contact />
            <Footer />
          </div>
      }
    </>
  )
}

export default App
