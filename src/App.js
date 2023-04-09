import { useState } from "react";
import "./App.css";
import Chat from "./Components/Pages/Chat";
import Members from "./Components/Pages/Members";
import Teams from "./Components/Pages/Teams";
import Vault from "./Components/Pages/Vault";
import Knowledge from "./Components/Pages/Knowledge";

import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Components/Dashboard";
import Navtopbar from "./Components/Navtopbar";
import Sidebar from "./Components/Sidebar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div
          style={{ backgroundColor: "#EDEDED", display: "flex" }}
          className="container-fluid"
        >
          <div>
            <Sidebar />
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <Navtopbar />
            <Routes>
              <Route path="/dash" element={<Knowledge/>} />
             <Route path="/knowledge" element={<Dashboard/>} /> 
              <Route path="/members" element={<Members />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/vault" element={<Vault />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </div>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
