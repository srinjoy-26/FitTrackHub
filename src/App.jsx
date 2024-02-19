import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Workout from "./components/Workout";
import { About, Contact, Exercisepage, Home, Login, Signup } from "./Pages";

function MainLayout() {
  return (
    <div className="MainLayout">
      <Navbar />
      <Outlet /> {/* Outlet component of react-router-dom is used to render nested routes */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/exercises" element={<Exercisepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/workout" element={<Workout />} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
