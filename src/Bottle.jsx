import React from "react";

const Bottle = ({bottl}) => {
  console.log(bottl);

  return (
    <div className="border-4 gap-5 ">
      <h1>{bottl.brand}</h1>
      <img
        className="mx-auto my-auto w-full aspect-[3/4] object-cover"
        src={bottl.image}
        alt={bottl.brand}
      />
    </div>
  );
};

export default Bottle;
