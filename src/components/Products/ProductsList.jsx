import React from "react";
import { Link } from "react-router-dom";

const ProductsList = ({
  products,
  loading,
  cart,
  setCart,
  selectedBrand,
  selectedColor,
}) => {
  const filteredProducts = products.filter(
    (product) =>
      (product.brand_name === selectedBrand || !selectedBrand) &&
      (product.color_options.includes(selectedColor) || !selectedColor)
  );

  return (
    <div className="flex-1">
      {loading ? (
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <li
              className="list-none w-full flex flex-col p-5 relative group"
              key={product.id}
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <img
                    className="w-full"
                    src={product.image_url}
                    alt={product.name}
                  />
                </div>
                <div className="mt-auto">
                  <Link to={`/products/${product.id}`}>
                    <div className="flex gap-2">
                      <h2 className="font-bold">{product.name}</h2>
                      <p className="text-gray-500 font-bold">{`(${product.brand_name})`}</p>
                    </div>
                  </Link>
                  <p className="font-light text-sm mb-2">
                    {product.description}
                  </p>
                  <strong className="mb-2">${product.price}</strong>
                  <div className="flex gap-2 mt-3">
                    {product.color_options.map((c, index) => (
                      <span
                        key={index}
                        style={{ background: c }}
                        className="rounded-full border-2 w-5 h-5 px-4 py-4"
                      ></span>
                    ))}
                  </div>
                  <div className="mt-5">
                    <button
                      onClick={() => setCart([...cart, product])}
                      className="mt-2 bg-gray-500 hover:scale-x-90 hover:bg-gray-700 text-white px-4 py-3 rounded w-full opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsList;
