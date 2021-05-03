import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { headersData } from './headersData';
import { Link, useLocation } from 'react-router-dom';
import { useStyles } from '../styles';

const GetMenuButtons = () => {
        const classes = useStyles();
        const location = useLocation()
        return headersData.map(({ label, href }) => {
            return (
                
                <Link to={href} className={classes.link} >
                    <List>
                        <ListItem button key={label} selected={href === location.pathname}>
                            <ListItemText primary={label} />
                        </ListItem>
                    </List>
                </Link>
            );
        });
};

export default GetMenuButtons