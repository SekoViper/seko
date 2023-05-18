import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/header/Nav';
import Home from './components/home/Home';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Project from './components/projects/Project';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
