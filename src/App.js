import Button from "./components/Button";
import Header from "./components/Header";
import {Image} from "./components/Image";
import Navbar from "./components/Navbar";


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
  </div>
  )


}

export default App