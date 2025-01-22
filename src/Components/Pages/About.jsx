import React from 'react';
import { ArrowRight, Code, Smartphone, Globe, Users, Rocket } from 'lucide-react';

function About() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          About <span className="text-[#A2F97D]">DevSync</span>
        </h1>
        <p className="text-gray-600 text-center max-w-3xl mx-auto text-lg">
          Empowering businesses through innovative digital solutions. We transform ideas into powerful, scalable applications.
        </p>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2023 by Madhusudhan Reddy and Karan, DevSync emerged from a shared vision to bridge the gap between complex technology and business needs. Our journey began with a simple mission: to make cutting-edge technology accessible to businesses of all sizes.
            </p>
            <p className="text-gray-600 mb-6">
              What started as a two-person team has grown into a dynamic group of developers, designers, and digital strategists, all united by our passion for creating exceptional digital experiences.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Users className="text-blue-600 mb-4" size={32} />
              <h3 className="font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600 text-sm">Skilled professionals dedicated to your success</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Rocket className="text-blue-600 mb-4" size={32} />
              <h3 className="font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">Cutting-edge solutions for modern challenges</p>
            </div>
          </div>
        </div>
      </div>

      {/* Founders Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Founders</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <img
                src="/src/assets/images/madhu_pfp.svg"
                alt="Madhusudhan Reddy"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Madhusudhan Reddy</h3>
              <p className="text-gray-600 mb-4">Co-Founder & UI/UX Designer</p>
              <p className="text-gray-600 text-sm">
                Bringing years of experience in UX/UI design and product strategy, Madhusudhan ensures our solutions are both beautiful and functional.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <img
                src="/src/assets/images/Karan_pfp.svg"
                alt="Karan"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Karan</h3>
              <p className="text-gray-600 mb-4">Co-Founder & Technical Lead</p>
              <p className="text-gray-600 text-sm">
                With expertise in full-stack development and system architecture, Karan leads our technical initiatives and ensures delivery of robust solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg transition-transform hover:-translate-y-2">
            <Globe className="text-blue-600 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Responsive Web Applications</li>
              <li>• E-commerce Solutions</li>
              <li>• Custom CMS Development</li>
              <li>• Progressive Web Apps</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg transition-transform hover:-translate-y-2">
            <Smartphone className="text-blue-600 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-4">App Development</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• iOS & Android Apps</li>
              <li>• Cross-platform Solutions</li>
              <li>• App Modernization</li>
              <li>• Mobile-First Strategies</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg transition-transform hover:-translate-y-2">
            <Code className="text-blue-600 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-4">Custom Solutions</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• API Development</li>
              <li>• System Integration</li>
              <li>• Cloud Solutions</li>
              <li>• Technical Consulting</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
