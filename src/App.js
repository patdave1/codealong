import React from "react";
import Button from "./components/Button";
import Form from "./components/Form";
import Header from "./components/Header";
import { Image } from "./components/Image";
import Navbar from "./components/Navbar";
import Practice from "./components/Practice";
import ProductList from "./components/ProductList";
import TaskManager from "./components/TaskManager";

function App() {
  return (
    <div className="h-screen bg-slate-500">
      {/* <TaskManager /> */}
      {/* <Form /> */}
      {/* <Navbar /> */}
      {/* <Button /> */}
      {/* <Button label="Add to cart" /> */}
      {/* <Button label="Read more" /> */}
      {/* <Button label="Register" /> */}
      {/* <Button label="Login" /> */}
      {/* <Header /> */}
      {/* <Image /> */}
      {/* <Practice /> */}
      <ProductList />
    </div>
  );
}

export default App;
