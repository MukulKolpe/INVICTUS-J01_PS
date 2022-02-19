import React from "react";
import { useState } from "react";
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import DepartmentPage from "../DepartmentPage/DepartmentPage";
import LoginPage from "../LoginPage/LoginPage";
import AddProject from "../AddProject/AddProject";
import Customnav from "../Nav/Nav";
import "./App.css";
import DisplayPage from "../DisplayPage/DisplayPage";
import NotFound from "../NotFound/NotFound";
function App() {
  const[query,setQuery] = useState("");
  console.log(query);
  return (
    <div className="App">
    <Customnav getQuery = {(q) => {setQuery(q)}}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayPage query= {query} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/addproject" element={<AddProject />} />
          <Route path="/department" element={<DepartmentPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
