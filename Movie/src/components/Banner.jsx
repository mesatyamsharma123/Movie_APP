import React from 'react'

function Banner() {
  return (
    <div className='h-[70vh] bg-cover flex items-end'  style={{backgroundImage:`url(https://kneelbeforeblog.s3.eu-west-1.amazonaws.com/wp-content/uploads/2019/04/25033528/AvengersEG2D_banner-Cropped.jpg)`}}>
    <div className='text-2xl text-white text-center w-full bg-gray-900 p-4' >Avenger End Game</div>
    </div>
  )
}

export default Banner
