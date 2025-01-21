import React from "react";

function ServicesPage() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-20 2xl:px-72 lg:py-20 py-10">
      {/* Main container */}
      <div className="flex flex-col lg:flex-row items-start gap-10">
        {/* Left section - Text */}
        <div className="flex-1">
          <h1 className="text-black text-3xl font-semibold pl-4">Our Services</h1>
        </div>

        {/* Right section - Service cards */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { id: "01", title: "UI/UX Design" },
              { id: "02", title: "Web Development" },
              { id: "03", title: "Android App Development" },
            ].map((service) => (
              <div
                key={service.id}
                className="w-full h-[160px] bg-[#A2F97D] border-2 border-transparent rounded-3xl flex items-center justify-center mb-5"
              >
                {/* Card content */}
                <h2 className="text-lg font-semibold">{service.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
