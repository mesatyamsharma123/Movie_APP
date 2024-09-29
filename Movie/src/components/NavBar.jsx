import React from 'react'
import logo from '../assets/movies-app.png'
function NavBar() {
  return (
    <div className='flex border-[3px] space-x-8 items-center pl-3 py-4'>
<img className='w-[50px]' src= {logo} alt=""/>
<a className='text-blue-400 text-3xl font-bold' href="/">Movie</a>
<a className='text-blue-400 text-3xl font-bold' href="/watchlist">WatchList</a>

    
      
    </div>
  )
}

export default NavBar
