import { Link } from "react-router-dom";
import headImg from "/headPhones.jpg";
const Home = () => {
  return (
    <>
      <div className="flex justify-between tems-center max-sm:flex-wrap max-sm:justify-center max-sm:w-full">
        <div className=" flex-col">
          <h1 className="font-light text-2xl max-sm:text-xl ">
            Classic Exclusive
          </h1>
          <p className="text-7xl font-bold mt-5 max-sm:text-4xl max-sm:mt-2 text-blue-600">
            Head phones <br /> for you
          </p>
          <p className="font-bold text-2xl mt-5 max-sm:text-xl max-sm:mt-2">
            UPTO 50% OFF
          </p>

          <Link to="/products">
            <button className=" px-2 py-1 mt-5 rounded-lg hover:bg-blue-500 hover:text-white hover:border-none duration-300 border-2  ">
              Shop Now
            </button>
          </Link>
        </div>
        <div className="flex justify-end pr-20 max-sm:pr-10">
          <img className="w-96" src={headImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
