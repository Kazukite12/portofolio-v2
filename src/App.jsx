import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./layout/sidebar";
import Drop from "./component/drop";
import Gallery from "./component/gallery";
import RoadMap from "./component/roadmap";

import "./App.css";
import Particles from "./component/Particles";
import { useState } from "react";


function App() {

  const [activeSection, setActiveSection] = useState("")

  return (
    <Router>
    <main id='main'>
      <div className="dot"></div>
  
      <Sidebar setActiveSection={setActiveSection} />
      <div id="content">
        <Routes>
          <Route path="/" element={<RoadMap activeSection={activeSection} />} />  {/* Default Page */}
        </Routes>
      </div>
    </main>
  </Router>
  )
}

export default App
