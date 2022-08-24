import React from "react";

import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";
import TaskManager from "./pages/TaskManager";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";


function App() {
  return (
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/task-manager" element={<TaskManager />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*"element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    
  );
}
export default App;
