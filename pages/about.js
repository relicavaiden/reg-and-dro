  import React, { useState } from 'react'
  import { BsFillMoonStarsFill } from 'react-icons/bs'
  import { BsSun } from 'react-icons/bs'

const about = () => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <main className={darkMode ? "dark" : ""}>
      <section className=' min-h-screen dark:bg-gray-800'>
          <nav className='lg:text-4xl md:text-2xl sm:text-lg sm:text-center sm:px-10 flex justify-evenly md:mx-auto bg-gradient-to-r from-green-500 to-purple-900 rounded-lg'>
            {/* <h1 className='text-2xl bg-gradient-to-r from-green-500 to-green-900 rounded-md text-purple-600'>Reggie and Dro</h1> */}
            <ul className='flex items-center'>
              <li className=' text-purple-700 px-4 py-2 hover:animate-pulse hover:brightness-200 font-extrabold'><a href="/">Reggie and Dro</a></li>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-white'/>
              </li>
              <li><a className='text-purple-600 px-4 py-2 hover:animate-pulse hover:brightness-200 font-extrabold' href="#">Gear</a></li>
              <li><a className='text-green-600 px-4 py-2 hover:animate-pulse hover:brightness-200 font-extrabold' href="/smoke">Smoke</a></li>
              <li><a className='text-green-700 px-4 py-2 hover:animate-pulse hover:brightness-200 font-extrabold' href='/about'>How it is legal?</a></li>
            </ul>
          </nav>
      
    <div>
        <h1 className='text-4xl text-center text-emerald-400 py-2'>How is Cannabis legal in Texas?</h1>
        <hr className='text-4xl shadow-2xl py-2'/>
      

        <h2 className='text-2xl text-center text-green-500 py-2'>Hemp and Marijuana are the same plant: Cannabis Sativa L</h2>

        <p className=' text-center py-4 lg:py16 lg:px-80 md:py-8 md:px-40 dark:text-gray-300'>A botanist only Cannabis. The difference between Hemp and Marijuana is a distinction based on concentration by weight of one molecule; Delta-9 THC. This is true federally in the US and in the state of Texas</p>

        <ul className=' text-center px-10 pb-8 list-inside leading-10 dark:text-amber-200'>
            <li><BsSun className='inline-block hover:text-amber-500 text-4xl pr-2' />Marijuana is Cannabis with over 0.3% Delta-9 THC</li>
            <li><BsSun className='inline-block hover:text-amber-500 text-4xl pr-2' />Hemp is Cannabis with 0.3% Delta-9 THC or less</li>
        </ul>

        <p className='text-center lg:px-80 md:px-40 pb-6 px-10 dark:text-gray-300'>If cannabis has 0.3% Delta-9 THC or less concentration by weight, then you can buy, possess, transport and consume any amount of it</p>

        <h2 className='text-center lg:px-80 md:px-40 pb-6 px-10 dark:text-gray-300'>Legally Operating under current US farm bill, USDA final rule, Texas State Statue and DSHS Consumable hemp program</h2>

        <ul className='text-center px-10 list-inside leading-10 dark:text-amber-200'>
            <li> <BsSun className='inline-block hover:text-amber-500 text-4xl pr-2' /> DSHS Consumable Hemp Regisration Manufacturing License #690</li>
            <li> <BsSun className='inline-block hover:text-amber-500 text-4xl pr-2' />DSHS Retail Hemp Registration License #4451</li>
        </ul>
    </div>
    </section>
    <section>
      <h2>Conctant Us</h2>
    </section>
    </main>
  )
}

export default about