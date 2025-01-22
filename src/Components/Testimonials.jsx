import React from "react";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "This is the best service I've ever used. Highly recommended!",
      author: "John Doe",
    },
    {
      id: 2,
      text: "Exceptional quality and amazing support. Five stars utututittiuuyg!",
      author: "Jane Smith",
    },
    {
      id: 3,
      text: "A wonderful experience from start to finish.",
      author: "Sam Wilson",
    },
  ];

  // Duplicate testimonials for infinite scrolling
  const repeatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="w-full bg-[#FAF9F6] px-4 sm:px-6 md:px-8 lg:px-24 2xl:px-72 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-gray-800 font-medium text-center tracking-tight leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[39px]">
          What Our Clients Say
        </h2>
      </div>

      {/* Infinite Scroll Testimonials */}
      <div className="relative overflow-hidden py-8 md:py-12">
        {/* Left gradient */}
        <div
          className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 
          bg-gradient-to-r from-[#FAF9F6] to-transparent z-10"
        ></div>

        <div className="flex gap-6 sm:gap-8 animate-scrollCards hover:pause-scroll">
          {repeatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-[300px] h-auto md:w-[400px] p-6 sm:p-8 flex flex-col justify-between
                bg-white shadow-lg rounded-lg shrink-0 border border-gray-200 overflow-hidden transform transition-all duration-500 ease-in-out 
                hover:translate-x-[-4px] hover:scale-105 cursor-pointer"
            >
              <p className="text-gray-700 text-base md:text-lg font-light italic break-words">
                “{testimonial.text}”
              </p>
              <h4 className="text-gray-900 text-base md:text-lg font-bold text-right">
                - {testimonial.author}
              </h4>
            </div>
          ))}
        </div>

        {/* Right gradient */}
        <div
          className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 
          bg-gradient-to-l from-[#FAF9F6] to-transparent z-10"
        ></div>
      </div>
    </div>
  );
}

export default Testimonials;
