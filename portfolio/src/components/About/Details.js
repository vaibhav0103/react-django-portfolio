import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useDetailStyles } from './styles';


const Details = () => {
    const classes = useDetailStyles();
    return (
        <Grid item xs={12} md={8}>
            <Typography variant="h3" gutterBottom align="center" className={classes.heading}>
                About Me
            </Typography>
            <Typography variant="body1" gutterBottom className={classes.about}>
                I'm a Web Developer working on React Js, Python 3.x, and Django for Web Development.<br/><br/>
                Previously, worked as a Php and Magento Developer for 1.5 years.<br/><br/>
                Also, having knowledge of HTML, CSS, Javascript, Ajax, SQL, Bootstrap, Material UI, GIT and more.
                
            </Typography>
        </Grid>
    )
}

export default Details
