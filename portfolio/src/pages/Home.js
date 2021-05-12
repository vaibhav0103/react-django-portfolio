import React from 'react';
import Typed from 'react-typed';
import { Avatar, Grid, Typography } from '@material-ui/core';
import avatar from '../images/myAvatar.png';
import { useStyles } from './styles';
import HomeParticle from '../components/HomeParticle'


const Home = () => {
    const classes = useStyles();
    return (
        
        <>
            <HomeParticle />
            <Grid container className={classes.gridContainer} direction="column" justify="center" alignItems="center"> 
                <Grid item>
                    <Avatar alt="Vaibhav Sharma" src={avatar} classes={{root: classes.root }} />
                </Grid>
                <Grid item>
                    <Typography className={classes.title} variant="h4">
                        <Typed strings={["VAIBHAV SHARMA"]} typeSpeed={50} loop />
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography className={classes.subtitle} variant="h5">
                        <Typed
                            strings={['Web Developer', 'React JS', 'Django', 'Python']}
                            typeSpeed={50}
                            backSpeed={60}
                            loop >
                        </Typed>
                    </Typography>
                </Grid>
            </Grid>
        </>
        
    )
}

export default Home
