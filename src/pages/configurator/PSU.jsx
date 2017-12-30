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
  mediaHolder: {
    height: 200,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
  storeList: {
    margin: theme.spacing.unit,
  },
  addButton: {
    display: 'inline',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 'auto',
    width: '56px',
    zIndex: 2,
  },
  card: {

  },
  blackScreen:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.7,
    backgroundColor: 'black',
    zIndex: 1,
  },
  holderContainer:{
    position: 'relative',
  }
});

const PSU = ( props ) => {
  const { classes } = props;
  return (
    <Grid className={classes.itemCategory} item xs={2}>
      <Typography type="headline" component="h3">
        PSU
      </Typography>
      {props.data?
        <Card>
          <CardMedia
            className={classes.media}
            image="/placeholder.png"
            title="Placeholder"
          />
          <CardContent>
            <Typography type="headline" component="h2">
            { props.data.name }
            </Typography>
            <Typography component="p">
              {props.data.powerSupply}W.
            </Typography>
          </CardContent>
          <div className={classes.storeList}>
            <Divider />
            <List>
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={`${props.data.price} $`} />
              </ListItem>
            </List>
          </div>
          <CardActions>
            <Button
              dense
              color="primary"
              onClick={() => { props.onRemovePSUClick(); }}
            >
              delete
            </Button>
          </CardActions>
        </Card>
        :
        <div
          className={classes.holderContainer}
        >
          <Card
            className={classes.card}
            onClick={() => { props.onAddPSUClick(); }}
          >
            <CardMedia
              className={classes.mediaHolder}
              image="/placeholders/psu.png"
              src="/placeholders/psu.png"
              title="Placeholder"
            />
            <CardContent>

            </CardContent>
            <CardActions>
              <Button
                dense
                color="primary"
              >
                Add a PSU
              </Button>
            </CardActions>
          </Card>
          <div
            className={classes.blackScreen}
          >
          </div>
          <Button fab color="primary" aria-label="add" className={classes.addButton} onClick={props.onAddPSUClick}>
            <AddIcon />
          </Button>
        </div>
      }
    </Grid>

  );
}

export default withStyles(styles)(PSU);
