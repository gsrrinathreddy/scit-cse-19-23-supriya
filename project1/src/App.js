
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Qualification from './pages/Qualification';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Qualification" element={<Qualification/>}/>
          <Route path="/Skills" element={<Skills/>}/>


        </Routes>
   
    </div>
  );
}

export default App;
