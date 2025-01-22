import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ToolIcon from "../assets/images/Tool.png";

function Projects() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate heading
    gsap.fromTo(
      ".projects-heading",
      { 
        opacity: 0,
        y: 20 
      },
      { 
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".projects-heading",
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate project cards
    gsap.utils.toArray(".project-card").forEach((card, index) => {
      // Card slide up and fade in
      gsap.fromTo(
        card,
        { 
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate card contents with stagger
      gsap.fromTo(
        card.querySelectorAll(".animate-content"),
        { 
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full bg-[#FAF9F6] px-4 sm:px-6 md:px-8 lg:px-20 2xl:px-72 lg:py-20 py-10">
      {/* Heading */}
      <div>
        <h1 className="projects-heading text-black text-2xl font-semibold text-left">
          Take a look at what we&#39;ve built
        </h1>
      </div>

      {/* Cards Section */}
      <div className="mt-10 space-y-10">
        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            className="project-card w-full h-[550px] bg-black rounded-[35px] p-10
              transform transition-transform duration-300 hover:scale-[1.02]
              hover:shadow-xl relative overflow-hidden group"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black 
              opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Content */}
            <div className="relative z-10">
              <img 
                className="animate-content w-24 mb-10 transform group-hover:scale-110 transition-transform duration-300" 
                src={ToolIcon} 
                alt="ToolIcon" 
              />

              <p className="animate-content flex mb-5 text-white text-2xl font-medium
                group-hover:translate-x-2 transition-transform duration-300">
                Find And Book Local Beauty Experts
              </p>

              <div className="animate-content flex flex-row gap-4">
                <button className="px-4 py-1 bg-black border border-[#A2F97D] text-[#FAF9F6] 
                  text-sm font-regular rounded-full hover:bg-gray-800 transition
                  hover:scale-105 transition-transform duration-300">
                  Web Design
                </button>
                <button className="px-4 py-1 bg-black border border-[#A2F97D] text-[#FAF9F6] 
                  text-sm font-regular rounded-full hover:bg-gray-800 transition
                  hover:scale-105 transition-transform duration-300">
                  Branding
                </button>
              </div>

              <div className="animate-content flex">
                <button className="px-4 sm:px-6 py-2 sm:py-3 mt-8 md:mt-10 rounded-xl 
                  bg-[#A2F97D] font-semibold text-[#000000] 
                  text-base sm:text-lg hover:bg-[#8BCD56] transition-all duration-300
                  hover:shadow-lg hover:scale-105">
                  Explore Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;