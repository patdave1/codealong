import React from "react";

const Button = ({ label }) => {
  return (
    <button className="border-2 border-orange-500 py-2 px-5 rounded-full text-orange-500 hover: bg-white">
      {label}
    </button>
  );
};
export default Button;
