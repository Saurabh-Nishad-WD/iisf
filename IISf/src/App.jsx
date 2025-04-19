// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About'; // Add other pages as necessary

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         {/* Add more routes here */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Team from './pages/Team';
import Event from './pages/Event';
import Contact from './pages/Contact';
import Resoarce from './pages/Resoarce';

function App() {
  return (
    
    <div>
    <Navbar /> {/* Add Navbar here */}
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<Team />} />
      <Route path="/event" element={<Event />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resoarce" element={<Resoarce />} />
      {/* More routes can go here */}
    </Routes>
  </div>
  );
}

export default App;
