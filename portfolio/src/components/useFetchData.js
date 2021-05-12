import { useState, useEffect } from 'react';
import serverInstance from '../server.js';
import apiInstance from '../api.js';


const useFetchData = () => {
    // match data state
    const [matchData, setMatchData] = useState(
        {
            homeTeam: "",
            awayTeam: "",
            matchId: "",
            date: '',
            status: ""
            //Status: SCHEDULED | LIVE | IN_PLAY | PAUSED | FINISHED | POSTPONED | SUSPENDED | CANCELED
        }
    )
    // loading
    const [isLoading, setIsLoading] = useState(false);
    // error
    const [isError, setIsError] = useState({ show: false, msg: "" });

    // Calculate Time Left
    const calculateTimeLeft = () => {
        const difference = +new Date(matchData.date) - +new Date();
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    // Getting data from API
    const getMatch = async () => {
        const url = 'teams/81/matches?status=SCHEDULED';
        const res = await apiInstance.get(url)
            .then(response => {
                return response
            }).catch((error) => {
                setIsError({ show: true, msg: error })
            });
        // const matchDate = new Date(res.data.matches[0].utcDate).toString();
        // Save Date to Local Storage to avoid Render
        // localStorage.setItem('match_date', JSON.stringify(matchDate))

        // setmatchData to the data from API
        setMatchData({
            homeTeam: res.data.matches[0].homeTeam.name,
            awayTeam: res.data.matches[0].awayTeam.name,
            matchId: res.data.matches[0].id,
            date: res.data.matches[0].utcDate,
            status: res.data.matches[0].status
        });
    }

    // Check if data already exist for current matchday
    const dbCheck = async () => {
        // set Loading true
        setIsLoading(true)
        await serverInstance.get('api/get-football/')
            .then(async response => {
                // If Data Exists Fetch the Data From database
                if (response.data.message === true) {
                    // set matchdata to the data from db
                    setMatchData({
                        homeTeam: response.data.data[0].home,
                        awayTeam: response.data.data[0].away,
                        matchId: response.data.data[0].matchid,
                        date: response.data.data[0].matchdate,
                        status: response.data.data[0].status
                    });
                    setIsLoading(false)
                }
                // If Not, Create the data 
                if (response.data.message === false) {
                    // Call to football api if no data
                    getMatch()
                    // if (matchData.date) {
                        const dataFootball = {
                            'matchdate': matchData.date,
                            'home': matchData.homeTeam,
                            'away': matchData.awayTeam,
                            'matchid': matchData.matchId,
                            'status': matchData.status,
                        }
                    // }
                    // Send data from api to server to save in database
                    await serverInstance.post('api/create-football/', dataFootball)
                        .then(resp => {
                            if (resp.data.message===true){
                                setIsLoading(false)
                            } 
                        })
                }
            })
    }

    // data
    useEffect(() => {
        dbCheck()
    }, [matchData.date])

    // Timer
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    return { isLoading, isError, matchData, timeLeft }
}

export default useFetchData
