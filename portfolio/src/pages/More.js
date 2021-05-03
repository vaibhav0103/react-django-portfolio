import React from 'react'
import Grid from '@material-ui/core/Grid';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';

const More = () => {
    return (
        <main className="more">
            <section className="content">
                <Grid container spacing={2}>
                    <Content />
                    <Sidebar />
                </Grid>   
            </section> 
        </main>
    )
}

export default More
