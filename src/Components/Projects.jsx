import React from "react";
import ToolIcon from "../assets/images/Tool.png"; // Make sure this path is correct

function Projects() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-20 2xl:px-72 lg:py-20 py-10">
      {/* Heading */}
      <div>
        <h1 className="text-black text-2xl font-semibold text-left">
          Take a look at what we&#39;ve built
        </h1>
      </div>

      {/* Cards Section */}
      <div className="mt-10 space-y-10">
        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            className="w-full h-[550px] bg-black rounded-[35px] p-10"
          >
            <img className="w-24 mb-10" src={ToolIcon} alt="ToolIcon" />

            <p className="flex mb-5 text-white text-2xl font-medium">
              Find And Book Local Beauty Experts
            </p>

            <div className="flex flex-row gap-4">
              <button className="px-4 py-1 bg-black border border-[#A2F97D] text-[#FAF9F6] text-sm font-regular rounded-full hover:bg-gray-800 transition">
                Web Design
              </button>
              <button className="px-4 py-1 bg-black border border-[#A2F97D] text-[#FAF9F6] text-sm font-regular rounded-full hover:bg-gray-800 transition">
                Branding
              </button>
            </div>

            <div className="flex">
              <button
                className="px-4 sm:px-6 py-2 sm:py-3 mt-8 md:mt-10 rounded-xl 
                  bg-[#A2F97D] font-semibold text-[#000000] 
                  text-base sm:text-lg hover:bg-[#8BCD56] transition-colors"
              >
                Explore Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
