import './App.css';
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects/Projects'
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
