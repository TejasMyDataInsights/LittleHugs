import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./personalDashboard/Dashboard";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
