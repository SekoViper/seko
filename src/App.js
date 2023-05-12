import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/header/Nav';
import Home from './components/home/Home';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Blog from './components/blogs/Blog';
import Project from './components/projects/Project';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
