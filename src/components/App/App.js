import React from "react";
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import DepartmentPage from "../DepartmentPage/DepartmentPage";
import LoginPage from "../LoginPage/LoginPage";
import AddProject from "../AddProject/AddProject";
import Nav from "../Nav/Nav";
import "./App.css";
import DisplayPage from "../DisplayPage/DisplayPage";

function App() {
  return (
    <div className="App">
    <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/addproject" element={<AddProject />} />
          <Route path="/department" element={<DepartmentPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
