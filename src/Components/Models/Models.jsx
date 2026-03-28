import React, { use } from "react";
import Model from "../Model/Model";

const Models = ({ modelsPromise }) => {
  const models = use(modelsPromise);
  return (
    <div className="my-20">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold">CHOOSE YOUR AI MODEL</h2>
        <p className="mt-3">
          One subscription gives you access to all frontier AI models
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto mt-10">
        {models.map((model) => (
          <Model key={model.id} model={model}></Model>
        ))}
      </div>
    </div>
  );
};

export default Models;
