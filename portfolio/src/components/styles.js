import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  active: {
    backgroundColor: "#000",
    color: "#FFF",
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    display: "flex",
    justifyContent: "space-between",
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  appbarColor: {
    backgroundColor: theme.palette.primary.main,
  },
  linkColor: {
      color: theme.palette.primary.contrastText
  },
//   sideNav: {
//     marginTop: '-60px',
//     zIndex: 3,
//     marginLeft: '0px',
//     position: 'fixed',
//   },
  link: {
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    textTransform: 'uppercase',
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  paper: {
    background: theme.palette.primary.main,
    color: 'white',
    textTransform: 'uppercase',
  },
  sidebarColor: {
      backgroundColor: '#323232',
  },
}));

const useFooterStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main, // #1A2238 'theme.palette.primary.main' #000
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),

  },
  footerTitle: {
      color: theme.palette.primary.contrastText
  },
  footerSubtitle: {
      color: theme.palette.primary.light
  },
  copyright: {
    color: theme.palette.primary.contrastText
  }
}))

const useContentStyles = makeStyles((theme) => ({
  content: {
    textAlign: "center",
    color: theme.palette.primary.dark,
  },
  image:{
    height: "auto",
    width: "100%",
  },
  img:{
    height: "auto",
    width: "100%",
    "@media (max-width: 576px)": {
      height: "auto",
      width: "250px",
    }
  }
}));

export { useStyles, useFooterStyles, useContentStyles }