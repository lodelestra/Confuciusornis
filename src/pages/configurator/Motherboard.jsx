import React from 'react';

import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';

import {withStyles} from 'material-ui/styles';
import AddIcon from 'material-ui-icons/Add';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  media: {
    height: 200,
  },
  card: {
  },
  storeList: {
    margin: theme.spacing.unit,
  },
});

const Motherboard = ( props ) => {
  const { classes } = props;
  return (
    <Grid className={classes.itemCategory} item xs={2}>
      Motherboard
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="/placeholder.png"
            title="Placeholder"
          />
          <CardContent>
            <Typography type="headline" component="h2">
            {
              props.data?
                props.data.name
              :null
            }
            </Typography>
            <Typography component="p">
              socket 1115. 50W.
            {
              props.data?
                props.data.pci
              :null
            } PCI
            </Typography>
          </CardContent>
          <div className={classes.storeList}>
            <Divider />
            <List>
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={`${props.price} $`} />
              </ListItem>
            </List>
          </div>
          <CardActions>
            <Button
              dense
              color="primary"
              onClick={() => { props.onRemoveMotherboardClick(); }}
            >
              delete
            </Button>
          </CardActions>
        </Card>
    </Grid>

  );
}

export default withStyles(styles)(Motherboard);
