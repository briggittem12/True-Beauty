'use client'
import { useState } from "react"
import { BiCart, BiMenu, BiX, BiSearchAlt2, BiUser } from "react-icons/bi"
type Props = {}

export const Navbar = (props: Props) => {
    const [toggle, setToggle] = useState(false);
    return (
        <header className='bg-white'>
            <nav className='flex justify-between items-center bg-white w-full max-w-full h-24 p-4 fixed z-20'>
                <div><h1 className='font-vidaLoka text-2xl'><a href="#home">Asad Ali</a></h1></div>
                <div className='hidden lg:flex justify-center items-center'>
                    <ul className='hidden lg:flex flex-1 justify-end items-center  gap-x-14'>
                        <li><a href="#products" className='xl:text-xl flex flex-col-reverse justify-center items-center   hover:border-b-2'>Products</a></li>
                        <li><a href="#story" className='xl:text-xl flex flex-col-reverse justify-center items-center   hover:border-b-2'>Story</a></li>
                        <li><a href="#manufacturing" className='xl:text-xl flex flex-col-reverse justify-center items-center   hover:border-b-2'>Manufacturing</a></li>
                        <li><a href="#aboutus" className='xl:text-xl flex flex-col-reverse justify-center items-center   hover:border-b-2'>About Us</a></li>
                        <li><a href="#team" className='xl:text-xl flex flex-col-reverse justify-center items-center   hover:border-b-2'>Team</a></li>
                    </ul>
                </div>

                <div className='hidden lg:flex gap-4'>
                    <BiSearchAlt2 className="cursor-pointer" style={{ fontSize: "20px" }} />
                    <BiCart className="cursor-pointer" style={{ fontSize: "20px" }} />
                    <div className="flex">
                        <BiUser className="cursor-pointer" style={{ fontSize: "20px" }} />
                        <button>Log out</button>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className="relative lg:hidden w-[35px] h-[35px] flex justify-center items-center">
                    <BiMenu className="cursor-pointer"
                        onClick={() => setToggle(prev => !prev)} style={{ fontSize: "20px" }} />

                    {
                        toggle && (

                            <div className='fixed flex flex-col items-end top-0 right-0 bottom-0 left-0 w-full z-40 pt-8 bg-[#F9FBFE] px-4'>
                                <BiX className="cursor-pointer" onClick={() => setToggle(prev => !prev)} style={{ fontSize: "30px" }} />
                                <ul className='flex flex-wrap m-0 p-0 w-full h-full items-center justify-center flex-col'>
                                    <li onClick={() => setToggle(prev => !prev)} className="m-4 "><a href="#products" className='text-xl'>Products</a></li>
                                    <li onClick={() => setToggle(prev => !prev)} className="m-4 "><a href="#story" className='text-xl'>Story</a></li>
                                    <li onClick={() => setToggle(prev => !prev)} className="m-4 "><a href="#manufacturing" className='text-xl'>Manufacturing</a></li>
                                    <li onClick={() => setToggle(prev => !prev)} className="m-4 "><a href="#aboutus" className='text-xl'>About Us</a></li>
                                    <li onClick={() => setToggle(prev => !prev)} className="m-4 "><a href="#team" className='text-xl'>Team</a></li>
                                </ul>
                            </div>
                        )
                    }
                </div>
            </nav>
        </header>
    )
}