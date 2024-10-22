import React, { useEffect, useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./components/Movie";
import WatchList from "./components/WatchList";
import Banner from "./components/Banner";
function App() {


  const [watchList,setWatchList]=useState([]);

const handleWatchList=(object)=>{
  let newWatchList=[...watchList,object];
  localStorage.setItem('movieApp' ,JSON.stringify(newWatchList))
  setWatchList(newWatchList);
  console.log(newWatchList);
}

const delWatchList=(object)=>{

  const filterWatch=watchList.filter((movie)=>{
    return movie.id!=object.id;
   
  })
  setWatchList(filterWatch);
  console.log(filterWatch)
}
useEffect(()=>{
  let moviesFromLocal=localStorage.getItem('movieApp')
  if(!moviesFromLocal){
    return 
  }
  setWatchList(JSON.parse(moviesFromLocal))
},[])


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
              <Banner /> <Movie handleWatchList={handleWatchList} delWatchList={delWatchList} watchList={watchList}/>
              </>
            }
          ></Route>
          <Route path="/watchlist" element={<WatchList  watchList={watchList} setWatchList={setWatchList} delWatchList={delWatchList}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
