import React from 'react'
import Grid from '@material-ui/core/Grid';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';

const More = () => {
    return (
        <main className="more">
            <section className="content">
                <Grid container spacing={2}>
                    <Grid container item md={8} xs={12} spacing={2} direction="column" justify="center" alignItems="center" >
                        <Content />
                    </Grid>
                    <Grid container item md={4} xs={12} spacing={2} direction="column" alignItems="center" >
                        <Sidebar />
                    </Grid>
                </Grid>   
            </section> 
        </main>
    )
}

export default More
