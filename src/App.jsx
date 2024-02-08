import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";

import Hero from "./components/Hero";

import CardDiv from "./components/Cards/CardDiv";

export default function App() {
  return (
    <>
      <div>
        <Navbar />

        <Hero />

        <CardDiv />
        <CardDiv />
        <Footer />
      </div>
    </>
  );
}
