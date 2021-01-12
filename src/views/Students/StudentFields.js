import React from 'react'
import { withStyles } from "@material-ui/core/styles";
//import avatar from "assets/img/faces/marc.jpg";

const styles = {};

class StudentFields extends React.Component {
  render() {
    const { classes, student } = this.props
    if(!student) return null

    return (
      <React.Fragment>
        <h6 className={classes.cardCategory}>ID: {student.id}</h6>
        <h4 className={classes.cardTitle}>Name: {student.first_name + " " + student.last_name}</h4>
        <h4 className={classes.cardTitle}>Email: {student.email}</h4>
        <h4 className={classes.cardTitle}>Phone: {student.phone}</h4>
        <h4 className={classes.cardTitle}>Contact Method: {student.contact_method}</h4>
        <h4 className={classes.cardTitle}>Lead Source: {student.lead_source}</h4>
        <h4 className={classes.cardTitle}>Level: {student.level.name}</h4>
        <h4 className={classes.cardTitle}>Status: {student.status}</h4>
        <h4 className={classes.cardTitle}>Active: {student.active.toString()}</h4>
        <p className={classes.description}>Objectives: {student.objectives}</p>
        <p className={classes.description}>Notes: {student.notes}</p>
      </React.Fragment>

    )
  }
}

export default withStyles(styles, { withTheme: true })(StudentFields);
