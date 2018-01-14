import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

class LoadDefaultDialog extends React.Component {

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Load default configuration?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This tool will help you to create your ethereum mining rig. For a quick start you can load a pre-made configuration.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onClose} color="primary">
            Start empty
          </Button>
          <Button onClick={this.props.onLoadDefaultClick} raised color="primary" autoFocus>
            Start with pre-made
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

LoadDefaultDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onLoadDefaultClick: PropTypes.func,
};

export default LoadDefaultDialog;
