import React, {use, useState} from "react";
import Bottle from "../Bottle";
const Bottles = ({PromiseBottle}) => {
  const [cart, setCart] = useState([]);

  const bottles = use(PromiseBottle);
  const handleAddToCart = (bottl) => {
    console.log("bottlea added", bottl);
  };

  return (
    <div>
      <h1 className="font-bold text-5xl text-center">
        bottles: {bottles.length}
      </h1>
      <div className="border-4 gap-5 border-red-600 grid grid-cols-4 p-5">
        {bottles.map((bottl) => (
          <Bottle
            key={bottl.id}
            handleAddToCart={handleAddToCart}
            bottl={bottl}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
