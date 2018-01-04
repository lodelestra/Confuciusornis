import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import blue from 'material-ui/colors/blue';

import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';

import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

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
  table: {
    width: 'auto',
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  tableCell: {
    paddingRight: 10,
    paddingLeft: 10,
  }
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
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell numeric>HashRate (Mhs)</TableCell>
                <TableCell numeric>Price ($)</TableCell>
                <TableCell>Vendor</TableCell>
                <TableCell numeric>Hash price ($/Mhs)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {gpus.map((gpu, index) => {
                return (
                  <TableRow
                    hover
                    key={index}
                    onClick={() => this.props.onClose(gpu)}
                  >
                    <TableCell className={classes.tableCell}>{gpu.name}</TableCell>
                    <TableCell numeric>{gpu.hashRate}</TableCell>
                    <TableCell numeric>{gpu.price.toFixed(2)}</TableCell>
                    <TableCell className={classes.tableCell}>{gpu.vendor}</TableCell>
                    <TableCell numeric>{(gpu.price/gpu.hashRate).toFixed(2)}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
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
