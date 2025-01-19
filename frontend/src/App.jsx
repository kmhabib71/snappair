import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import VideoChat from "./pages/VideoChat/VideoChat";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Dashboard as the homepage */}
        <Route path="/video-chat" element={<VideoChat />} />
        {/* Dashboard as the homepage */}
      </Routes>
    </Router>
  );
}

export default App;
