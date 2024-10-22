import React, { useEffect, useState } from "react";
import list from '../Utility/grnre.js'
function WatchList({ watchList,setWatchList,delWatchList }) {
  const [search, setSearch] = useState("");
const [gernreList,setGernreList]=useState(["Al Gernre "]);
 
const [current,setCurrent] = useState('All Genre')
const handleSearch = (e) => {

setSearch(e.target.value);
  };


  const increase=()=>{
const sorted=watchList.sort((a,b)=>{
  return a.vote_average-b.vote_average;
})
setWatchList([...sorted])
  }

  const decrease=()=>{
    const sortedD=watchList.sort((a,b)=>{
      return b.vote_average-a.vote_average;
    })
    setWatchList([...sortedD])
      
  }

  const handleColor=(genre)=>{
setCurrent(genre);

  }


  useEffect(()=>{
    let tem=watchList.map((object)=>{
      return list[[object.genre_ids[0]]]
    })
    tem=new Set(tem)
setGernreList(['All Genre',...tem])

console.log(tem);

  },[watchList])



  return (
    <>
      <div className="flex justify-center flex-wrap m-4">

      {gernreList.map((genre, index) => {
          return (
            <div onClick={()=>handleColor(genre)}
              key={index} // added key
              className={ current==genre? "flex justify-center items-center h-[3rem] w-[9rem] rounded-xl text-white bg-blue-400 mx-4": "flex justify-center items-center h-[3rem] w-[9rem] rounded-xl text-white bg-gray-400 mx-4"}
            >
              {genre}
            </div>
          );
        })}
       
       
      </div>
      <div className="flex justify-center my-4">
        <input onChange={handleSearch} value={search}
          type="text"
          placeholder="Search Movies "
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"
        ></input>
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-900 text-center ">
          <thead className="border-b-2">
            <tr >
              <th>Name</th>
              <th  className='flex justify-center'>
              <div onClick={increase} className='p-2'><i class="fa-solid fa-arrow-up"></i></div>
              <div className='p-2'>Rating</div>
              <div onClick={decrease} className='p-2'><i class="fa-solid fa-arrow-down"></i></div>
              
              </th>
              
              <th className=''>

              <div className='p-2'>Popularity</div>

              </th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchList.filter((object)=>{
if(current=="All Genre"){
  return true;
}
else{
  return list[object.genre_ids[0]]==current;
}
  }).filter((object)=>{
              return object.title.toLowerCase().includes(search.toLocaleLowerCase())
            }).map((object, index) => (
              <tr key={index} className="border-b-2">
                <td className="flex items-center px-6 py-4">
                  <img
                    className="h-[6rem] w-[10rem]"
                    src={`https://image.tmdb.org/t/p/original/${object.poster_path}`}
                    alt={object.title}
                  />
                  <div className="mx-10">{object.title}</div>
                </td>
                <td>{object.vote_average}</td>
                <td>{object.popularity}</td>
                <td>{list[object.genre_ids[0]]}</td>

                <td onClick={()=>{delWatchList(object)}} className="text-red-500 cursor-pointer">Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
