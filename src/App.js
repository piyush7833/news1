import logo from './logo.svg';
import './App.css';
import News from './components/News';
import Navbar from './components/Navbar'
// import { BrowserRouter } from 'react-router-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Navbar/>}/>
      </Routes>
      </BrowserRouter>
      <News/>
    </div>
  );
}

export default App;
