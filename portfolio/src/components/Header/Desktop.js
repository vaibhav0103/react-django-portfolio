import React from 'react';
import { Toolbar, Typography} from '@material-ui/core';
import GetMenuButtons from './GetMenuButtons';
import { useStyles } from '../styles';


// DESKTOP View

const Desktop = () => {

    const classes = useStyles();

    return (
    <Toolbar className={classes.toolbar}>
        <Typography
        component="h2"
        variant="h5"
        noWrap
        className={classes.toolbarTitle}
    >
        PORTFOLIO
    </Typography>
        <GetMenuButtons />
    </Toolbar>
    );
};

export default Desktop