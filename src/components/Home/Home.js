import React, { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BiUpArrow } from 'react-icons/bi';

const Home = () => {
    const [value, setValue] = useState(false)
    console.log(value);
    return (
        <div className='mt-5'>
            <div className='bg-slate-900 w-full h-full flex justify-start items-center '>
                <div className='flex justify-start items-center p-2 hover:bg-slate-600 hover:rounded-l-2xl'>
                    <h1 className='text-white mr-3 ml-3 bg-red-500 p-2 rounded-full'><AiFillHome /></h1>
                    {/* <button className='text-white px-2' onMouseEnter={() => setValue(true)} onMouseLeave={() => setValue(false)}>Home</button> */}
                    <button className='text-white px-2'>Home</button>
                </div>
                <div className='ml-5 bg-slate-700 p-3 my-5 rounded-xl'>
                    <div className='bg-red-400 rounded-2xl my-5 flex'>
                        <button className=' text-white w-full  p-2 text-xl '>User  </button>
                        <h1 className='flex justify-center items-center text-white'><BiUpArrow className='m-3' /></h1>
                    </div>
                    <div className='bg-red-400 rounded-2xl my-5 flex'>
                        <button className=' text-white w-full  p-2 text-xl '>View  </button>
                        <h1 className='flex justify-center items-center text-white'><BiUpArrow className='m-3' /></h1>
                    </div>
                    <h1 className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ea quam dignissimos veritatis est unde id modi aliquid similique minima, laboriosam deserunt nostrum possimus iure earum eveniet aut ratione! Doloremque?</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;