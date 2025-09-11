import Bar from './components/bar/Navbar'
import Home from './components/home/Home';
import About from './components/about/About'
import Skills from './components/skill/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import ScrollToTop from './components/ScrollToTop';

export default function App() {

  return (
    <>
      <div className="all">
        <Bar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <ScrollToTop />
    </>
  )
}


