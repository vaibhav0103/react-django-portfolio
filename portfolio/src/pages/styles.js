import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: theme.spacing(16),
        height: theme.spacing(16),
        margin: theme.spacing(1),
    },
    title: {
        color: theme.palette.primary.dark,
    },
    subtitle: {
        color: "#FFF",
        marginBottom: "3rem",
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1,
    },
    gridContainer: {
        height: "100vh",
        background: 'linear-gradient(45deg, #158ADE, #F1DE39)',
    },
    particlesJs: {
        position: "absolute",
    }

}));

export const useAboutStyles = makeStyles((theme)=> ({
    heading: {
        color: theme.palette.primary.dark,
    },
    about:{
        // color: '#FF4838',
        justifyContent: 'center'
    }
}));