import React, {use} from "react";
import Bottle from "../Bottle";
const Bottles = ({PromiseBottle}) => {
  const bottles = use(PromiseBottle);
  console.log(bottles);

  return (
    <div>
      <h1 className="font-bold text-5xl text-center">
        bottles: {bottles.length}
      </h1>
      <div className="border-4 gap-5 border-red-600 grid grid-cols-3">
        {bottles.map((bottl) => (
          <Bottle key={bottl.id} className="last:col-span-3" bottl={bottl}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
