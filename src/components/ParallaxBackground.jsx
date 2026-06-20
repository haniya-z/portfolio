import React from "react";
import image from "../assets/image.png";

const ParallaxBackground = () => {
  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        {/* background sky */}
        <div
          className="absolute inset-0 w-full h-screen -z-50 bg-cover bg-bottom"
          style={{ backgroundImage: `url(${image})` }}
        />
        { /*mountain layer 3 */}
        <div />
        {/*planets */}
        <div />
        {/*mountain layer 2 */}
        <div />
        {/*mountain layer 1 */}
        <div />
      </div>
    </section>
  );
};

export default ParallaxBackground;