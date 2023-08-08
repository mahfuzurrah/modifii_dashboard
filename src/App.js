import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./Pages/Login";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          {/* <Route path="/" element={<MainLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
