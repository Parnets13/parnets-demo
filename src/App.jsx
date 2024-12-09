import React, { useState, useRef, useEffect } from "react";
import { FloatingDockDemo } from "./components/FloatingDockDemo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/Header";
import Home2 from "./components/Home2";
import LandingPage from "./components/LandingPage";
import Service from "./components/Service";

const App = () => {

  return (
    <BrowserRouter>
      <Header/>
      <FloatingDockDemo />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<Home2 />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
