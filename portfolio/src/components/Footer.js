import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { useFooterStyles } from './styles';

function Copyright() {
  const classes = useFooterStyles();
  return (
    <Typography variant="body2" className={classes.copyright} align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => {

    const classes = useFooterStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Typography variant="h6" className={classes.footerTitle} align="center" gutterBottom>
                    Vaibhav Sharma
                </Typography>
                <Typography variant="subtitle1" align="center" className={classes.footerSubtitle} component="p">
                    My portfolio website based on React
                </Typography>
                <Copyright />
            </Container>
        </footer>
    )
}

export default Footer
