
// import image from "../assets/bg-image.avif"

export default function Hero() {

    return(
        <div id="hero-div" className="p-4 pb-6">
            
        {/* <img src={image} className="w-full opacity-60 absolute  z-1"/> */}
            <div >
            <div className="relative text-center" id="paradiv" >
                <h1 className="text-4xl leading-tight font-bold sm:text-5xl md:text-6xl text-black ">Your Fitness Journey Starts Here</h1>
                <p className="mt-10 max-w-4xl font-bold font-2xl text-lg text-black sm:text-xl mx-auto">Embarking on a fitness journey is akin to sculpting a masterpiece, with the gym as our canvas and sweat as our paintbrush. Within those walls, we transcend limitations, pushing our bodies to new heights and unlocking the potential within. Each drop of perspiration is a testament to our dedication, each repetition a step closer to our aspirations. In the gym, we find camaraderie in shared struggles and triumphs, fostering a community bonded by a mutual pursuit of strength, endurance, and vitality. 
                </p>
            </div>

            <div className="flex gap-12 justify-center  mt-10 ">
                <button className=" rounded-full text-white font-semibold bg-blue-600 py-3 px-4 text-sm cursor-pointer z-10 transition-all duration-500 hover:scale-110">Subscribe</button>
                <button className=" rounded-full text-white font-semibold bg-blue-600 p-2 px-4 text-sm cursor-pointer z-10 transition-all duration-500 hover:scale-110">Learn More</button>
            </div>
            </div>
        </div>
    )
}

