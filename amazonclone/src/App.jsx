import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Subnav } from "./Components/Subnav";
import { Sliders } from "./Components/slider";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Footer } from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Subnav />
      <Sliders />

      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
