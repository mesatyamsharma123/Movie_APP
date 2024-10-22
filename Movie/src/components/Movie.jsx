import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import Pagingntion from './Pagingntion';

function Movie({handleWatchList,delWatchList,watchList}) {

  const [page,setPage]=useState(1);

  const next=()=>{
    setPage(page+1)

  }

  const prev=()=>{
    if(page===1){
      setPage(1)
    }
else{
  setPage(page-1)
}
  
  }

  const  [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=1b869f8a6a5ad74b603366d1e35fddc3&language=en-US&page=${page}`
    )
    .then((response) => {
      setMovies(response.data.results) // Save the movies in state
    })
    .catch((error) => {
      console.error('Error fetching movies:', error);
    });
  }, [page]);

  return (
    <div className='p-5'>
      <div className='text-2xl m-5 text-center'>Trending Movies</div>
      <div className='flex flex-wrap justify-center gap-8'>
        {movies.map((m) => {
        return <Card key={m.id} object={m} handleWatchList={handleWatchList} watchList={watchList} delWatchList={delWatchList} poster_path={m.poster_path} name={m.original_title}  next={next} prev={prev}/>
        })}
      </div>
   
      <Pagingntion next={next} page={page} prev={prev}/>
    </div>
  )
}

export default Movie
