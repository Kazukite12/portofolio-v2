import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./layout/sidebar";
import Drop from "./component/drop";
import Gallery from "./component/gallery";
import RoadMap from "./component/roadmap";

import "./App.css";
import Particles from "./component/Particles";


function App() {


  return (
    <Router>
    <div className='dot'></div>
    <main id='main'>
  
      <Sidebar />
      <div id="content">
        <Routes>
          <Route path="/" element={<RoadMap />} />  {/* Default Page */}
          <Route path="/drop" element={<Drop />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<h2>About Section</h2>} />
          <Route path="/mint" element={<h2>Minting Page</h2>} />
          <Route path="/twitter" element={<h2>Twitter Feed</h2>} />
          <Route path="/connect" element={<h2>Connect Wallet</h2>} />
        </Routes>
      </div>
    </main>
  </Router>
  )
}

export default App
