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

class PSUsDialog extends React.Component {

  render() {
    const { classes, onClose, psus , ...other } = this.props;

    return (
      <Dialog onRequestClose={()=>{this.props.onClose()}} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Select PSU to add</DialogTitle>
        <Divider />
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell numeric>Watt</TableCell>
                <TableCell numeric>Price ($)</TableCell>
                <TableCell>Vendor</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {psus.map((psu, index) => {
                return (
                  <TableRow
                    hover
                    key={index}
                    onClick={() => this.props.onClose(psu)}
                  >
                    <TableCell className={classes.tableCell}>{psu.name}</TableCell>
                    <TableCell numeric>{psu.powerSupply}</TableCell>
                    <TableCell numeric>{psu.price.toFixed(2)}</TableCell>
                    <TableCell className={classes.tableCell}>{psu.vendor}</TableCell>
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

PSUsDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  psus: PropTypes.instanceOf(Array),
};

export default withStyles(styles)(PSUsDialog);
