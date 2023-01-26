import React, { useEffect, useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BiUserCircle, BiDownArrow } from 'react-icons/bi';

const Home = () => {
    const [user, setUser] = useState(false)
    const [view, setView] = useState(true)
    const [home, setHome] = useState(false)
    const [userManu, setUserManu] = useState(false)
    const [order, setOrder] = useState(false)


    const handleView = () => {

    }
    const handleUser = () => {
        // setView(false)
        // if (user == false && view == false) {

        // }
    }
    const handleUserArrow = () => {
        if (order === true) {
            console.log("inside Clicked")
            setUser(true)
        }
        else if (user === false && view === true) {
            setView(false)
        }
        else if (user === false && view === false) {
            setOrder(true)
        }


    }

    // useEffect(() => {

    //     console.log(user, "User");
    //     console.log(view, "view");
    //     console.log(order, "order");
    // }, [order, view, user])

    const handleUserManu = () => {

        setTimeout(() => {
            setOrder(false)
            setUser(false)

        }, 1000)
        setTimeout(() => {
            setView(false)
        }, 2000)

        setTimeout(() => {
            setView(true)
        }, 3000)

        setTimeout(() => {
            setView(false)
        }, 4000)

        setTimeout(() => {
            setOrder(true)
        }, 5000)
        setTimeout(() => {
            setUser(true)
        }, 6000)
        console.log('clicked');

    }




    return (
        <div className=''>
            {/* ---------------Manu---------- */}
            <div className='flex justify-end items-center bg-[#171D26] '>
                <div className='p-2 btn my-3 mx-5'>
                    <button onClick={handleUserManu} className='flex justify-center items-center text-[#9B0000] text-2xl '><BiUserCircle className='mr-2 text-3xl' /> <span className='text-white'>Demo User</span></button>
                </div>
            </div>
            <div className=' flex'>

                {/* ------------------------ Sidebar-------------------- */}
                <div className="w-[15%] bg-[#171D26] ">
                    <div className='ml-2 mt-2 h-[100vh]'>
                        <div className='flex justify-center items-center my-5 rounded-br-2xl'>
                            <h1 className='text-white text-3xl border-2 border-gray-300  p-2'>DEMO</h1>
                        </div>
                        <div className="bg-[#393E46] rounded-l-2xl flex justify-between items-center w-[80%] ml-auto">

                            <h1 className='text-white bg-[#9B0000] p-2 rounded-full'><AiFillHome /></h1>
                            <h1 className="text-white text-xl  mr-5 ">Home</h1>
                        </div>
                    </div>
                </div>
                <div className=" w-[85%] bg-[#393E46]">

                    <div className='ml-5  p-3 my-5 rounded-xl flex flex-col'>

                        {/* ---------------------- USER------------------------ */}
                        <div className={order === true ? "z-50 order-last my-5 flex flex-col  transition-all duration-1000 ease-in-out " : " my-5 flex flex-col  transition-all duration-1000 ease-in-out"}>
                            <div onClick={handleUser} className={user === true ? "bg-[#9B0000] flex justify-between w-full h-[40px] rounded-t-2xl" : "bg-[#9B0000] flex justify-between w-full h-[40px] rounded-2xl"}>

                                <button className={user === true ? " w-[95%] text-white text-xl " : " text-white w-[95%]  p-2 text-xl flex justify-center "}>User  </button>
                                {user === false && <button onClick={handleUserArrow} className='w-[5%] flex justify-center items-center '>
                                    <BiDownArrow className=" text-white" />
                                </button>}

                            </div>
                            <div className={user === true ? "h-[60vh] visible bg-white text-black  rounded-b-xl transition-all duration-1000 ease-in-out" : "h-[0px] transition-all duration-1000 ease-in-out invisible bg-white text-black  rounded-b-xl"}>
                                <div className='bg-[#FFD9BF] p-1'>
                                    <h1 className='underline'>User Content</h1>
                                </div>
                                <h1 className='text-3xl font-bold text-center mt-3'>User</h1>
                                <h1 className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ea quam dignissimos veritatis est unde id modi aliquid similique minima, laboriosam deserunt nostrum possimus iure earum eveniet aut ratione! Doloremque?</h1>
                            </div>
                        </div>
                        {/* ---------------------------VIEW----------------------- */}
                        <div onClick={handleView} className={order === true ? "order-first my-5 flex flex-col transition-all duration-500 ease-in-out" : " my-5 flex flex-col transition-all duration-500 ease-in-out"}>
                            <div className={view === true ? "bg-[#9B0000] flex justify-between w-full rounded-t-2xl h-[40px] " : "bg-[#9B0000] flex justify-between w-full h-[40px] rounded-2xl"}>

                                <button className={view === true ? " w-[95%] text-white text-xl" : " text-white w-[95%]  p-2 text-xl flex justify-center "}>View  </button>
                                {view === false && <div className='w-[5%] flex justify-center items-center'>
                                    <BiDownArrow className=" text-white  " />
                                </div>}

                            </div>
                            <div className={view === true ? "h-[60vh] bg-white text-black  rounded-b-xl transition-all duration-1000 ease-in-out" : "  h-[0px] transition-all duration-1000 ease-in-out opacity-0 bg-white text-black  rounded-b-xl"} >
                                <div className='bg-[#FFD9BF] p-1'>
                                    <h1 className='underline'>View Content</h1>
                                </div>
                                <h1 className='text-3xl font-bold text-center mt-3'>View</h1>
                                <h1 className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quam suscipit deleniti fugit. Numquam reprehenderit mollitia, nesciunt quae, deleniti ex sit commodi voluptatum temporibus ab earum iure eaque amet soluta impedit dolorem, facilis quas autem neque suscipit aperiam nobis culpa eligendi. Temporibus quisquam hic officia aut, sint reiciendis mollitia maxime?</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;