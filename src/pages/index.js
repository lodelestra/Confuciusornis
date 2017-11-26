/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Configurator from './configurator';
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
    const {classes} = this.props;
    return (
      <div className={this.props.classes.root}>
      <Router>
          <div>
            <AppBar position='static'>
              <Toolbar>
                <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
                <Button color='contrast' component={Link} to="/">Configurator</Button>
                <Button color='contrast' component={Link} to="/About">About</Button>

                <Typography type="title" color="inherit" className={classes.flex}>
                Bitcoin Ethereum Rig Configurator
            </Typography>
              </Toolbar>

            </AppBar>

            <div className='pages-container'>
              <Route exact path='/' component={Configurator} />
              <Route path="/About" component={About} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
