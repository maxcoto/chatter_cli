import React from 'react'
import { withStyles } from "@material-ui/core/styles";
//import avatar from "assets/img/faces/marc.jpg";

const styles = {};

class TeacherFields extends React.Component {  
  render() {
    const { classes, teacher } = this.props
    if(!teacher) return null

    return (
      <React.Fragment>
        <h4 className={classes.cardTitle}>First Name: {teacher.first_name}</h4>
				<h4 className={classes.cardTitle}>Last Name: {teacher.last_name}</h4>
				<h4 className={classes.cardTitle}>Email: {teacher.email}</h4>
				<h4 className={classes.cardTitle}>Status: {teacher.status}</h4>
      </React.Fragment>
      
    )
  }
}

export default withStyles(styles, { withTheme: true })(TeacherFields);
