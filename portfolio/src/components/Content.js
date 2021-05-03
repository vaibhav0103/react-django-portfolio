import React from 'react';
import { Grid, Paper, } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import clubImage from '../images/fc_barcelona.png';
import messiImage from '../images/Messi-310x415.jpg';
import eminemImage from '../images/Eminem_400x400.jpg';
import { useContentStyles } from './styles';
// import Image from 'material-ui-image'


const Content = () => {
    const classes = useContentStyles();
    return (
        
        <Grid container item md={8} xs={12} spacing={2} direction="column" justify="center" alignItems="center" >
            <Grid item >
                <Paper variant="outlined" className={classes.content}>
                    <Typography variant="h4" gutterBottom align="center">
                        Favourite Football Club
                    </Typography>
                    <div className={classes.image}>
                        <img src={clubImage} alt="Favourite Football Club" className={classes.img}/>
                    </div>
                    <Typography variant="h5" gutterBottom align="center">
                        FC Barcelona
                    </Typography>
                </Paper> 
            </Grid>
            <Grid item >
                <Paper variant="outlined" className={classes.content}>
                    <Typography variant="h4" gutterBottom align="center">
                        Favourite Football Player
                    </Typography>
                    <div className={classes.image}>
                        <img src={messiImage} alt="Favourite Football Club" className={classes.img}/>
                    </div>
                    <Typography variant="h5" gutterBottom align="center">
                        Lionel Messi
                    </Typography>
                </Paper> 
            </Grid>

            <Grid item >
                <Paper variant="outlined" className={classes.content}>
                    <Typography variant="h4" gutterBottom align="center">
                        Favourite Artist
                    </Typography>
                    <div className={classes.image}>
                        <img src={eminemImage} alt="Favourite Football Club" className={classes.img}/>
                    </div>
                    <Typography variant="h5" gutterBottom align="center">
                        Eminem
                    </Typography>
                </Paper> 
            </Grid>
        </Grid>
        
    )
}

export default Content
