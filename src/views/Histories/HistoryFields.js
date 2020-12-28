import React from 'react'
import { withStyles } from "@material-ui/core/styles";
//import avatar from "assets/img/faces/marc.jpg";

const styles = {};

class HistoryFields extends React.Component {  
  render() {
    const { classes, history } = this.props
    if(!history) return null

    return (
      <React.Fragment>
        <h4 className={classes.cardTitle}>Teacher: {history.teacher.first_name + ' ' + history.teacher.last_name}</h4>
				<h4 className={classes.cardTitle}>Calendar Id: {history.calendar_id}</h4>
				<h4 className={classes.cardTitle}>Event Id: {history.event_id}</h4>
				<h4 className={classes.cardTitle}>Duration: {history.duration}</h4>
				<h4 className={classes.cardTitle}>Started At: {history.started_at}</h4>
      </React.Fragment>
      
    )
  }
}

export default withStyles(styles, { withTheme: true })(HistoryFields);
