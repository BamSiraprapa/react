import "./App.css";
import "./input.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DetailsPage from "./pages/DetailsPage";
import Navbar from "./componants/Navbar";

function App() {

return (
<div className="bg-gradient-to-b from-[#cffafe] to-[#fecaca] h-screen">
  <Navbar/>
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/details" element={<DetailsPage />} />
</Routes>
</div>
);
}


export default App;
