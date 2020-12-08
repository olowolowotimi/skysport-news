import React from 'react'
import Card from '../../../components/Card';
import { Grid } from "@material-ui/core"; 
import feedStyle from './style/Newsfeed.module.css';


const Newsfeed = () => {
    return(
        <div>
            <div className={feedStyle.biggerCard}>
            <Grid item xs={4} lg={12}>
            <Card />
        </Grid>
        </div>
        <section id={feedStyle.newscontainer}>
        <Grid container spacing={2}>
        <Grid item xs={4}>
            <Card />
        </Grid>
        <Grid item xs={4}>
            <Card />
        </Grid>
        <Grid item xs={4}>
            <Card />
        </Grid>
        <Grid item xs={4}>
            <Card />
        </Grid>
        <Grid item xs={4}>
            <Card />
        </Grid>
        <Grid item xs={4}>
            <Card />
        </Grid>
        </Grid>
        </section>
        <Grid container spacing={2}>
            <div  className={feedStyle.sectiontwo}>
            <h2>Live On Sky</h2>
        <Grid item xs={4}>
            <Card />
        </Grid>
        <Grid item xs={4}>
            <Card />
        </Grid>
        </div>
        </Grid>

        </div>
     
        )
}

export default Newsfeed