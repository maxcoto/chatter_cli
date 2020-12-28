import React from 'react'
import { withStyles } from "@material-ui/core/styles";
//import avatar from "assets/img/faces/marc.jpg";

const styles = {};

class SubscriptionFields extends React.Component {  
  render() {
    const { classes, subscription } = this.props
    if(!subscription) return null

    return (
      <React.Fragment>
        <h4 className={classes.cardTitle}>Student: {subscription.student}</h4>
				<h4 className={classes.cardTitle}>Course: {subscription.course}</h4>
				<h4 className={classes.cardTitle}>Kind: {subscription.kind}</h4>
				<h4 className={classes.cardTitle}>Start Date: {subscription.start_date}</h4>
				<h4 className={classes.cardTitle}>Renewal Date: {subscription.renewal_date}</h4>
				<h4 className={classes.cardTitle}>Period: {subscription.period}</h4>
				<h4 className={classes.cardTitle}>Price: {subscription.price}</h4>
				<h4 className={classes.cardTitle}>Hours Left: {subscription.hours_left}</h4>
      </React.Fragment>
      
    )
  }
}

export default withStyles(styles, { withTheme: true })(SubscriptionFields);
