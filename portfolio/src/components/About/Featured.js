import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import projects from './featuredData';
import { useFeaturedStyles } from './styles';

const Featured = () => {

    const classes = useFeaturedStyles();

    return (
        <Grid container spacing={1} justify="center" alignItems="center">
            {
                projects.map(project => (
                    <Grid item xs={12} md={8} key={project.id} >
                        <Card className={classes.card} variant="outlined">
                            <CardContent>
                                <Typography className={classes.title} variant="h5" component="h2">
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {project.desc}
                                </Typography>
                            </CardContent >
                            <CardActions className={classes.title}>
                                <Button size="medium" variant="contained" color="primary" href={project.projUrl}>Project Link</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )
                )
            }
        </Grid>
    )
}

export default Featured
