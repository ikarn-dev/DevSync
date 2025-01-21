import React from 'react';
import ToolIcon from "../../assets/images/Tool.png";

const PROJECTS = [
  {
    icon: ToolIcon,
    title: "Find And Book Local Beauty Experts",
    categories: ["Web Design", "Branding"],
    bgColor: "black",
  },
  {
    icon: ToolIcon,
    title: "E-Commerce Platform For Local Artisans",
    categories: ["Web Development", "UI/UX"],
    bgColor: "black",
  },
  {
    icon: ToolIcon,
    title: "Healthcare Management Dashboard",
    categories: ["Web App", "Development"],
    bgColor: "black",
  }
];

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Header Section */}
      <div className="w-full mt-10 px-4 sm:px-6 md:px-8 lg:px-20 2xl:px-72 lg:py-20 pt-24">
        <div className="w-full flex flex-col items-center">
          {/* Heading */}
          <h1 className="text-gray-800 font-medium text-center tracking-tight leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-[59px] opacity-100">
            Our Projects Portfolio
            <br className="hidden sm:block" />
            <span className="sm:mt-2 inline-block">Crafted with Excellence</span>
          </h1>

          {/* Paragraph */}
          <p className="text-black font-regular text-center mt-4 md:mt-6 text-base md:text-md lg:text-md opacity-100">
            Explore our collection of successful projects that showcase our expertise
            and dedication to quality.
          </p>
        </div>

        {/* Moving Green Cards Section */}
        <div className="relative overflow-hidden pt-8 md:pt-12">
          {/* Left gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-[#FAF9F6] to-transparent z-10"></div>

          {/* Cards animation */}
          <div className="flex animate-scrollCards whitespace-nowrap">
            {/* First set of cards */}
            <div className="flex gap-3 sm:gap-4 mr-3 sm:mr-4">
              {[...Array(5)].map((_, index) => (
                <div
                  key={`card1-${index}`}
                  className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[233px] md:h-[233px] rounded-xl bg-[#A2F97D] shrink-0"
                ></div>
              ))}
            </div>
            {/* Duplicate set of cards */}
            <div className="flex gap-3 sm:gap-4">
              {[...Array(5)].map((_, index) => (
                <div
                  key={`card2-${index}`}
                  className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[233px] md:h-[233px] rounded-xl bg-[#A2F97D] shrink-0"
                ></div>
              ))}
            </div>
          </div>

          {/* Right gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 bg-gradient-to-l from-[#FAF9F6] to-transparent z-10"></div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-20 2xl:px-72 lg:py-20 py-10">
        {/* Heading */}
        <div>
          <h1 className="text-black text-2xl font-semibold text-left">
            Take a look at what we&#39;ve built
          </h1>
        </div>

        {/* Projects Cards */}
        <div className="mt-10 space-y-10">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="w-full h-[550px] bg-black rounded-[35px] p-10"
            >
              <img className="w-24 mb-10" src={project.icon} alt="Project Icon" />

              <p className="flex mb-5 text-white text-2xl font-medium">
                {project.title}
              </p>

              <div className="flex flex-row gap-4">
                {project.categories.map((category, catIndex) => (
                  <button
                    key={catIndex}
                    className="px-4 py-1 bg-black border border-[#A2F97D] text-[#FAF9F6] text-sm font-regular rounded-full hover:bg-gray-800 transition"
                  >
                    {category}
                  </button>
                ))}
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
    </div>
  );
}

export default ProjectsPage;