import React from "react";

const Aside = ({
  brands,
  colors,
  selectedColor,
  setSelectedColor,
  selectedBrand,
  setSelectedBrand,
}) => {
  return (
    <div>
      <aside className="w-56 max-sm:w-40">
        <div>
          <h1 className="text-xl font-black mb-7">Product Categories</h1>
          {brands.map((b, index) => {
            return (
              <li className="list-none flex gap-3 gap-y-5 pb-3" key={index}>
                <input
                  type="radio"
                  value={b}
                  name="brand"
                  id={index}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  checked={selectedBrand === b}
                />
                <label className="font-thin text-xl" htmlFor={index}>
                  {b}
                </label>
              </li>
            );
          })}
        </div>
        <h1 className="text-xl font-black mb-5 mt-7">Product Colors</h1>
        <div className="flex flex-wrap gap-2">
          {colors.map((c, index) => {
            return (
              <li
                className="list-none flex duration-300 cursor-pointer"
                key={index}
              >
                <span
                  style={{
                    background: c,
                    outline: selectedColor === c ? "3px solid black" : "",
                  }}
                  className="rounded-full border-2 w-2 h-2 px-4 py-4"
                  onClick={() => setSelectedColor(c)}
                ></span>
              </li>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Aside;
