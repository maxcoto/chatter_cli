import React from "react";
// @material-ui/core
import { withStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import DateRange from "@material-ui/icons/DateRange";
// core components
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

class Stat extends React.Component {

  renderCard(){
    const {classes, title, value, range, icon, color} = this.props;
    return(
      <Card>
        <CardHeader color={ color || "primary"} stats icon>
          <CardIcon color={ color || "primary"}>
            <Icon>{ icon || "thumb_up" }</Icon>
          </CardIcon>
          <p className={classes.cardCategory}>{ title || "Untitled" }</p>
          <h3 className={classes.cardTitle}>{ value || 0 }</h3>
        </CardHeader>
        <CardFooter stats>
          <div className={classes.stats}>
            <DateRange /> {range || "Current"}
          </div>
        </CardFooter>
      </Card>
    )
  }

  render(){
    const { vertical, width } = this.props;

    if(vertical){
      return this.renderCard()
    } else {
      return(
        <GridItem xs={12} sm={6} md={width || 3}>
          { this.renderCard() }
        </GridItem>
      )
    }
  }
}

export default withStyles(styles, { withTheme: true })(Stat);
