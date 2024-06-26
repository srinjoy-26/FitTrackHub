import { FaEyeSlash } from "react-icons/fa6";
import {account} from '../lib/appwrite'
import { useState } from "react";
import { useNavigate , Link} from "react-router-dom";
import Loader from "../components/Loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () =>{
  let [isTrue , isTrueup] = useState(true)
  let [inptype , setinptype] = useState('password')
  let [name , setname] = useState('')
  let [email , setemail] = useState('')
  let [password , setpassword] = useState('')
  let [showloader , setloader] = useState(false)

  const Navigate = useNavigate()

  const togfun = () =>{
    inptype == 'password'? setinptype('text') : setinptype('password')
  }

  const notify = () => toast.error('please fill all the fields', {
    position: "top-center",
    autoClose: 1500,
    theme: "light",
});

const Signupfail = () => toast.error('Some error occured! please try again.', {
  position: "top-center",
  autoClose: 1500,
  theme: "light",
});

  const handleSubmit= (e) =>{
     e.preventDefault()
     if(name == '' || email == '' || password == ''){
      notify()
     }else{
      Signup();
     }
  }

  const Signup = async() =>{
   try{
    setloader(true)
    var x = await account.create('unique()' , email , password , name)
    Navigate('/home')
   }catch(e){
    console.log(e)
    setloader(false)
    Signupfail()
   }
  }

  return(
    <>
    <ToastContainer transition: Bounce/>
    
    <div className="SignUp bg-black h-screen flex justify-center items-center px-5 relative" >

    { 
       showloader ? <Loader/> : 
         <>
         <div id="logo" className="absolute w-16 h-16 top-1 left-1"></div>

         <form className="bg-transparent border-2 border-red-400 flex flex-col text-center rounded-lg py-5 px-8 gap-4 w-[20rem] sm:w-[22rem]" onSubmit={handleSubmit}>

        <span className="text-4xl text-red-500 font-bold font-mono">FitTrackHub</span>
        <span className="text-blue-400 text-[18px]">SignUp</span>

        
          <input type="text" placeholder="enter username" className="block  py-2 w-full placeholder:text-sm px-2  rounded-md focus:outline-none bg-slate-700 text-white"  onChange={(e)=>{setname(e.target.value)}}/>

          <input type="email" placeholder="enter email"
          className="block  py-2 placeholder:text-sm px-2 shadow-md rounded-md focus:outline-none bg-slate-700 text-white w-full" onChange={(e)=>{setemail(e.target.value)}}/>

         <div className="flex items-center  shadow-md bg-slate-700 rounded-md w-full">
          <input  type={inptype} placeholder="enter password"
          className="block  py-2 placeholder:text-sm px-2 focus:outline-none rounded-md bg-slate-700 text-slate-300 w-[70%]" 
          onChange={(event) => {event.target.value == ''? isTrueup(true) : isTrueup(false) ; setpassword(event.target.value)} }/>
          <FaEyeSlash className= {`text-blue-400 text-xl mx-auto ${isTrue && 'hidden'}`} onClick={togfun}/>
         </div>

        <button className="border border-blue-500 bg-blue-500 block py-1 rounded-md text-white" type="submit" >Sign up</button>
       

        <p className="text-blue-400 text-[12px] ">Already have an account? <Link to='/login'><span className="font-semibold">Login</span></Link></p>
      </form>
      </>}
    </div>
    </>
  )
}

export default SignUp
