/** @format */

import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LinkProps from "./components/LinkProps";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
