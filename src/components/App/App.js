import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import DepartmentPage from "../DepartmentPage/DepartmentPage";
import LoginPage from "../LoginPage/LoginPage";
import AddProject from "../AddProject/AddProject";
import "./App.css";
import DisplayPage from "../DisplayPage/DisplayPage";
import NotFound from "../NotFound/NotFound";
import NavigationBar from "../Nav/Nav";
function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<DisplayPage />} />
          <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />
          <Route path="/addproject" element={<AddProject />} />
          <Route path="/department" element={<DepartmentPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
