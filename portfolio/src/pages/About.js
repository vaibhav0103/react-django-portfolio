import React from 'react';
import Featured from '../components/About/Featured';
import Grid from '@material-ui/core/Grid';
import Details from '../components/About/Details';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useAboutStyles } from './styles';

const About = () => {
    const classes = useAboutStyles();
    return (
        <main className="about">
            <section className="intro">
                <Grid container spacing={2} justify="center" alignItems="center" >
                    <Details />
                </Grid>
            </section>
            <section className="featured">
                <Typography variant="h3" gutterBottom align="center" className={classes.heading}>
                    Projects
                </Typography>
                <Featured />
            </section>
            <section className="resume">
                <Typography variant="h3" gutterBottom align="center" className={classes.heading}>
                    Resume
                </Typography>
                <Typography variant="body1" gutterBottom align="center">
                    You can download my resume by clicking on the buttton below.
                </Typography>
                <Link className="resume__Button2" to="/myAvatar.png" style={{ textDecoration: 'none' }} target="_blank" download><Button variant="contained">My Resume </Button></Link>
            </section>
        </main>
    )
}

export default About    
