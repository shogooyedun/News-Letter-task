import React, { useState } from "react";
import news from "../assets/news.png";

const NewsLetter = () => {
  // State to store email input   setEmail:function to update state
  const [email, setEmail] = useState("");

  // Handle form submission. When you use await with an asynchronous action, it pauses only inside the async function until that specific action is complete.
  const handleSubmit = async (event) => {
    // This Prevent page reload  event is the parameter
    event.preventDefault();

    // Check condition if email input is valid.    !:logical NOT
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }

    // i Created an object data (variable) with the email value:{email}. This will be sent to the backend API.
    const data = {email};

    // API call for where the email would be sent .  
    try {
      const response = await fetch(
        "",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      console.log(response);

      //This is how we make an HTTP request to a backend server using the fetch API in JavaScript. The fetch function is used to make network requests, and in this case, it sends data to a backend API when the user submits their email.
      //JSON.stringify(data) this converts a JavaScript object (data) into a JSON string cause that what we are actually sending body to the server and it expect a string

      // Check if the request was successful
      if (response.ok) {
        alert("Thank you for subscribing!");
        setEmail(""); // Clear the input
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to subscribe. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center p-6">
      {/* Left Image Section */}
      <div className="flex-none w-full lg:w-[284px] h-[284px] lg:pl-[100px]">
        <img
          src={news}
          alt="Newsletter"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Right Content Section */}
      <div className="flex-grow mt-4 md:mt-0 md:pl-6 flex flex-col">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 lg:ml-[150px]">
          Subscribe to our Newsletter
        </h1>
        <p className="text-sm md:text-base text-gray-600 mt-2 lg:ml-[150px]">
          Be the first to get exclusive offers <br />
          and the latest news.
        </p>
        <form className="mt-4 flex flex-col" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full md:w-2/3 p-2 border lg:w-[400px] border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 lg:ml-[150px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update state on input change
            required 
          />
          <button
            type="submit"
            className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-secondary lg:hover:bg-secondary lg:ml-[300px] lg:w-[100px]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;

