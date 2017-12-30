import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import PersonIcon from 'material-ui-icons/Person';
import blue from 'material-ui/colors/blue';

const styles = {
  avatar: {
    background: blue[100],
    color: blue[600],
  },
};

class GPUsDialog extends React.Component {

  handleClose = () => {
    console.log('gpus dialog handle close');
    this.props.onClose();
  };

  handleListItemClick = value => {
    console.log('gpus dialog handle list item click');
    this.props.onClose(value);
  };

  render() {
    const { classes, onClose, gpus , ...other } = this.props;

    return (
      <Dialog onRequestClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Select GPU to add</DialogTitle>
        <div>
          <List>
            {gpus.map(email => (
              <ListItem button onClick={() => this.handleListItemClick(email)} key={email}>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={email} />
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
