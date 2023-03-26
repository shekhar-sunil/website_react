import './App.css';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Services from './Services';
import Home from './Home';

import Navbar from './Navbar';
const App=()=>

{
  return (
    <HashRouter>
    <Navbar/>
    <Routes>
      
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Services" element={<Services />} />
        <Route path="Contact" element={<Contact/>}/>
        
  
    </Routes>
  </HashRouter>
  );
};

export default App;
