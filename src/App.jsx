import React from 'react'
import Navbar from "./sections/Navbar";
import Hero3D from "./sections/Hero3D";

const App = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <div className="text-red-500 text-4xl text-center mt-8">Debug Text Visible</div>
      <Hero3D /><div className="text-center text-2xl">Test Render</div>
      {/* About Section */}
      {/* Projects Section */}
      {/* Experiences Section */}
      {/* Testimonial Section */}
      {/* Contact Section */}
      {/* Footer */}
    </div>


  );
};

export default App;

