"use client"
import Link from "next/link"
import { useState } from "react"
const MobileMenu = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <div>
            <div className="flex flex-col gap-1 md:hidden cursor-pointer " onClick={()=>{setOpen(!isOpen)}}>
                <div className={`top h-1 w-6 bg-[#FF4FD8] rounded-sm ease-in-out duration-700 ${isOpen? "rotate-45 origin-left": ""}`}></div>
                <div className={`top h-1 w-6 bg-[#FF4FD8] rounded-sm ease-in-out duration-700 ${isOpen? "opacity-0": ""}`}></div>
                <div className={`top h-1 w-6 bg-[#FF4FD8] rounded-sm ease-in-out duration-700 ${isOpen? "-rotate-45 origin-left": ""}`}></div>
            </div>
            {isOpen&&(
                <div className="absolute flex flex-col h-[calc(100vh-96px)] top-[96px] left-0 w-full items-center justify-center bg-[#151A29] gap-8 text-base ease-in-out duration-700 md:hidden">
               <Link href="/">Home</Link>
               <Link href="/">Friends</Link>
               <Link href="/">Groups</Link>
               <Link href="/">Stories</Link>
               <Link href="/">Login</Link>
               </div>
            )}
        </div>
    )
}

export default MobileMenu