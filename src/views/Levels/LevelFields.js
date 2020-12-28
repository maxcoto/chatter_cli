import React from 'react'
import { withStyles } from "@material-ui/core/styles";
//import avatar from "assets/img/faces/marc.jpg";

const styles = {};

class LevelFields extends React.Component {  
  render() {
    const { classes, level } = this.props
    if(!level) return null

    return (
      <React.Fragment>
        <h4 className={classes.cardTitle}>Order: {level.order}</h4>
				<h4 className={classes.cardTitle}>Name: {level.name}</h4>
      </React.Fragment>
      
    )
  }
}

export default withStyles(styles, { withTheme: true })(LevelFields);
