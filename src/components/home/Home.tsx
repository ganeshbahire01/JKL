import React from "react";

const Home = () => {
  return (
    <div className="relative z-10 flex flex-col items-center h-full py-16 md:py-24">
      <div className="inline-flex items-center px-2.5 py-1 text-sm font-medium rounded-full border border-transparent text-[#6941C6] bg-[#F9F5FF]">
        Our blog
      </div>
      <div className="text-4xl md:text-5xl pt-4 text-[#42307D] font-semibold leading-[60px] tracking-[-0.02em] text-center">
        Resources and insights
      </div>
      <div className="leading-[30px] text-center text-lg  md:text-xl text-[#6941C6] pt-6">
        The latest industry news, interviews, technologies, and resources.
      </div>
      <div className="pt-10">
        <div className="relative">
          <input
            type="text"
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                stroke="#667085"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
