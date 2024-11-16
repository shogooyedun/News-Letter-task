import React from "react";
import news from "../assets/news.png";

const NewsLetter = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-6">
      {/* Left Image Section */}
      <div className="flex-none w-full lg:w-[284px] h-[284px] lg:pl-[100px] ">
        <img
          src={news}
          alt="Newsletter"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content Section */}
      <div className="flex-grow mt-4 md:mt-0 md:pl-6 flex flex-col">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 lg:ml-[150px] ">
          Subscribe to our Newsletter
        </h1>
        <p className="text-sm md:text-base text-gray-600 mt-2 lg:ml-[150px]">
          Be the first to get exclusive offers <br />and the latest news.
        </p>
        <form className="mt-4 flex flex-col ">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full md:w-2/3 p-2 border lg:w-[400px]  border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 lg:ml-[150px]"
          />
          <button
            type="submit"
            className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-secondary  lg:hover:bg-secondary lg:ml-[300px] lg:w-[100px]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
