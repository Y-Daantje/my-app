import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Demo from "./page/demo";
import Mainpage from "./page/mainpage";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </Router>
  );
}
