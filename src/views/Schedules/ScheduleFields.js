import React from 'react'
import { withStyles } from "@material-ui/core/styles";
//import avatar from "assets/img/faces/marc.jpg";

const styles = {};

class ScheduleFields extends React.Component {  
  render() {
    const { classes, schedule } = this.props
    if(!schedule) return null

    //[++] refs course.name
    return (
      <React.Fragment>
        <h4 className={classes.cardTitle}>Course: {schedule.course.name}</h4>
				<h4 className={classes.cardTitle}>Recurrent At: {schedule.recurrent_at}</h4>
				<h4 className={classes.cardTitle}>Duration: {schedule.duration}</h4>
      </React.Fragment>
      
    )
  }
}

export default withStyles(styles, { withTheme: true })(ScheduleFields);
