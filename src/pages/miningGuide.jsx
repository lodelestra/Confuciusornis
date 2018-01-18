import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

const styles = theme => ({
  root: {
    maxWidth: '720px',
    margin: 'auto',
    padding: theme.spacing.unit,
    textAlign: 'left',
  },
  title: {
    textAlign: 'center',
  },
  sectionHeadline: {
    marginTop: theme.spacing.unit*4,
  },
  disclaimer:{
    marginBottom: theme.spacing.unit*4,
  },
  rightIllustration: {
    float: 'right',
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  callButton: {
    margin: theme.spacing.unit*4,
  },
  part: {
    overflow: 'auto',
  },
  embeddedLink: {
    color: theme.palette.primary[500],
    textDecoration: 'none',
    fontWeight: 'bold',
  },
});

class Home extends Component {
  state = {  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography className={classes.title} type="display2" gutterBottom>
          Free Ethereum Mining Guide
        </Typography>

        <Typography className={classes.sectionHeadline} type="headline" gutterBottom>
          Is the guide ready ?
        </Typography>
        <div className={classes.part}>
          <Typography className={classes.disclaimer} type="body2" gutterBottom>
            Sorry, we are currently writing the complete ethereum mining guide and it's not ready yet.
            <br/>
            We noticed your interest for this content, and work even harder to finish it!
          </Typography>

            <img className={classes.rightIllustration} src="/articles_img/erc_screenshot_mini.png" width='50%' alt="configurator preview" />
            <Typography type="body2" gutterBottom>
              You can use our tool to create a rig mining configuration. It will give your some exemple of hardware to use and calculate the cost, profitability by day or month and even your date of return on investment (ROI).
            </Typography>
            <Button href='MiningConfigurator' raised color="default" className={classes.callButton}>
               => try the Configurator
            </Button>
        </div>

        <Typography type="body2" gutterBottom>
          Or you can check this site, who as a pretty good guide right now. <a className={classes.embeddedLink} href="">The other site</a>
        </Typography>
      </div>
    );
  }
}


export default withStyles(styles)(Home);
