import React from 'react'
import { withStyles } from "@material-ui/core/styles";
//import avatar from "assets/img/faces/marc.jpg";

const styles = {};

class CourseFields extends React.Component {  
  render() {
    const { classes, course } = this.props
    if(!course) return null

    return (
      <React.Fragment>
        <h4 className={classes.cardTitle}>Name: {course.name}</h4>
				<h4 className={classes.cardTitle}>Classroom Link: {course.classroom_link}</h4>
				<h4 className={classes.cardTitle}>Meet Link: {course.meet_link}</h4>
				<h4 className={classes.cardTitle}>Event Id: {course.event_id}</h4>
				<h4 className={classes.cardTitle}>Max Students: {course.max_students}</h4>
				<h4 className={classes.cardTitle}>Level: {course.level}</h4>
				<h4 className={classes.cardTitle}>Teacher Id: {course.teacher_id}</h4>
      </React.Fragment>
      
    )
  }
}

export default withStyles(styles, { withTheme: true })(CourseFields);
