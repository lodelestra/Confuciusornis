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
          Ethereum Guide
        </Typography>

        <Typography className={classes.sectionHeadline} type="headline" gutterBottom>
          How to mine ethereum ?
        </Typography>
        <div className={classes.part}>
          <Typography type="body1" gutterBottom>
            Ethereum mining is very easy and everybody can do it. All it takes is an <strong> ethereum wallet </strong> and internet connection and a <strong>mining rig</strong>. The last one is by far the hardest part.
            That's why we created an online tool to help you to design your rig.
          </Typography>
            <img className={classes.rightIllustration} src="/articles_img/erc_screenshot_mini.png" width='50%' alt="configurator preview" />
            <Typography type="body2" gutterBottom>
              You can use our calculator to create a mining rig configuration. It will give your some examples of hardware to use and calculate for you the cost, profitability by day or month and even your date of return on investment (ROI).
            </Typography>
            <Button href='MiningConfigurator' raised color="default" className={classes.callButton}>
               => try the Configurator
            </Button>

            <Typography type="body1" gutterBottom>
              After this quick simulation, if you are convinced that mining is profitable for you, our <a className={classes.embeddedLink} href="miningGuide">free guide</a>  will help you through the process of building and starting your hown mining rig.
            </Typography>

        </div>

        <Typography className={classes.sectionHeadline} type="headline" gutterBottom>
          Is mining profitable in 2018?
        </Typography>
        <Typography type="body2" gutterBottom>
          The short answer is maybe.
        </Typography>
        <Typography type="body1" gutterBottom>
          If you already have parts of the hardware needed to make a rig or if your electricity is cheap you will reach the point of ROI sooner.<br/>
          In the calculator part of the <a className={classes.embeddedLink} href="MiningConfigurator">configurator</a> the return on investment (ROI) date is calculated without the <strong> hardware resale price!</strong> But your hardware has still worth good money. At the ROI date your hardware worth is pure profit, you are free to keep it to keep mining, or resale it at the best price. There is a market for used graphics card.
        </Typography>
        <Typography type="subheading" gutterBottom>
          <strong>Does the mining complexity growth will impact my revenu ?</strong>
        </Typography>
        <Typography type="body1" gutterBottom>
          The mining complexity growth because of new miners and mining farm getting bigger and bigger. If people keep investing in mining hardware it's only because the price continue to go up.<br/>
          The mining complexity will impact the quantity of Ether you can mine in a week, but the price increase will keep your revenu.
        </Typography>

        <Typography type="subheading" gutterBottom>
          <strong>If price increase make mining profitable, why not just trade Eth ?</strong>
        </Typography>
        <Typography type="body1" gutterBottom>
          For people with zero knowledge in computer science, no hardware and a high electricity cost, it's probably more profitable to buy coin.<br/>
        </Typography>
        <Typography type="body2" gutterBottom>
          The mining calculator can give you a good prediction of your cost and your ROI.<br/>
        </Typography>
        <Typography type="body1" gutterBottom>
          For some people with cheap electricity (like Canadian) and little computer knowledge, it can be more interesting to invest on Graphics Card (GPU). But that's not the case for everybody.
        </Typography>

        <Typography className={classes.sectionHeadline} type="headline" gutterBottom>
          How to buy Ethereum?
        </Typography>
        <Typography type="body2" gutterBottom>
          It's easier to buy etherum and way faster than mining it! You only need to open an account on a crypto money marketplace, and buy how many ether you want (or can). It's realy easier because they take care of keeping and managing your Ethereum wallet for you.
          Coinbase is one of the most serious and well known crypto coin marketplace in the world.
        </Typography>
          <Button href='https://www.coinbase.com/join/5a60cf79d991c401c57320c4' raised color="default" className={classes.callButton}>
              Go look at Coinbase and get a 10$ bonus*
          </Button>
          <Typography type="caption" gutterBottom>
          * for 100$ USD investement in the next 180 days
          </Typography>

      </div>
    );
  }
}


export default withStyles(styles)(Home);
