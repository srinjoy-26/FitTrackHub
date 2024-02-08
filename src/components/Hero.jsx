import React from "react";
import image from "../assets/bg-image.avif"

export default function Hero() {

    return(
        <div className="">
            
        <img src={image} className="w-full opacity-60 absolute  z-1"/>
            <div className="lg:text-center">
            <div className="relative">
                <h1 className="text-4xl leading-tight font-extrabold text-white sm:text-5xl md:text-6xl ">Your Fitness Journey Starts Here</h1>
                <p className="mt-10 max-w-4xl font-bold font-2xl text-bold mx-auto text-lg text-black sm:text-xl">Embarking on a fitness journey is akin to sculpting a masterpiece, with the gym as our canvas and sweat as our paintbrush. Within those walls, we transcend limitations, pushing our bodies to new heights and unlocking the potential within. Each drop of perspiration is a testament to our dedication, each repetition a step closer to our aspirations. In the gym, we find camaraderie in shared struggles and triumphs, fostering a community bonded by a mutual pursuit of strength, endurance, and vitality. It's a sanctuary where self-improvement takes precedence, where goals are set and surpassed, and where the mind finds solace in the rhythm of movement. Beyond physical transformation, the gym cultivates discipline, resilience, and mental fortitude—qualities that extend far beyond the weights and into every facet of life. In this temple of self-betterment, we forge not only muscles of iron but also characters of steel, embodying the ethos of relentless progress and unwavering determination.
                </p>
            </div>

            <div className="flex gap-12 justify-center mt-10 ">
                <button className=" rounded-full text-white font-bold bg-gradient-to-r from-black from-5% to-red-400 p-4 text-md cursor-pointer z-10 transition-all duration-200">Subscribe Here</button>
                <button className=" rounded-full text-white font-bold bg-gradient-to-r from-black from-5% to-red-400 p-4 text-md cursor-pointer z-10 transition-all duration-200">Learn More</button>
            </div>
            </div>
        </div>
    )
}

