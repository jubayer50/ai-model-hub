import React, { useState } from "react";

const Model = ({ model, carts, setCarts }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribed = () => {
    setIsSubscribed(true);
    setCarts([...carts, model]);
  };

  // console.log(model);
  return (
    <div className="rounded-xl border border-zinc-400 overflow-hidden">
      <div className="h-56 flex justify-center items-center bg-zinc-200 ">
        <img
          className="h-40 w-40 object-contain duration-500 hover:scale-108"
          src={model.image}
          alt=""
        />
      </div>

      <div className="space-y-4 p-5">
        <h2 className="text-3xl font-bold">{model.title} </h2>
        <p>{model.description}</p>
        <p className="font-bold">
          <span className="text-3xl">${model.price}</span>/month
        </p>
        <button
          onClick={handleSubscribed}
          className="btn w-full bg-red-500 text-white rounded-md"
        >
          {isSubscribed ? "Subscribed" : "Subscribed Now"}
        </button>
      </div>
    </div>
  );
};

export default Model;
