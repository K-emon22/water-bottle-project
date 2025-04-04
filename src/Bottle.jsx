import React from "react";

const Bottle = ({bottl, handleAddToCart}) => {
  return (
    <div className="border-4 gap-5  ">
      <h1 className="font-bold text-xl pl-2">Brand: {bottl.brand}</h1>
      <img
        className="mx-auto my-auto w-full aspect-[1/1] object-cover"
        src={bottl.image}
        alt={bottl.brand}
      />
      <div className="text-center">
        <button
          onClick={() => handleAddToCart(bottl)}
          className="btn btn-primary "
        >
          {" "}
          buy now
        </button>
      </div>
    </div>
  );
};

export default Bottle;
