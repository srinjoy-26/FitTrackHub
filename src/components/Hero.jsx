
// import image from "../assets/bg-image.avif"

export default function Hero() {

    return(
        <div id="hero-div" className="p-4 pb-6">
            
        {/* <img src={image} className="w-full opacity-60 absolute  z-1"/> */}
            <div >
            <div className="relative text-center" id="paradiv" >
                <h1 className="text-4xl leading-tight font-bold sm:text-5xl md:text-6xl text-black ">Your Fitness Journey Starts Here</h1>
                <p className="mt-10 max-w-4xl font-bold font-2xl text-lg text-black sm:text-xl mx-auto">
                "Fitness is not about being better than someone else. It's about being better than you used to be."</p>
                <p className="text-black text-lg font-semibold">- Khloe Kardashian</p>
            </div>

            {/* <div className="flex gap-12 justify-center  mt-10 ">
                <button className=" rounded-full text-white font-semibold bg-blue-600 py-3 px-4 text-sm cursor-pointer z-10 transition-all duration-500 hover:scale-110">Subscribe</button>
                <button className=" rounded-full text-white font-semibold bg-blue-600 p-2 px-4 text-sm cursor-pointer z-10 transition-all duration-500 hover:scale-110">Learn More</button>
            </div> */}
            </div>
        </div>
    )
}

