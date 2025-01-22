import React from "react";
import { motion } from "framer-motion";

function ServicesPage() {
  const features = [
    {
      id: "01",
      title: "UI/UX Design",
      features: [
        "User Interface Design",
        "User Experience Design",
        "Wireframing & Prototyping",
        "Mobile App Design",
        "Web Design",
        "Design System Creation"
      ],
      description: "We design intuitive and visually appealing interfaces that enhance user experiences. Our focus is on creating designs that are functional, user-friendly, and tailored to your brand's needs."
    },
    {
      id: "02",
      title: "Web Development",
      features: [
        "Frontend Development",
        "Backend Development",
        "E-commerce Solutions",
        "CMS Development",
        "API Integration",
        "Performance Optimization"
      ],
      description: "We build robust and scalable web applications using modern technologies and best practices to ensure your digital presence stands out."
    },
    {
      id: "03",
      title: "Mobile Development",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-platform Solutions",
        "App Maintenance",
        "App Store Optimization",
        "Mobile UI/UX Design"
      ],
      description: "We create native and cross-platform mobile applications that provide seamless user experiences across all devices."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.25,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 12px;
          background: black;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #A2F97D;
          border-radius: 10px;
          border: 3px solid black;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #8DE368;
        }
        
        * {
          scrollbar-width: thin;
          scrollbar-color: #A2F97D black;
        }
      `}</style>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-20 pb-10">
        {/* Top section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-16"
        >
          {/* Left section - Text */}
          <div className="lg:w-2/5 w-full text-center lg:text-left">
            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-black mb-3"
            >
              What We Offer!
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-black/70"
            >
              We offer tailored solutions to meet your needs. Let's turn your vision into reality together.
            </motion.p>
          </div>

          {/* Right section - Fixed width cards */}
          <div className="lg:w-3/5 w-full">
            <div className="flex justify-center lg:justify-between items-center gap-4">
              {[1, 2, 3].map((item, i) => (
                <motion.div
                  key={item}
                  variants={cardVariants}
                  custom={i}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                  }}
                  style={{
                    backgroundColor: '#A2F97D',
                    width: '160px',
                    height: '160px'
                  }}
                  className="rounded-3xl"
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services section */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-3xl font-bold text-black mb-8 text-center lg:text-left"
          >
            Our Services
          </motion.h2>
          
          <div className="grid grid-cols-1 gap-6">
            {features.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 1.2,
                  delay: i * 0.2,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                }}
                className="w-full p-8 bg-black rounded-3xl text-green-400"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-lg font-medium">{service.id}</span>
                    <h3 className="text-xl sm:text-2xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-green-400/90 text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {service.features.map((feature, index) => (
                      <motion.li 
                        key={index} 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.6,
                          delay: i * 0.2 + index * 0.1,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                        className="flex items-center gap-2 text-base"
                      >
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default ServicesPage;