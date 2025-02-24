
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaWifi, FaPhone, FaLightbulb, FaTv, FaPeopleGroup, FaFootball, FaBasketball, FaBook, FaWhmcs, FaCode, FaRightFromBracket, FaHouse } from "react-icons/fa6";
export default function Box({ }) {
    const [balance, setBalance] = useState < string > ('0.00');
    const [username, setUsername] = useState < string > ('User');
    const router = useRouter()
    useEffect(() => {
        const user = localStorage.getItem('username');
        const bal = localStorage.getItem('balance');
        setBalance(bal);
        setUsername(user);

    }, []);
    const logout = async () => {
        localStorage.removeItem('token')
        router.push('/')
    }
    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: 200 }
                }
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0 }}
                className='w-4/5 sm:w-1/6 sm:hidden h-auto sm:h-auto sm:min-h-screen sm:top-0 sm:rounded-none bg-slate-900 absolute sm:relative top-12 flex flex-col border-r-2 border-grey rounded-r-md items-center' >

                <div className='w-full h-16 py-2 my-4 flex  border-b ' >
                    <img
                        src='/emoticon.png'
                        width={40}
                        height={40}
                        alt='Image'
                        className='rounded-full mx-4' />
                    <div className='flex flex-col justify-around' >
                        <p className='font-inter text-slate-200' > {username || "user"}</p>
                        < p className='font-inter text-green-500 text-sm' > Balance: &#8358; {balance || 0.00} </p>

                    </div>
                </div>

                < Link className='sm:border-0 w-full h-auto mb-2 hover:bg-white rounded-xl hover:text-black flex items-center  px-3 py-2 font-mono text-white text-md' href="/home" >
                    <div className='iconbox px-3' >
                        <FaHouse size={20} color='white' />
                    </div>
                    < div className="font-inter" > Dashboard
                    </div>
                </Link>
                < Link className=' sm:border-0 w-full h-auto mb-2 hover:bg-white rounded-xl hover:text-black flex items-center  px-3 py-2 font-mono text-white text-md' href="/airtime" >
                    <div className='iconbox px-3' >
                        <FaPhone size={20} color='white' />
                    </div>
                    < div className="font-inter" > Buy Airtime
                    </div>
                </Link>

                < Link className=' sm:border-0 w-full h-auto mb-2 hover:bg-white rounded-xl hover:text-black flex items-center  px-3 py-2 font-mono text-white text-md' href="/data" >
                    <div className='iconbox px-3' >
                        <FaWifi size={20} color='white' />
                    </div>
                    < div className="font-inter " > Buy Data
                    </div>
                </Link>

                < Link className=' sm:border-0 w-full h-auto mb-2 hover:bg-white rounded-xl hover:text-black flex items-center px-3 py-2 font-mono text-white text-md' href="/electric" >
                    <div className='iconbox px-3' >
                        <FaLightbulb size={20} color='white' />
                    </div>
                    < div className="font-inter" > Electricity
                    </div>
                </Link>

                < Link className=' sm:border-0 w-full h-auto mb-2 hover:bg-white rounded-xl hover:text-black flex items-center  px-3 py-2 font-mono text-white text-md' href="/" >
                    <div className='iconbox px-3' >
                        <FaBook size={20} color='white' />
                    </div>
                    < div className="font-inter" > Result Checker
                    </div>
                </Link>

                < Link className=' sm:border-0 w-full h-auto mb-2 hover:bg-white rounded-xl hover:text-black flex items-center px-3 py-2 font-mono text-white text-md' href="/cable" >
                    <div className='iconbox px-3' >
                        <FaTv size={20} color='white' />
                    </div>
                    < div className="font-inter " > Cable Subscription
                    </div>
                </Link>

                < Link className=' sm:border-0 w-full h-auto mb-10 hover:bg-white rounded-xl hover:text-black flex items-center  px-3 py-2 font-mono text-white text-md' href="/" >
                    <div className='iconbox px-3' >
                        <FaLightbulb size={20} color='white' />
                    </div>
                    < div className="font-inter" > Electricity
                    </div>
                </Link>
                < Link className=' sm:border-0 w-full h-auto mb-2 hover:bg-white rounded-xl hover:text-black flex items-center  px-3 py-2 font-mono text-white text-md' href="/transactpin" >
                    <div className='iconbox px-3' >
                        <FaBasketball size={20} color='white' />
                    </div>
                    < div className="font-inter" > Change Transaction Pin
                    </div>
                </Link>

                < div className={` sm:border-0 w-full h-auto mb-2 hover:bg-red-700 rounded-xl hover:text-white flex items-center  px-3 py-2 font-mono text-red-700 text-md`} onClick={() => logout()}>
                    <div className='iconbox px-3' >
                        <FaRightFromBracket size={20} color='white' />
                    </div>
                    < div className="font-inter font-bold" > Log out
                    </div>
                </div>

            </motion.div>
        </>
    )
}
