import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar/>

        <Routes>
         <Route path="" element={<Home/>} /> 
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
