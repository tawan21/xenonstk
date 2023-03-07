import logo from './logo.svg';
import '@picocss/pico'
import './App.css';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Profile from './components/Profile';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Choices from './components/Choices';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/choices" element={<Choices />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
