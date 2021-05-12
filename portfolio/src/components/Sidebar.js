import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress'
import { useStyles } from './About/styles';
import {Link} from 'react-router-dom';
import useFetchData from './useFetchData';


const Sidebar = () => {
    // Get Values from Custom Hook useFetchData
    const {isLoading, isError, matchData, timeLeft} = useFetchData()
    const classes = useStyles();

    // Create Time component
    const timerComponents = Object.keys(timeLeft).map((interval,index) => {
        if (!timeLeft[interval]) {
        return (null);
        }

        return (
        <span key={index}>
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
                    <Typography className={classes.match}>{new Date(matchData.date).toString()}</Typography>
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
