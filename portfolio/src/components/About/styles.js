import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    // Barcelona Pallete
    // GOLD HEX: #edbb00
    // BURGUNDY HEX: #a50044
    // BLUE HEX: #004d98
    // RED HEX: #db0030
    // YELLOW HEX: #ffed02
    // WHITE HEX: #ffffff 
    // BLACK HEX: #000000

    sidebarAboutBox: {
        padding: theme.spacing(2),
        // backgroundColor: "#a50044", //theme.palette.grey[200],
        backgroundImage: "linear-gradient(180deg, #edbb00, #a50044, #004d98, #db0030)",
        textAlign: "center",
    },
    sidebarSection: {
        marginTop: theme.spacing(3),
    },
    title: {
        color:"#000",
    },
    match: {
        color:"#ffed02",
        fontWeight: "600",
    },
    time: {
        color:"#ffffff",
        border: "1px solid #edbb00",
    },
    sidebarTv: {
        padding: theme.spacing(6),
        backgroundColor: theme.palette.secondary.light,
    },
    sidebarTvlink: {
        textDecoration: 'none',
        color: theme.palette.secondary.main,
    },
    sidebarBtn: {
        textDecoration: 'none',
        marginBottom: "10px",
        textAlign: "center",
        fontSize: "20px",
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: "20px",
        padding: theme.spacing(1),
        backgroundColor: theme.palette.secondary.dark,
        '&:hover': {
            color: theme.palette.primary.dark,
            backgroundColor: theme.palette.primary.light,
        }
    }

}));

export const useDetailStyles = makeStyles((theme)=> ({
    heading: {
        color: theme.palette.primary.dark,
    },
    about:{
        justifyContent: 'center'
    }
}));

export const useFeaturedStyles = makeStyles({
  card: {
    textAlign: 'center',
    justifyContent: 'center',
  },
  title:{
      color: '#FF4838',
      justifyContent: 'center'
  }
});