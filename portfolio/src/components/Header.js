import React, { useState, useEffect } from 'react';
import { useStyles } from './styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Drawer, Fab } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Desktop from './Header/Desktop';
import DrawerChoices from './Header/DrawerChoices';
import HideOnScroll from "./Header/HideOnScroll";
import BackToTop from "./Header/BackToTop";
// import { KeyboardArrowUp, ArrowUpward } from "@material-ui/icons";
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';


const Header = () => {

    const classes = useStyles();    

    // Mobile View
    const displayMobile = () => {
        // Open Drawer
        const handleDrawerOpen = () => {
            setState((prevState) => ({ ...prevState, drawerOpen: true })
        )};
        // Close Drawer
        const handleDrawerClose = () => {
            setState((prevState) => ({ ...prevState, drawerOpen: false })
        )};

        return (
        <Toolbar>
            <IconButton className={classes.link}
            {...{
            edge: "start",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
            }}
            >
            <MenuIcon />
            </IconButton>
            <Drawer classes={{ paper: classes.paper }}
            {...{
                anchor: "left",
                open: drawerOpen,
                onClose: handleDrawerClose,   
            }}
            >
          <div><DrawerChoices /></div>
        </Drawer>
        <Typography component="h2" variant="h5" align="center" className={classes.toolbarTitle}>
          PORTFOLIO
        </Typography>
        
        </Toolbar>
        );
    };

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    })
    
    const { mobileView, drawerOpen } = state;
  
    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, []);

    return (
        <div className="header-container">
            {/* Hide the NavBar on scroll */}
            <HideOnScroll>
                <AppBar className={classes.appbarColor} position="fixed">
                {mobileView ? displayMobile() : <Desktop />}
                </AppBar>
            </HideOnScroll>
            
            <Toolbar disableGutters={true} id="back-to-top-anchor"/>

            {/* Back To Top */}
            <BackToTop>
                <Fab color="primary" size="large" aria-label="scroll back to top">
                    <ExpandLessOutlinedIcon />
                </Fab>
            </BackToTop>
        </div>
    )
}

export default Header