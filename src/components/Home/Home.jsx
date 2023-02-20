import React, { useState, useEffect } from 'react'
import movieApi from '/src/api/MovieApi'
import { APIKey } from '/src/api/MovieApiKey'
import { useDispatch } from 'react-redux'
import { addMovie } from '/src/store/Reducer'
import MovieListing from '../MovieListing/MovieListing'
import './Home.scss'

function Home() {
  
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  console.log(search)

  useEffect(() => {
    const fetchMovies = async () => {
        const searchKey = search ? search : "Thor";
        const res = await movieApi.get(`?apikey=${APIKey}&s=${searchKey}`);

        setTimeout(() => {
            dispatch(addMovie(res.data.Search))
        }, 500);
    }
    fetchMovies();
  }, [search]);

  return (
    <div>
        <h3 style={{margin: "1rem 0"}}>Movies & Series</h3>
        <input type="text" placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)}/>
        <MovieListing />
    </div>
  )
}

export default Home