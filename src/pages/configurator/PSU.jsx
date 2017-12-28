import React from 'react';

import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';

import {withStyles} from 'material-ui/styles';

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
  addButton: {
    verticalAlign: 'middle !important',
    marginTop: '50px',
  },
});

const PSU = ( props ) => {
  const { classes } = props;
  return (
    <Grid className={classes.itemCategory} item xs={2}>
      <Typography type="headline" component="h3">
        PSU
      </Typography>
      {props.data?
        <Card className={classes.card}>
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
        <Card
          className={classes.card}
          onClick={() => { props.onAddPSUClick(); }}
        >
          <CardMedia
            className={classes.media}
            image="/placeholder.png"
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
      }
    </Grid>

  );
}

export default withStyles(styles)(PSU);
