// import image from "../assets/bg-image.avif"
import builder from "../assets/builder.jpg"

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row bg-gradient-to-t from-red-500 to bg-black">
      {/* left section div image*/}
      <div className="flex flex-col justify-center max-w-[30rem] pl-8 text-white mx-4 lg:mx-0 lg:m-40 space-y-8">
        <h1 className="text-3xl lg:text-5xl tracking-widest inline">
          ENERGIZE ME <span className="">.</span>
        </h1>

        <h2 className="text-xl lg:text-2xl tracking-widest">NO PAIN NO GAIN</h2>

        <p className="text-sm lg:text-base">
          Welcome to our gym – your fitness destination! With top-notch
          equipment and expert trainers, we're here to help you crush your
          goals. Join our supportive community today and start your journey to a
          healthier, stronger you!
        </p>

        <button className="bg-gradient-to-r from-green-400 to-blue-500 rounded-full lg:w-36 p-2 lg:p-3 text-white tracking-widest hover:from-pink-500 hover:to-yellow-500 w-full">
          JOIN US NOW
        </button>
      </div>

      {/* right section div image*/}

      <div className="mx-auto mt-6 mb-6 lg:mt-0 lg:mb-0">
        <img src={builder} className="h-[20rem] lg:h-[40rem]"></img>
      </div>
    </div>
  );
}
