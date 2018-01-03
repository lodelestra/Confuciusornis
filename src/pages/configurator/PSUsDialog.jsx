import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import PersonIcon from 'material-ui-icons/Person';
import blue from 'material-ui/colors/blue';

const styles = theme => ({
  avatar: {
    background: blue[100],
    color: blue[600],
  },
});

class PSUsDialog extends React.Component {

  render() {
    const { classes, onClose, psus , ...other } = this.props;

    return (
      <Dialog onRequestClose={()=>{this.props.onClose()}} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Select PSU to add</DialogTitle>
        <Divider />
        <div>
          <List>
            {psus.map((psu, index) => (
              <ListItem button onClick={() => this.props.onClose(psu)} key={index}>
                <ListItemText primary={psu.name} />
                <ListItemText primary={`${psu.powerSupply} W`} />
                <ListItemText primary={`${psu.price} $`} />
                <ListItemText primary={`${psu.vendor}`} />
              </ListItem>
            ))}
          </List>
        </div>
      </Dialog>
    );
  }
}

PSUsDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  psus: PropTypes.instanceOf(Array),
};

export default withStyles(styles)(PSUsDialog);
