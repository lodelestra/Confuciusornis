import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import PersonIcon from 'material-ui-icons/Person';
import blue from 'material-ui/colors/blue';

import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';

const styles = theme => ({
  avatar: {
    background: blue[100],
    color: blue[600],
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
    display: 'inline',
  },
});

class GPUsDialog extends React.Component {

  handleClose = () => {
    this.props.onClose();
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  handleVendorChange = e =>{
    this.props.handleFilterVendorChange({...this.props.filters,vendor:e.target.value})
  }

  render() {
    const { classes, onClose, gpus , ...other } = this.props;

    return (
      <Dialog onRequestClose={()=>{this.props.onClose()}} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Select GPU to add</DialogTitle>
        <div>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Vendor</FormLabel>
            <RadioGroup
              aria-label="vendor"
              name="vendor1"
              className={classes.group}
              value={this.props.filters.vendor}
              onChange={this.handleVendorChange}
            >
              <FormControlLabel value="All" control={<Radio />} label="All" />
              <FormControlLabel value="NVIDIA" control={<Radio />} label="NVIDIA" />
              <FormControlLabel value="AMD" control={<Radio />} label="AMD" />
            </RadioGroup>
          </FormControl>
        </div>
        <Divider />
        <div>
          <List>
            {gpus.map((gpu, index) => (
              <ListItem button onClick={() => this.props.onClose(gpu)} key={index}>
                <ListItemText primary={gpu.name} />
                <ListItemText primary={`${gpu.hashRate} Mhs`} />
                <ListItemText primary={`${gpu.price} $`} />
                <ListItemText primary={`${gpu.vendor}`} />
                <ListItemText primary={`${(gpu.price/gpu.hashRate).toFixed(2)} $/Mhs`} />
              </ListItem>
            ))}
          </List>
        </div>
      </Dialog>
    );
  }
}

GPUsDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  gpus: PropTypes.instanceOf(Array),
};

export default withStyles(styles)(GPUsDialog);
