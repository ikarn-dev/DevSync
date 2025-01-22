import React, { useEffect } from "react";
import { gsap } from "gsap";

function HeroSection() {
  useEffect(() => {
    // Text reveal animations
    gsap.fromTo(
      ".hero-text",
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2,
        ease: "power2.out" 
      }
    );

    // Button pop-up animation
    gsap.fromTo(
      ".hero-button",
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 1,
        delay: 0.6,
        ease: "elastic.out(1, 0.5)" 
      }
    );
  }, []);

  return (
    <div className="w-full mt-10 px-4 sm:px-6 md:px-8 lg:px-20 2xl:px-72 lg:py-20 pt-24 bg-[#FAF9F6] overflow-hidden">
      <style jsx global>{`
        @keyframes slideLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-233px * 5 - 16px * 5));
          }
        }

        .sliding-cards {
          animation: slideLeft 20s linear infinite;
        }

        ::-webkit-scrollbar {
          width: 12px;
          background: black;
        }

        ::-webkit-scrollbar-thumb {
          background: #a2f97d;
          border-radius: 10px;
          border: 3px solid black;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #8de368;
        }

        * {
          scrollbar-width: thin;
          scrollbar-color: #a2f97d black;
        }
      `}</style>

      <div className="w-full flex flex-col items-center">
        <h1 className="hero-text text-gray-800 font-medium text-center tracking-tight leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-[59px]">
          Crafting Digital Experiences
          <br className="hidden sm:block" />
          <span className="sm:mt-2 inline-block">from Vision To Launch</span>
        </h1>

        <p className="hero-text text-black font-regular text-center mt-4 md:mt-6 text-base md:text-md lg:text-md">
          From stunning designs to flawless code, we build websites that
          captivate, perform, and scale.
        </p>

        <button className="hero-button px-4 sm:px-6 py-2 sm:py-3 mt-8 md:mt-10 rounded-xl 
          bg-black font-semibold text-[#A2F97D] 
          text-base sm:text-lg hover:bg-gray-800 transition-colors">
          Let&#39;s Build Your Website
        </button>
      </div>

      <div className="relative overflow-hidden pt-8 md:pt-12">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 
          bg-gradient-to-r from-[#FAF9F6] to-transparent z-10"></div>

        <div className="flex gap-3 sm:gap-4 sliding-cards">
          {[...Array(10)].map((_, index) => (
            <div
              key={`card-${index}`}
              className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[233px] md:h-[233px] 
              rounded-xl bg-[#A2F97D] shrink-0"
            ></div>
          ))}
        </div>

        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 
          bg-gradient-to-l from-[#FAF9F6] to-transparent z-10"></div>
      </div>
    </div>
  );
}

export default HeroSection;