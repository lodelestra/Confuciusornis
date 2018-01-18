/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';

import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './home';
import Configurator from './configurator';
import MiningGuide from './miningGuide';
import About from './about';

const styles = {
  root: {
    textAlign: 'center',
    // paddingTop: 200,
  },
};

class Index extends Component {
  state = {
    open: false,
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={this.props.classes.root}>
        <Router>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <AppBar position='static'>
                <Toolbar>
                  <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
                    <MenuIcon />
                  </IconButton>
                  <Button color='contrast' component={Link} to="/">Home</Button>
                  <Button color='contrast' component={Link} to="/MiningConfigurator">Mining Configurator</Button>
                  <Button color='contrast' component={Link} to="/About">About</Button>

                  <Typography type="title" color="inherit" className={classes.flex}>
                    Ether Fibre
                  </Typography>
                </Toolbar>
              </AppBar>
            </Grid>
            <Grid item xs={12}>
              <div className='pages-container'>
                <Route exact path='/' component={Home} />
                <Route path='/MiningConfigurator' component={Configurator} />
                <Route path='/MiningGuide' component={MiningGuide} />
                <Route path="/About" component={About} />
              </div>
            </Grid>
          </Grid>
        </Router>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
