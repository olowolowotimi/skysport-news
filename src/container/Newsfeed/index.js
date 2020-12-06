import React from 'react'
import Card from '../../../components/Card';
import { Grid } from "@material-ui/core"; 


const Newsfeed = () => {
    return(
      <Grid container>
          <Grid item xs={6}>
              <Card />
          </Grid>
          <Grid item xs={6}>
              <Card />
          </Grid>
          <Grid item xs={6}>
              <Card />
          </Grid>
          <Grid item xs={6}>
              <Card />
          </Grid>
          </Grid>
        )
}

export default Newsfeed