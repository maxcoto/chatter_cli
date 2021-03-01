import React from "react";

// core components
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";


class ScheduleList extends React.Component {
  render() {
    const { classes } = this.props
    const { schedules, student } = this.props

    var instances = []
    var remainingHours = student.hours_remaining
    //var week = 0;
    var stop = false;

    if(schedules.length > 0){
      while(stop === false) {
        schedules.forEach(schedule => {
          if(remainingHours > schedule.duration){
            instances.push(schedule)
            remainingHours -= schedule.duration
          } else {
            stop = true
          }
        });
      }
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
