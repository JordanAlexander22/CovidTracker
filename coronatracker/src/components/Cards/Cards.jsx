import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
// import { StylesContext } from '@material-ui/styles';

const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if (!confirmed) {
        return 'Loading....'
    }
    return (
        <div className= {styles.container}>
            <Grid container spacing = {3} justify = "center" >
                <Grid item component = {Card}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant= "h5">{confirmed.value} </Typography>
                        <Typography color = "textSecondary"> Real Date </Typography>
                        <Typography variant = "body2">Number of current Covid-19 cases</Typography> 
                    </CardContent>
                </Grid>
                <Grid item component = {Card}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant= "h5">Real Data </Typography>
                        <Typography color = "textSecondary"> Real Date </Typography>
                        <Typography variant = "body2">Number of recoveries from Covid-19</Typography> 
                    </CardContent>
                </Grid>
                <Grid item component = {Card}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant= "h5">Real Data </Typography>
                        <Typography color = "textSecondary"> Real Date </Typography>
                        <Typography variant = "body2">Number of deaths from Covid-19</Typography> 
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    )
}



export default Cards;