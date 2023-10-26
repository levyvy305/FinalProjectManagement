import { Component, useState } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignupForm from "./components/SignupForm";
import Home from "./page/Home";
import ForgetForm from "./components/ForgetForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <SignupForm></SignupForm>

        <Routes>
          <Route path="/home" element={<Home />} />

          <Route path="/login" element={<SignupForm />} />
          <Route path="/forget" element={<ForgetForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
