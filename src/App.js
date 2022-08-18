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
    <div>
      {/* <TaskManager/> */}
      <Form />
      {/* <Navbar/>
    <Button />
    <Button lable="Add to cart"/>
    <Button lable="Read more"/>
    <Button lable="Register"/>
    <Button lable="Login"/>
    <Header/>
    <Image/>
    <practice/> */}
      <ProductList />
    </div>
  );
}

export default App;
