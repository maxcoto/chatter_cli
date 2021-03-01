import React from "react";
import API from '../../library/API'
// @material-ui/core components

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import AddIcon from "@material-ui/icons/Add";
import ShowIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "components/CustomButtons/Button.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";


class ScheduleList extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { classes } = this.props
    const { schedules, student } = this.props

    var instances = []
    var remainingHours = student.hours_remaining
    var week = 0;
    var stop = false;

    if(schedules.length > 0){
      //while(stop === false) {
        schedules.forEach(schedule => {
          if(remainingHours > schedule.duration){
            instances.push(schedule)
            remainingHours -= schedule.duration
          } else {
            stop = true
          }
        });
      //}
    }

    return (
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Schedules</h4>
        </CardHeader>
        <CardBody>
          <Table
            tableHeaderColor="primary"
            tableHead={['Day', 'At', 'Duration']}
            tableData={
              instances.map(schedule => {
                return [
                  schedule.day,
                  schedule.recurrent_at,
									schedule.duration
                ]
              })
            }
          />
        </CardBody>
      </Card>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ScheduleList);
