import Button from "./components/Button";
import Header from "./components/Header";
import {Image} from "./components/Image";
import Navbar from "./components/Navbar";
import Practice from"./components/Practice";

function App(){
  return (
    <div>
    <Navbar/>
    <Button />
    <Button lable="Add to cart"/>
    <Button lable="Read more"/>
    <Button lable="Register"/>
    <Button lable="Login"/>
    <Header/>
    <Image/>
    <practice/>
  </div>
  );


}

export default App