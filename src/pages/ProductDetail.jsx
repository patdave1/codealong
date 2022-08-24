import React from "react";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";

function ProductDetail() {
  const { productId } = useParams();
  const { data } = useAxios(`https://api.escuelajs.co/api/v1/products/1`);

  return (
    <div className="min-h-screen bg-orange-500">
      <div className="max-w-5xl bg-slate-100">
        <div>
          <img src={data?.category.image} alt="" />
        </div>
        <div className="flex">
          {data?.images.map((image, index) => (
            <img className="w-52" key={index} src={image} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
