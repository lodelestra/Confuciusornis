import React, { Component } from 'react';

import GPU from './GPU';
import Dashboard from './Dashboard';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';

import {withStyles} from 'material-ui/styles';
import AddIcon from 'material-ui-icons/Add';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing.unit,
    marginRight: theme.spacing.unit,
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
})

class Configurator extends Component {
  state = {  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Grid container spacing={24}>
          <Dashboard 
            rigHashRate={this.props.rigHashRate}
            rigPrice={this.props.rigPrice}
          />
            {/* gpu begin */}
          <Grid item xs={12}>
            GPU
            <Grid container alignItems='center' spacing={24}>
              {this.props.GPUs.map( (gpu, index) => 
                <GPU 
                  index={index}
                  name={gpu.name}
                  hashRate={gpu.hashRate}
                  count={gpu.count}
                  price={gpu.price}
                  onRemoveGPUClick={this.props.onRemoveGPUClick}
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
          <Grid className={classes.itemCategory} item xs={2}>
            Motherboard
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image="/placeholder.png"
                  title="Placeholder"
                />
                <CardContent>
                  <Typography type="headline" component="h2">
                   ASUS
                  </Typography>
                  <Typography component="p">
                    socket 1115. 50W. 4 PCI
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button dense color="primary">
                    delete
                  </Button>
                  <Button dense color="primary">
                   add one
                  </Button>
                </CardActions>
              </Card>
          </Grid>

        </Grid>
        {/* <div>{this.props.initialMessage}</div> */}
      </div>
      
    );
  }

  componentDidMount(){
    console.log(this.props);
    //this.props.onMount('test displatch to props');
  }
}

export default withStyles(styles)(Configurator);
// export default Configurator;