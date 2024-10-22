import React from 'react'

function Pagingntion({next,prev,page}) {
  return (
    <div className='bg-gray-400 p-4 mt-8 flex justify-center'>
    <div onClick={prev} className='px-8' > <i class="fa-solid fa-arrow-left"></i></div>
    <div className='font-bold'>{page}</div>
    <div onClick={next} className='px-8'><i class="fa-solid fa-arrow-right"></i></div>
      
    </div>
  )
}

export default Pagingntion
