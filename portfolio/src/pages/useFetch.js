import { useState, useEffect } from 'react';
import tvdata from '../tvdata.js';
import axios from 'axios';
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;




const useFetch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState({show: false, msg:""});
    const [shows, setShows]  = useState([]);

    const fetchMovies = async () =>{

        await Promise.all(tvdata.map(data => {
            setIsLoading(true)
            const param = data.imdbId
            const url = `${API_ENDPOINT}&i=${param}`
            return axios.get(url)
        }
        )).then((result)=>{
            const showsData = result.map(res=> res.data)
            setShows(showsData)
            setIsLoading(false)
        }).catch((errors)=>{
            setIsError({show: true, msg:errors})
            console.log(errors)
        })
        
    }
    
    useEffect(() => {
        fetchMovies();
    },[])
    return {isError, isLoading, shows}
}

export default useFetch