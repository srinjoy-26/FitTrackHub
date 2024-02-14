
 import "./App.css";
import Navbar from "./components/Navbar";
import { Routes , Route } from "react-router-dom";
import Footer from "./components/Footer"
import Workout from "./components/Workout";
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
      <Route path="/workout" element={<Workout />} ></Route>
    </Routes>
    <Footer/>
    </div>
  );
}
