import React from 'react';

import Typography from 'material-ui/Typography';
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
            <Typography component="p">
              rig stats
              <br />
              hash rate {props.rigHashRate} Mhs
              <br />
              {props.rigPower} Watt
              <br />
              GPUs price {props.rigGPUPrice} $
              <br />
              total Price {props.rigPrice} $
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.itemCard} >
            <Typography component="p">
              eth cours
              <br />
              Eth price {props.ethPrice} $
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.itemCard} >
            <Typography component="p">
              rig revenu
              <br />
              Day {props.rigRevenuByDay.toFixed(2)} $
              <br />
              Week {(props.rigRevenuByDay*7).toFixed(2)} $
              <br />
              Month {(props.rigRevenuByDay*30).toFixed(2)} $
              <br />
              Year {(props.rigRevenuByDay*365).toFixed(2)} $
              <br />
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.itemCard} >
            <Typography component="p">
              Rig Check
              <br />
              PCI used: 3/4
              <br />
              Power consemption: 450/650 W
              <br />
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Dashboard);
