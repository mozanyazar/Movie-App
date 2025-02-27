import React from 'react'
import MovieSearch from '../components/MovieSearch'
import Slider from '../components/Slider'
import MoviesCards from '../components/MoviesCards'


const Home = () => {
  return (
    <div className=" max-w-[1240px] mx-auto bg-gray-200 shadow-xl px-5 box-border  shadow-slate-500">
      <MovieSearch />
      <Slider />
      <MoviesCards />
    </div>
  )
}

export default Home
