import React from "react";

const Cart = ({ cart }) => {
  // cart is a objet that you have to show
  return (
    <div className="p-3 flex justify-between items-center border border-zinc-400 hover:border-red-400 duration-500 rounded-xl">
      <div className="flex gap-5 items-center">
        <div className="h-18 w-18   flex justify-center items-center">
          <img
            className="h-14 w-14 object-contain flex justify-center items-center"
            src={cart.image}
            alt=""
          />
        </div>

        <div>
          <h2 className="font-bold text-xl">{cart.title}</h2>
          <p>{cart.description}</p>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2">
          <p className="text-2xl">
            <span className="font-bold">${cart.price}</span>/month
          </p>
          <button className="btn btn-circle btn-ghost">X</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

/* 
{
    "id": 1,
    "title": "ChatGPT",
    "description": "The world's most popular AI assistant by OpenAI.\nVersatile for writing, coding, reasoning, and creative tasks.",
    "price": 20,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png",
    "status": "popular"
}
*/
