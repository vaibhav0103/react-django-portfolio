import React from 'react';
import { headersData } from './headersData';
import { Link } from 'react-router-dom';
import { Link as RLink, MenuItem } from '@material-ui/core';
import { useStyles } from '../styles';

const DrawerChoices = () => {
        const classes = useStyles();
        return headersData.map(({ label, href }) => {
        return (
            <RLink 
            {...{
                component: Link,
                to: href,
                color: "#ffac41",
                style: { textDecoration: "none" },
                key: label,
            }}
            >
            <MenuItem className={classes.linkColor}>{label}</MenuItem>
            </RLink>
        );
        });
};

export default DrawerChoices