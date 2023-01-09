import React, { useState } from 'react'
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='relative flex flex-col items-center w-[340px] h-[340px] rounded-lg'>
        <button onClick={() => setIsOpen((prev) => !prev)} className='bg-green-400 p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white'>
            RND
            {!isOpen ? (
                <BsFillCaretDownFill className='h-8' />
                
            ): (
                <BsFillCaretUpFill className='h-8' />
            )}
            {/* can put carrot down and carrot up if necessary */}
            </button>
            <ul>
                <li>
                    Lol
                </li>
            </ul>
    </nav>
  )
}

export default Navbar