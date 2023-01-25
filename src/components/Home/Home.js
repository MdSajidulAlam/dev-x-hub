import React, { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BiUpArrow, BiUserCircle } from 'react-icons/bi';

const Home = () => {
    const [user, setUser] = useState(false)
    const [view, setView] = useState(false)
    const [home, setHome] = useState(false)
    const [userManu, setUserManu] = useState(false)


    const handleView = () => {
        if (user == true) {
            setUser(false)
            setTimeout(() => {
                setView(!view)
            }, 500)

        }
        else {
            setView(!view)
        }
        if (userManu == false) {
            setUser(!user)
        }
    }
    console.log(user, "user");
    const handleUser = () => {
        if (view == true) {
            setView(false)
            setTimeout(() => {
                setUser(!user)
            }, 500)

        }
        else {
            setUser(!user)
        }
    }

    const handleUserManu = () => {
        setUserManu(!userManu)
        setUser(!user)

    }



    return (
        <div className=''>
            <div className='bg-slate-900 flex'>


                <div onMouseEnter={() => setHome(true)} onMouseLeave={() => setHome(false)} className={userManu == true ? "bg-gray-400 w-[200px] transition-all duration-500 ease-in-out" : "bg-gray-400 w-[60px] hover:w-[200px] transition-all duration-500 ease-in-out"}>
                    <div className='ml-2 mt-2 h-[100vh]'>
                        <div className={home == true || userManu == true ? "bg-slate-600 rounded-l-2xl flex justify-around items-center" : "flex justify-between items-center"}>
                            <h1 className='text-white bg-red-500 p-2 rounded-full'><AiFillHome /></h1>
                            {/* <button className={home == true ? "block text-white transition-all duration-500 ease-in-out" : "hidden"}></button> */}
                            <h1 className={home == true || userManu == true ? "text-white text-xl block z-99" : "hidden "}>Home</h1>
                        </div>
                    </div>
                </div>
                <div className=" w-[80%] ">
                    <div className='flex justify-end items-center mt-3'>
                        <div className='bg-gray-400 flex justify-center items-center rounded-3xl  p-2 btn'>
                            {/* <h1 className='text-white text-2xl mr-3'><BiUserCircle /></h1>
                            <h1 className='text-white text-2xl'>User</h1> */}
                            <button onClick={handleUserManu} className='flex justify-center items-center text-white text-2xl'><BiUserCircle className='mr-2' /> User</button>
                        </div>
                    </div>
                    <div className='ml-5 bg-slate-700 p-3 my-5 rounded-xl flex flex-col'>
                        <div className={user == true ? " my-5 flex flex-col order-last transition-all duration-500 ease-in-out" : "my-5 flex flex-col transition-all duration-500 ease-in-out"}>
                            <div onClick={handleUser} className={user == true ? "bg-red-400 flex justify-between w-full h-[40px] rounded-t-2xl" : "bg-red-400 flex justify-between w-full rounded-2xl h-[40px]"}>

                                <button className={user == true ? " w-[95%] text-white text-xl" : " text-white w-[95%]  p-2 text-xl flex justify-center "}>User  </button>
                                <div className='w-[5%] flex justify-center items-center'>
                                    <BiUpArrow className={user == true ? "rotate-180 transition-all duration-500 ease-in-out text-white" : "   transition-all duration-500 ease-in-out text-white"} />
                                </div>

                            </div>
                            <div className={user == true ? 'h-[200px]  bg-white text-black transition-all duration-500 ease-in-out rounded-b-xl p-3 ' : "h-[0px]  transition-all duration-500 ease-in-out opacity-0"}>
                                <h1 className='text-xl font-bold text-center mt-3'>User Page</h1>
                                <h1 >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ea quam dignissimos veritatis est unde id modi aliquid similique minima, laboriosam deserunt nostrum possimus iure earum eveniet aut ratione! Doloremque?</h1>
                            </div>
                        </div>
                        <div onClick={handleView} className={view == true ? " my-5 flex flex-col order-last transition-all duration-500 ease-in-out" : "my-5 flex flex-col transition-all duration-500 ease-in-out"}>
                            <div className={view == true ? "bg-red-400 flex justify-between w-full rounded-t-2xl h-[40px] " : "bg-red-400 flex justify-between w-full h-[40px] rounded-2xl"}>

                                <button className={view == true ? " w-[95%] text-white text-xl" : " text-white w-[95%]  p-2 text-xl flex justify-center "}>View  </button>
                                <div className='w-[5%] flex justify-center items-center'>
                                    <BiUpArrow className={view == true ? "rotate-180 transition-all duration-500 ease-in-out text-white" : "   transition-all duration-500 ease-in-out text-white"} />
                                </div>

                            </div>
                            <div className={view == true ? 'h-[200px]  bg-white text-black transition-all duration-500 ease-in-out rounded-b-xl p-3 ' : "h-[0px]  transition-all duration-500 ease-in-out opacity-0"}>
                                <h1 className='text-xl font-bold text-center mt-3'>View Page</h1>
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