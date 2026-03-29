import React from "react";
import Cart from "../Cart/Cart";

const Carts = ({ carts }) => {
  console.log(carts);
  return (
    <div className="my-15 container mx-auto">
      <div className="py-8 text-4xl font-bold">Your Cart</div>

      <div className="space-y-4">
        {carts.map((cart) => (
          <Cart key={cart.id} cart={cart}></Cart>
        ))}
      </div>

      <div className="rounded-xl bg-black text-white font-bold flex justify-between items-center py-6 px-10 mt-10 text-2xl">
        <h3>Total</h3>
        <p>0</p>
      </div>
    </div>
  );
};

export default Carts;
