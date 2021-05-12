import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    particlesJs: {
        position: "absolute",
    },
}))

const HomeParticle = () => {
    const classes = useStyles();
    return (
        <Particles canvasClassName={classes.particlesJs}
                params={{
                    particles: {
                        number: {
                            value: 120,
                            density: {
                            enable: true,
                            value_area: 1000
                            }
                        },
                        shape: {
                            type: "star",
                        },
                        color: {
                            value: '#FFF'
                        },
                        opacity: {
                            value: 0.6,
                            anim: {
                                enable: true
                            }
                        },
                        size: {
                            value: 6,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 5
                            }
                        },
                        line_linked: {
                            enable: true
                        },
                        move: {
                            speed: 0.2
                        }
                    }
                }} 
            />
    )
}

export default HomeParticle
