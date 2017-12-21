import React from 'react';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import {withStyles} from 'material-ui/styles';

const styles = theme => ({
  itemCard: {
    // marginLeft: theme.spacing.unit,
    height: "100%",
  },
})

const Dashboard = (props) => {
  const { classes } = props;
  return (
    <Grid item xs={12}>
      <div>Configurator</div>
      <Grid container spacing={8}>
        <Grid item xs={3}>
          <Paper className={classes.itemCard} >
            rig stats
                  <br />
            hash rate {props.rigHashRate}
                  <br />
            W
                  <br />
            price €
                </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.itemCard} >
            eth cours
                </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.itemCard} >
            rig revenu
                </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.itemCard} >
            rig shop
                </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Dashboard);