import React, { Component } from 'react';

import GPU from './GPU';
import Dashboard from './Dashboard';
import Motherboard from './Motherboard';
import PSU from './PSU';
import GPUsDialog from './GPUsDialog';

import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import {withStyles} from 'material-ui/styles';
import AddIcon from 'material-ui-icons/Add';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    textAlign: 'center',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  media: {
    height: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  storeList: {
    margin: theme.spacing.unit,
  },
  itemCategory: {
    backgroundColor: '#eee',
  },
  itemCard: {
    // marginLeft: theme.spacing.unit,
    height: '100%',
  },
})

const gpus = ['rx 480','r9 390x'];

class Configurator extends Component {
  state = {
    gpusDialogOpen: true,
    gpusSelectedValue: gpus[1],
  }

  componentWillMount(){
    //TODO remove
    this.props.onMount();
  }

  handleClickGPUsDialogOpen = () => {
    this.setState({
      gpusDialogOpen: true,
    });
  };

  handleGpusDialogClose = value => {
    this.setState({ selectedValue: value, gpusDialogOpen: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <GPUsDialog
          gpus={gpus}
          open={this.props.gpusDialogOpen}
          onClose={this.props.onGpusDialogClose}
        />
        <Grid container spacing={24}>
          <Dashboard
            rigHashRate={this.props.rigHashRate}
            rigPrice={this.props.rigPrice}
            rigGPUPrice={this.props.rigGPUPrice}
            rigPower={this.props.rigPower}
            rigPCIUsage={this.props.rigPCIUsage}
            ethPrice={this.props.ethPrice}
            rigRevenuByDay={this.props.rigRevenuByDay}
            rigRevenuByMonth={this.props.rigRevenuByMonth}
            motherboard={this.props.motherboard}
            PSU={this.props.PSU}
          />
            {/* gpu begin */}
          <Grid item xs={12}>
            <Typography type="headline" component="h2">
              GPUs
            </Typography>
            <Grid container alignItems='center' spacing={24}>
              {this.props.GPUs.map( (gpu, index) =>
                <GPU
                  key={index}
                  index={index}
                  name={gpu.name}
                  hashRate={gpu.hashRate}
                  power={gpu.power}
                  count={gpu.count}
                  price={gpu.price}
                  onRemoveGPUClick={this.props.onRemoveGPUClick}
                  onRemoveGPUCountClick={this.props.onRemoveGPUCountClick}
                  onAddGPUCountClick={this.props.onAddGPUCountClick}
                />
              )}
              <Grid item xs={1}>
                <Button fab color="primary" aria-label="add" className={classes.button} onClick={this.props.onAddGPUClick}>
                  <AddIcon />
                </Button>
              </Grid>
            </Grid>
          </Grid>

          {/* end gpu */}
          {/* motherboard */}
          <Motherboard
            className={classes.itemCard}
            data={this.props.motherboard}
            onAddMotherboardClick={this.props.onAddMotherboardClick}
            onRemoveMotherboardClick={this.props.onRemoveMotherboardClick}
          />

          <PSU
            className={classes.itemCard}
            data={this.props.PSU}
            onAddPSUClick={this.props.onAddPSUClick}
            onRemovePSUClick={this.props.onRemovePSUClick}
          />
        </Grid>
        {/* <div>{this.props.initialMessage}</div> */}
      </div>
    );
  }

  componentDidMount(){
    console.log(this.props);
  }
}

export default withStyles(styles)(Configurator);
