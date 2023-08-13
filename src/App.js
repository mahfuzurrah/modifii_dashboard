import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./Pages/Login";
// import MainLayout from "./Components/Navbar/MainLayout";
// import Dashboard from "./Pages/Dashboard";
// import Contacts from "./Pages/Contacts";
// import Products from "./Pages/Products";
// import Support from "./Pages/Support";
// import UserManagement from "./Pages/UserManagement";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          {/* <Route path="/" element={<MainLayout/>}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/products" element={<Products />} />
            <Route path="/support" element={<Support />} />
            <Route path="/user-management" element={<UserManagement />} />
          </Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
