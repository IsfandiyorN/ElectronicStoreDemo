import React from "react";

const Cart = ({ cart, setCart, navigate }) => {
  const deleteFromCart = (id) => {
    const updatedCart = cart.filter((c) => c.id !== id);
    setCart(updatedCart);
  };
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-5">Cart</h2>
      {cart.length === 0 ? (
        <>
          <p>Your cart is empty</p>
          <button
            onClick={() => navigate("/products")}
            className="bg-blue-600 text-white px-4 py-3 mt-10"
          >
            add products to cart
          </button>
        </>
      ) : (
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {cart.map((product) => (
            <li
              className="list-none w-full flex flex-col p-5 relative group"
              key={product.id}
            >
              <img src={product.image_url} alt="" />
              <p className="font-bold">{product.name}</p>
              <p className="text-gray-500 font-bold mt-2">
                {" "}
                {product.description}
              </p>
              <p className="font-bold mt-4">${product.price}</p>
              <button
                onClick={() => deleteFromCart(product.id)}
                className="bg-red-500 text-white  py-3 mt-3 text-xl "
              >
                delete from cart
              </button>
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
