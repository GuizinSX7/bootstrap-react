import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Login from "./pages/Login"
import Sobre from "./pages/Sobre"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
