import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
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
    },
    root: {
        '&&': {
            width: "128px",
            height: "128px",
            margin: "8px",
        }
    },

}));

export const useAboutStyles = makeStyles((theme) => ({
    heading: {
        color: theme.palette.primary.dark,
    },
    about: {
        // color: '#FF4838',
        justifyContent: 'center'
    }
}));

export const useMovieStyles = makeStyles((theme) => ({
    image: {
        height: "300px",
        width: "auto",
    },
    upper: {
        textTransform: "uppercase",
    },
    capital: {
        textTransform: "capitalize"
    },
}));

export const useContactStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    heading: {
        color: theme.palette.primary.dark,
    },
    avatar: {
        "&&": {
            margin: theme.spacing(1),
            backgroundColor: "#ff4838",
            alignItems: 'center',
        }
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

    center: {
        "&&": {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
        }
    }
}));