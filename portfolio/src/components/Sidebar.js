import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress'
import apiInstance from '../api.js';
import { useStyles } from './About/styles';

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
        const res = await apiInstance.get(url);
        
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

    if(isLoading){
        return (
            <div className="sidebar-loading">
                <CircularProgress />
            </div>
        )
    }

    return (
        <Grid container item md={4} xs={12} alignItems="flex-start" justify="center">
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
    )
}

export default Sidebar
