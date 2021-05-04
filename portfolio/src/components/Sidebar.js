import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress'
import apiInstance from '../api.js';
import { useStyles } from './About/styles';
import {Link} from 'react-router-dom';

const Sidebar = () => {

    const [matchData, setMatchData] = useState(
        {
            loading: false,
            homeTeam:"",
            awayTeam:"",
            matchId:"",
            date: '',
            status:"" 
            //Status: SCHEDULED | LIVE | IN_PLAY | PAUSED | FINISHED | POSTPONED | SUSPENDED | CANCELED
        }
    )
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState({show: false, msg:""});

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

    const classes = useStyles();

    // Getting data from API
    const getMatch = async () => {
        setIsLoading(true)
        console.log("Called")
        const url= 'teams/81/matches?status=SCHEDULED';
        const res = await apiInstance.get(url)
            .then(response =>{
                return response
            }).catch((error)=>{
                setIsError({show: true, msg: error})
            });
        const matchDate= new Date(res.data.matches[0].utcDate).toString();
        // Save Date to Local Storage to avoid Render
        localStorage.setItem('match_date', JSON.stringify(matchDate))
        setMatchData({
            homeTeam: res.data.matches[0].homeTeam.name,
            awayTeam: res.data.matches[0].awayTeam.name,
            matchId: res.data.matches[0].id,
            date: matchDate,
            status: res.data.matches[0].status 
        });
        setIsLoading(false)
    }

    // Get Data From API
    useEffect(()=>{
        const local_date = JSON.parse(localStorage.getItem('match_date'));
        // console.log(local_date);
        // console.log(matchData.date)
        if (local_date === matchData.date) {
            console.log("Yes")
        } else{
            console.log("NO")
            getMatch()
        }
    }, [matchData.date]);

    // Timer
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    // Create Time component
    const timerComponents = Object.keys(timeLeft).map((interval) => {
        if (!timeLeft[interval]) {
        return (null);
        }

        return (
        <span>
            {timeLeft[interval]} {interval}{" "}
        </span>
        );
    });

    if(isError.show){
        return (
            <div className="sidebar-error">
                {isError.msg}
            </div>
        )
    }
    if(isLoading){
        return (
            <div className="sidebar-loading">
                Loading...<CircularProgress />
            </div>
        )
    }

    return (
        <>
            <Grid item>
                <Paper elevation={1} className={classes.sidebarAboutBox}>
                    <Typography className={classes.title} variant="h5" gutterBottom>
                    Next FC Barcelona Match
                    </Typography>
                    <Typography className={classes.match}>{matchData.homeTeam} Vs {matchData.awayTeam}</Typography>
                    <Typography className={classes.match}>{matchData.date}</Typography>
                    <Typography component="div" variant="button" className={classes.time}>
                        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
                        {/* {timeLeft} */}
                    </Typography>
                </Paper>
            </Grid>
            <Grid item >
                <Paper elevation={1} className={classes.sidebarTv}>
                    <Typography component="div" variant="button" className={classes.sidebarBtn}>                    
                        <Link to="/tv" className={classes.sidebarTvlink}>TV Shows/Web Series Suggestions</Link>
                    </Typography>
                    <Divider /> 
                    <Typography component="div" variant="button" className={classes.sidebarBtn}>                    
                        <Link to="/movies" className={classes.sidebarTvlink}>Movies Suggestions</Link>
                    </Typography>
                </Paper>
            </Grid>
            
        </>  
    )
}

export default Sidebar
