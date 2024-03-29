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
import {AmazonIcon} from '../../components/ShopsIcon';

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
  },
  links: {
    textDecoration: 'none',
  },
});

const Motherboard = ( props ) => {
  const { classes } = props;
  return (
    <Grid
      className={classes.itemCategory}
      item
      xs={12} sm={6} md={3} lg={2}
    >
      <Typography type="headline" component="h3">
        Motherboard
      </Typography>
      {props.data?
        <Card className={classes.card}>
          {(props.data!==undefined && props.data.pictureUrl)?
            <CardMedia
              className={classes.mediaHolder}
              image={props.data.pictureUrl}
              src={props.data.pictureUrl}
              title='product picture'
            />
              :
            <CardMedia
              className={classes.mediaHolder}
              image="/placeholders/motherboard.jpg"
              src="/placeholders/motherboard.jpg"
              title="Placeholder"
            />
          }
          <CardContent>
            <Typography type="headline" component="h2">
            { props.data.name }
            </Typography>
            <Typography component="p">
              socket {props.data.socket}.
            </Typography>
            <Typography component="p">
              {props.data.power}W.
            </Typography>
            <Typography component="p">
              {props.data.pci} PCI
            </Typography>
          </CardContent>
          <div className={classes.storeList}>
            <Divider />
            <List>
              <a
                className={classes.links}
                target="_blank"
                href={props.data.productUrl}
              >
                <ListItem button >
                  <ListItemIcon>
                    <AmazonIcon />
                  </ListItemIcon>
                  <ListItemText primary={`${props.data.price} $`} />
                </ListItem>
              </a>
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
        :
        <div
          className={classes.holderContainer}
        >
          <Card
            className={classes.card}
            onClick={() => { props.onAddMotherboardClick(); }}
          >
            <CardMedia
              className={classes.mediaHolder}
              image="/placeholders/motherboard.jpg"
              src="/placeholders/motherboard.jpg"
              title="Placeholder"
            />
            <CardContent>

            </CardContent>
            <CardActions>
              <Button
                dense
                color="primary"
              >
                Add a Motherboard
              </Button>
            </CardActions>
          </Card>
          <div
            className={classes.blackScreen}
          >
          </div>
          <Button
            fab
            color="primary"
            aria-label="add"
            className={classes.addButton}
            onClick={props.onAddMotherboardClick}
          >
            <AddIcon />
          </Button>
        </div>
      }
    </Grid>

  );
}

export default withStyles(styles)(Motherboard);
