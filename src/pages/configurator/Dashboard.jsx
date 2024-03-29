import React from 'react';

import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import {withStyles} from 'material-ui/styles';
import { orange } from 'material-ui/colors';

const styles = theme => ({
  itemCard: {
    // marginLeft: theme.spacing.unit,
    height: "100%",
  },
  warning: {
    color: orange[500],
  },
})

const Dashboard = (props) => {
  const { classes } = props;
  return (
    <Grid item xs={12}>
      <Grid container spacing={8}>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.itemCard} >
            <Typography type="title">
              Rig stats
            </Typography>
            <Typography component="p">
              hash rate {props.rigHashRate.toFixed(2)} Mhs
              <br />
              {props.rigPower.toFixed(0)} Watt
              <br />
              GPUs price {props.rigGPUPrice.toFixed(2)} $
              <br />
              Total Price {props.rigPrice.toFixed(2)} $
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Paper className={classes.itemCard} >
            <Typography type="title">
              Eth market
            </Typography>
            <Typography component="p">
              <br />
              Eth price {props.ethPrice.toFixed(2)} $
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Paper className={classes.itemCard} >
            <Typography type="title">
              Rig revenu
            </Typography>
            <Typography component="p">
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
        <Grid item xs={6} sm={2}>
          <Paper className={classes.itemCard} >
            <Typography type="title">
              Return On Investment
            </Typography>
            <Typography component="p">
              GPUs ROI in
              <br />
              {(props.rigGPUPrice/props.rigRevenuByDay).toFixed(0)} Days
              or {(props.rigGPUPrice/props.rigRevenuByDay/31).toFixed(1)} Months
              <br />
              Total rig ROI in
              <br />
              {(props.rigPrice/props.rigRevenuByDay).toFixed(0)} Days
              or {(props.rigPrice/props.rigRevenuByDay/31).toFixed(1)} Months
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.itemCard} >
            <Typography type="title">
              Rig Check
            </Typography>
            {props.motherboard?
              <Typography component="p" color={props.rigPCIUsage>props.motherboard.pci?'error':'accent'}>
                PCI used: {props.rigPCIUsage}/{props.motherboard.pci}
              </Typography>
                :
              <Typography className={classes.warning} component="p">
                PCI used: {props.rigPCIUsage} / ?
              </Typography>
            }
            {props.PSU?
              <Typography component="p" color={props.rigPower>props.PSU.powerSupply?'error':'accent'}>
                Power consumption: {props.rigPower}/{props.PSU.powerSupply} W
              </Typography>
                :
              <Typography className={classes.warning} component="p">
                Power consumption: {props.rigPower}/ ? W
              </Typography>

            }
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Dashboard);
