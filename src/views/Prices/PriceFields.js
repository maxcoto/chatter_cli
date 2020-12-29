import React from 'react'
import { withStyles } from "@material-ui/core/styles";
//import avatar from "assets/img/faces/marc.jpg";

const styles = {};

class PriceFields extends React.Component {  
  render() {
    const { classes, price } = this.props
    if(!price) return null

    //[++] refs level.name
    return (
      <React.Fragment>
        <h4 className={classes.cardTitle}>Level: {price.level.name}</h4>
				<h4 className={classes.cardTitle}>Kind: {price.kind}</h4>
				<h4 className={classes.cardTitle}>Period: {price.period}</h4>
				<h4 className={classes.cardTitle}>Amount: {price.amount}</h4>
      </React.Fragment>
      
    )
  }
}

export default withStyles(styles, { withTheme: true })(PriceFields);
