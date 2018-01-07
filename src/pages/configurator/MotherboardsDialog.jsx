import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import blue from 'material-ui/colors/blue';

import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

const styles = theme => ({
  avatar: {
    background: blue[100],
    color: blue[600],
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

class MotherboardsDialog extends React.Component {

  render() {
    const { classes, onClose, motherboards , ...other } = this.props;

    return (
      <Dialog onRequestClose={()=>{this.props.onClose()}} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Select Motherboard to add</DialogTitle>
        <Divider />
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell numeric>socket</TableCell>
                <TableCell numeric>Price ($)</TableCell>
                <TableCell numeric>Pci</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {motherboards.map((motherboard, index) => {
                return (
                  <TableRow
                    hover
                    key={index}
                    onClick={() => this.props.onClose(motherboard)}
                  >
                    <TableCell className={classes.tableCell}>{motherboard.name}</TableCell>
                    <TableCell numeric>{motherboard.socket}</TableCell>
                    <TableCell numeric>{motherboard.price.toFixed(2)}</TableCell>
                    <TableCell className={classes.tableCell}>{motherboard.pci}</TableCell>
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

MotherboardsDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  motherboards: PropTypes.instanceOf(Array),
};

export default withStyles(styles)(MotherboardsDialog);
