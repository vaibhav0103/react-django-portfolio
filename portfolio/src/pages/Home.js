import React from 'react';
import Typed from 'react-typed';
import { Avatar, Grid, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import Particles from 'react-particles-js';
import avatar from '../images/myAvatar.png'

const Home = () => {
    const classes = useStyles();
    return (
        
        <>
            <Particles canvasClassName={classes.particlesJs}
                params={{
                    particles: {
                        number: {
                            value: 120,
                            density: {
                            enable: true,
                            value_area: 1000
                            }
                        },
                        shape: {
                            type: "star",
                        },
                        color: {
                            value: '#FFF'
                        },
                        opacity: {
                            value: 0.6,
                            anim: {
                                enable: true
                            }
                        },
                        size: {
                            value: 6,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 5
                            }
                        },
                        line_linked: {
                            enable: true
                        },
                        move: {
                            speed: 0.2
                        }
                    }
                }} 
            />
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
