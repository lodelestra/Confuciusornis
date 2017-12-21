import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
// import Card from 'material-ui/Card';

import AddIcon from 'material-ui-icons/Add';
import {withStyles} from 'material-ui/styles';

import GPU from './GPU';

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
  itemCard: {
    // marginLeft: theme.spacing.unit,
    height: "100%",
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
          <Grid item xs={12}>
            <div>Configurator</div>
            <Grid container spacing={8}>
              <Grid item xs={3}>
                <Paper className={classes.itemCard} >
                  rig stats
                  <br/>
                  hash rate
                  <br/>
                  W
                  <br/>
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
            {/* summary end */}
          </Grid>
            {/* gpu begin */}
          <Grid item xs={12}>
            GPU
            <Grid container alignItems='center' spacing={24}>
              <GPU />
              <Grid item xs={1}>
                <Button fab color="primary" aria-label="add" className={classes.button}>
                  <AddIcon />
                </Button>
              </Grid>
            </Grid>
          </Grid>

          {/* end gpu */}
          {/* carte mere */}
          <Grid className={classes.itemCategory} item xs={2}>
            Carte mere
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