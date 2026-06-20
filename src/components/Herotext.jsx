import React from 'react'
import { FlipWords } from './FlipWords';

const Herotext = () => {
    return (
        <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl">
            <div className="flex flex-col items-center md:items-start gap-6 c-space">
                <h1 className="text-5xl md:text-6xl font-bold text-white">
                    Hi, I'm Haaniya
                </h1>
                <p className="text-3xl md:text-4xl font-medium text-white/80">
                    I'm a passionate Developer building modern web experiences.
                </p>
            </div>
            <div> 
                <FlipWords words={["Developer", "Designer", "Creator"]} className={("font-black text-white text-8xl")}/>
            </div>
        </div>
    )
}

export default Herotext;




