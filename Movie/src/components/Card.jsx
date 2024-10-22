import React from 'react'

function Card({poster_path,name ,handleWatchList ,object ,delWatchList, watchList}) {

function isContainer(object){

  for(let i=0;i<watchList.length;i++){
if(watchList[i].id==object.id){
  return true;
}

  } 
  return false;
}



  return (

    <div className='h-[40vh] w-[200px]  bg-center bg-cover rounded-xl hover:scale-110 duration-300  hover:cursor-pointer flex flex-col justify-between items-end' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`}}>

{isContainer(object)?( <div onClick={()=>{delWatchList(object)}} className=' flex justify-center m-4 h-8 w-8 items-center rounded-lg bg-gray-900/60'>&#10060;</div> ):( <div onClick={()=>{handleWatchList(object)}} className=' flex justify-center m-4 h-8 w-8 items-center rounded-lg bg-gray-900/60'>&#128525;</div> )}
    
      <div className='text-white text-xl  w-full p-2 text-center bg-gray-900/60 '  >{name}</div>

    </div>
  )
}

export default Card
