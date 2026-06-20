import React from "react";
import ParallaxBackground from "../components/ParallaxBackground";
import Herotext from "../components/Herotext";

const Hero = () => {
    return (
        <section className="relative min-h-screen overflow-hidden">
            <ParallaxBackground />
            <div className="relative z-10 container mx-auto max-w-7xl px-4 py-24">
                <Herotext />
            </div>
        </section>
    );
};

export default Hero;