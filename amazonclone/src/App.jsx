import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Subnav } from "./Components/Subnav";
import { Sliders } from "./Components/slider";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Footer } from "./Components/Footer";
import { Login } from "./Components/Signin";
import { Register } from "./Components/Signup";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Subnav />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
