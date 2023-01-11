import React, { useState } from 'react'
import { BsFillCaretDownFill, BsFillCaretUpFill, BsFillMoonStarsFill } from 'react-icons/bs';

const Navbar = () => {
    // const [isOpen, setIsOpen] = useState(false);
    // const handleClick = () => setIsOpen (!isOpen)

    const [darkMode, setDarkMode] = useState(false)

    const [btnState, setBtnState] = useState(false)

    const handleClick=()=>{
        setBtnState(!btnState);
    }

  return (
    <main className={ darkMode ? "dark" : "" }>
    <nav className='p-5 bg-gradient-to-r from-green-400 to-purple-700 shadow md:flex md:items-center md:justify-between rounded-md'>
        <div className='flex justify-between items-center'>
            <span className='text-2xl cursor-pointer'>
                <h1>Reggie and Dro</h1>
            </span>

            <span className='text-3xl cursor-pointer md:hidden block'>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} />
                <BsFillCaretDownFill onClick={handleClick}/>
                {btnState ? (
                    <div>
                        <ul className='md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-gradient-to-r from-green-400 to-purple-700 rounded-lg w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 top-[-400] transition-all ease-in duration-500'>
                            <li className='mx-4 my-6 md:my-0'>
                                <a href="/" className='text-xl cursor-pointer'>Home</a>
                            </li>

                            <li className='mx-4 my-6 md:my-0'>
                                <a href="#" className='text-xl cursor-pointer'>Gear</a>
                            </li>

                            <li className='mx-4 my-6 md:my-0'>
                                <a href="/smoke" className='text-xl cursor-pointer'>Smoke</a>
                            </li>

                            <li className='mx-4 my-6 md:my-0'>
                                <a href="/about" className='text-xl cursor-pointer'>How is it legal</a>
                            </li>
        </ul>
                    </div>
                    

                ):null}
            
            </span>
        </div>

        <ul className='md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-transparent w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400] transition-all ease-in duration-500'>
            <li className='mx-4 my-6 md:my-0'>
                <a href="/" className='text-xl hover:text-purple-500 duration-500'>Home</a>
            </li>

            <li className='mx-4 my-6 md:my-0'>
                <a href="#" className='text-xl hover:text-purple-600 duration-500'>Gear</a>
            </li>

            <li className='mx-4 my-6 md:my-0'>
                <a href="/smoke" className='text-xl hover:text-green-400 duration-500'>Smoke</a>
            </li>

            <li className='mx-4 my-6 md:my-0'>
                <a href="/about" className='text-xl hover:text-green-500 duration-500'>How is it legal</a>
            </li>
        </ul>
    </nav>
</main>
  )
}

export default Navbar