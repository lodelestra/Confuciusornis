import React from 'react';

import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';

import {withStyles} from 'material-ui/styles';
import AddIcon from 'material-ui-icons/Add';
import RemoveIcon from 'material-ui-icons/Remove';
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
  card: {
  },
  storeList: {
    margin: theme.spacing.unit,
  },
  mediaHolder: {
    height: 200,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
  links: {
    textDecoration: 'none',
  },
});

const GPU = ( props ) => {
  const { classes } = props;
  return (
    <Grid
      item
      xs={12} sm={6} md={3} lg={2}
    >
      <Card className={classes.card}>
        {(props.pictureUrl!==undefined)?
          <CardMedia
            className={classes.mediaHolder}
            image={props.pictureUrl}
            src={props.pictureUrl}
            title='product picture'
          />
          :
          <CardMedia
            className={classes.media}
            image="/placeholder.png"
            title="Placeholder"
          />
        }
        <CardContent>
          <Typography type="headline" component="h2">
            {props.name}
          </Typography>
          <Typography component="p">
            {props.hashRate}Mh/s   {props.power}Watt
            <br/>
            {(props.price/props.hashRate).toFixed(2)}$/Mhs
          </Typography>
        </CardContent>
        <div className={classes.storeList}>
          <Divider />
          <List>
            <a
              className={classes.links}
              target="_blank"
              href={props.productUrl}
            >
              <ListItem button >
                <ListItemIcon>
                  <AmazonIcon />
                </ListItemIcon>
                <ListItemText primary={`${props.price} $`} />
              </ListItem>
            </a>
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
          <IconButton
            dense
            disabled={props.count===1}
            color="primary"
            onClick={()=> {props.onRemoveGPUCountClick(props.index)}}
          >
            <RemoveIcon />
          </IconButton>
          <Typography component="p">
            {props.count}
          </Typography>
          <IconButton
            dense
            color="primary"
            onClick={()=> {props.onAddGPUCountClick(props.index)}}
          >
            <AddIcon />
          </IconButton>
        </CardActions>
        <Divider />
      </Card>
    </Grid>
  );
}

export default withStyles(styles)(GPU);
