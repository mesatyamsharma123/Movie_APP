import React from 'react'

import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Movie from './components/Movie'
import WatchList from './components/WatchList'
import Banner from './components/Banner'
function App() {


  return (
    <>
    <BrowserRouter>
    <NavBar/>
<Routes>
<Route path="/" element={<> <Banner/> <Movie/></>}></Route>
<Route path="/watchlist" element={<WatchList/>}></Route>

</Routes>

    </BrowserRouter>
    

    </>
  )
}

export default App
