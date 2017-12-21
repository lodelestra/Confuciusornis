import React from 'react';

import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';

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
            RX 480
                    </Typography>
          <Typography component="p">
            20Mh/s   200W
                    </Typography>
        </CardContent>
        <div className={classes.storeList}>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="350 $" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItem>
          </List>
        </div>
        <CardActions>
          <Button dense color="primary">
            delete
                    </Button>
          <Button dense color="primary">
            - 2 +
                    </Button>
        </CardActions>
        <Divider />
      </Card>
    </Grid>
  );
}

export default withStyles(styles)(GPU);