import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Main from "./components/Main";
import Contact from "./components/Contact";
import Writing from "./components/Writing";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
