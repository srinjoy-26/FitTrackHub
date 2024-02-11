
 import "./App.css";
import Navbar from "./components/Navbar";
import { Routes , Route } from "react-router-dom";
import Footer from "./components/Footer"
import {About,Contact,Exercisepage,Home} from "./Pages";


export default function App() {
  return (
    <div className="App">
    
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/exercises" element={<Exercisepage/>} ></Route>
      <Route path="/contact" element={<Contact/>} ></Route>
      <Route path="/about" element={<About/>} ></Route>
    </Routes>
    <Footer/>
      
    </div>
  );
}
