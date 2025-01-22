import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Services() {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animate heading
    gsap.fromTo(
      ".services-heading",
      { 
        opacity: 0,
        x: -20 
      },
      { 
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-heading",
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate service cards with stagger
    gsap.fromTo(
      ".service-card",
      { 
        opacity: 0,
        scale: 0.95,
        y: 30
      },
      { 
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".service-cards-container",
          start: "top bottom-=50",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const services = [
    { id: "01", title: "UI/UX Design" },
    { id: "02", title: "Web Development" },
    { id: "03", title: "Android App Development" }
  ];

  return (
    <div ref={sectionRef} className="w-full bg-[#FAF9F6] px-4 sm:px-6 md:px-8 lg:px-20 2xl:px-72 lg:py-20 py-10">
      <div>
        <h1 className="services-heading text-black text-xl font-semibold pl-4">
          Our Services
        </h1>

        <div className="w-full mt-10">
          <div className="service-cards-container">
            {services.map((service) => (
              <div
                key={service.id}
                className="service-card w-full h-[160px] bg-black rounded-3xl mb-5 flex items-center gap-7 px-20
                  transform transition-transform duration-300 hover:scale-[1.02] cursor-pointer
                  hover:shadow-lg relative overflow-hidden group"
              >
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-black 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10 flex items-center gap-7">
                  <span className="font-extralight text-[24px] text-[#A2F97D] 
                    group-hover:scale-110 transition-transform duration-300">
                    {service.id}
                  </span>
                  <span className="font-semibold text-[24px] text-[#A2F97D]
                    group-hover:translate-x-2 transition-transform duration-300">
                    {service.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;