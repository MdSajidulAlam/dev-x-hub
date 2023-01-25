import React, { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BiUpArrow } from 'react-icons/bi';

const Home = () => {
    const [user, setUser] = useState(false)
    const [view, setView] = useState(false)
    const [home, setHome] = useState(false)
    return (
        <div className='mt-5'>
            <div className='bg-slate-900 grid grid-cols-10'>
                <div className='col-span-2 mt-8'>
                    <div className=' p-2   h-[100vh]'>
                        <div className='hover:bg-slate-600 hover:rounded-l-2xl flex justify-center items-center'>
                            <h1 className='text-white mr-3 ml-3 bg-red-500 p-2 rounded-full'><AiFillHome /></h1>
                            <button onMouseEnter={() => setHome(true)} onMouseLeave={() => setHome(false)} className={`hover:${() => setHome(!home)} text-white px-2`}>Home</button>
                        </div>
                    </div>
                </div>
                <div className={home == true ? "col-span-8" : "hidden"}>
                    <div className='ml-5 bg-slate-700 p-3 my-5 rounded-xl'>
                        <div className=' my-5 flex flex-col'>
                            <div className=' '>
                                <button onClick={() => setUser(!user)} className={user == true ? "rounded-t-2xl bg-red-400 w-full text-white text-xl" : " text-white w-full  p-2 text-xl flex justify-center bg-red-400 rounded-2xl"}>User  <h1 className='flex justify-center items-center text-white'><BiUpArrow className={user == true ? "opacity-0" : "m-3 w-9/10 mr-auto"} /></h1></button>

                            </div>
                            <h1 className={user == true ? 'h-[200px]  bg-white text-black transition-all duration-500 ease-in-out' : "h-[0px] opacity-0"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ea quam dignissimos veritatis est unde id modi aliquid similique minima, laboriosam deserunt nostrum possimus iure earum eveniet aut ratione! Doloremque?</h1>
                        </div>
                        <div className=' my-5 flex flex-col'>
                            <div className=' '>
                                <button onClick={() => setView(!view)} className={view == true ? "rounded-t-2xl bg-red-400 w-full text-white text-xl" : " text-white w-full  p-2 text-xl flex justify-center bg-red-400 rounded-2xl"}>View <h1 className=' text-white'><BiUpArrow className={view == true ? "opacity-0" : "w-9/10 my-auto"} /></h1></button>

                            </div>
                            <div className={view == true ? 'h-[200px]  bg-white text-black transition-all duration-500 ease-in-out rounded-b-xl' : "h-[0px] opacity-0"}>
                                <h1 >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ea quam dignissimos veritatis est unde id modi aliquid similique minima, laboriosam deserunt nostrum possimus iure earum eveniet aut ratione! Doloremque?</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;