import { useState, useEffect } from 'react';
import tvdata from '../tvdata.js';
import movieData from '../movieData.js';
import axios from 'axios';
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;




const useFetch = (type) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState({show: false, msg:""});
    const [list, setList]  = useState([]);
    
    let givenData;
    if(type === "tv"){
        givenData = tvdata
    }
    if(type === "movie"){
        givenData = movieData
    }

    const fetchMovies = async () =>{

        await Promise.all(givenData.map(data => {
            setIsLoading(true)
            const param = data.imdbId
            const url = `${API_ENDPOINT}&i=${param}`
            return axios.get(url)
        }
        )).then((result)=>{
            const listData = result.map(res=> res.data)
            setList(listData)
            setIsLoading(false)
        }).catch((errors)=>{
            setIsError({show: true, msg:errors})
            console.log(errors)
        })
        
    }
    
    useEffect(() => {
        fetchMovies();
    },[])

    return {isError, isLoading, list}
}

export default useFetch