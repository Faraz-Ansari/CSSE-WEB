import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./Css/locomotive-scroll.css";
import Hero from "./Hero/Hero";
import CssePage from "./Pages/Societypages/CssePage";
import SocietyShowCard from "./Society/SocietyShow";
import InfoForm from "./InfoForm/InfoForm";

import Event from "./Pages/AllSociety/Event";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/event" element={<Event />} />

                <Route path="/csse" element={<CssePage />} />
                <Route path="/showSo" element={<SocietyShowCard />} />
                <Route path="/infoform" element={<InfoForm />} />
            </Routes>
        </Router>
    );
}

export default App;
