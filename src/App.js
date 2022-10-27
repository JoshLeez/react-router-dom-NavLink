import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Component/Home'
import About from './Component/About'
import Status from './Component/Status'
import Navbar from './Component/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
           <Route path="/about" element={<About />}/>
           <Route path="/status" element={<Status />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
