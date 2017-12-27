import React from 'react';

import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';

import {withStyles} from 'material-ui/styles';
import AddIcon from 'material-ui-icons/Add';
import RemoveIcon from 'material-ui-icons/Remove';

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

const GPU = ( props ) => {
  const { classes } = props;
  return (
    <Grid item xs={2}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/placeholder.png"
          title="Placeholder"
        />
        <CardContent>
          <Typography type="headline" component="h2">
            {props.name}
          </Typography>
          <Typography component="p">
            {props.hashRate}Mh/s   {props.power}Watt
            <br/>
            $/Mhs
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
            onClick={() => { props.onRemoveGPUClick(props.index); }}
          >
            delete
          </Button>
          <Button
            dense
            disabled={props.count===1}
            color="primary"
            onClick={()=> {props.onRemoveGPUCountClick(props.index)}}
          >
            <RemoveIcon />
          </Button>
          <Typography component="p">
            {props.count}
          </Typography>
          <Button
            dense
            color="primary"
            onClick={()=> {props.onAddGPUCountClick(props.index)}}
          >
            <AddIcon />
          </Button>
        </CardActions>
        <Divider />
      </Card>
    </Grid>
  );
}

export default withStyles(styles)(GPU);
