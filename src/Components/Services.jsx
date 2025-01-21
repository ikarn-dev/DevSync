import React from "react";

function Services() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-20 2xl:px-72 lg:py-20 py-10">
      <div>
        {/* Heading positioned near the top left but not at extreme left */}
        <h1 className="text-black text-xl font-semibold pl-4">
          Our Services
        </h1>

        <div className="w-full mt-10">
          <div>
            {[{ id: "01", title: "UI/UX Design" }, { id: "02", title: "Web Development" }, { id: "03", title: "Android App Development" }].map(
              (service) => (
                <div
                  key={service.id}
                  className="w-full h-[160px] bg-black rounded-3xl mb-5 flex items-center gap-7 px-20"
                >
                  <span className="font-extralight text-[24px] text-[#A2F97D]">
                    {service.id}
                  </span>
                  <span className="font-semibold text-[24px] text-[#A2F97D]">
                    {service.title}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
