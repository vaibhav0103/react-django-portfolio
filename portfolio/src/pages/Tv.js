import React from 'react';
import { CircularProgress, Container, Grid, Paper, Typography } from '@material-ui/core';
import useFetch from './useFetch';
import TvIcon from '@material-ui/icons/Tv';
import { useMovieStyles } from './styles.js';

const Tv = () => {
    const classes = useMovieStyles();
    const {isError, isLoading, list} = useFetch("tv")

    // Check Error
    if(isError.show){
        return (
            <div className="loading">
                <p>The requested data is unavailable. Try after sometime.</p>
            </div>
        )
    }

    // Check Loading
    if(isLoading){
        return (
            <div className="loading">
                <CircularProgress />
            </div>
        )
    }

    return (

        <Container>
            <Typography variant="h2" align="center" gutterBottom>TV Shows <TvIcon fontSize="large"/> </Typography>

            {list.map(show =>{ 
                return (
                    
                    <Grid container key={show.imdbID} direction="row" justify="center" alignItems="stretch" spacing={2}>
                            {show.imdbId}
                            <Grid container item md={4} justify="center">
                                <Paper >
                                <img src={show.Poster} alt={show.Title} className={classes.image}/>
                                </Paper>
                            </Grid>
                            <Grid container item md={8}>
                                <Paper>
                                    <Typography variant="h5" className={classes.upper}>{show.Title}</Typography>
                                    <Typography variant="subtitle1" className={classes.capital}><b>Year:</b> {show.Year}</Typography>
                                    <Typography variant="body1" className={classes.capital}><b>Genre: </b> {show.Genre}</Typography>
                                    <Typography variant="body1" className={classes.capital}><b>Cast: </b>{show.Actors}</Typography>
                                    <Typography variant="body1" className={classes.capital}><b>IMDB Rating: </b>{show.imdbRating}</Typography>
                                    <Typography variant="body1" ><b>Plot: </b>{show.Plot}</Typography>
                                </Paper>
                            </Grid>
                    
                    </Grid>
                )
            })}
        </Container>
    )
}

export default Tv
