import React from "react";
import flower from "../assets/img/flower.jpg";

function Practice() {
  return (
    <div className="flex justify-center items-centre h-screen">
      <div className="w-96 shadow-md">
        <div className="h-60 overflow-hidden">
          <img src={flower} alt="" />
        </div>
        <div className="p-5" />
        <div className="flex justify-between">
          <h3 className="font-bold capitalize">HP Pavilion 15</h3>
          <h6>GH¢4500</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse
            assumenda eius eos autem.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Practice;
