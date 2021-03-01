import React from "react";

// core components
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import { formatTime } from 'library/helpers/functions.js'
import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";


class ScheduleList extends React.Component {
  render() {
    const { classes, student } = this.props
    const { schedules } = student
    var { hoursLeft } = this.props
    var instances = []
    var stop = false;

    if(schedules && schedules.length > 0){
      while(stop === false) {
        schedules.forEach(schedule => {
          if(hoursLeft > schedule.duration){
            instances.push(schedule)
            hoursLeft -= schedule.duration
          } else {
            stop = true
          }
        });
      }
    }

    if(instances.length === 0) return null;

    return (
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Next Classes</h4>
        </CardHeader>
        <CardBody>
          <Table
            tableHeaderColor="primary"
            tableHead={['Day', 'At', 'Duration']}
            tableData={
              instances.map(schedule => {
                return [
                  schedule.day,
                  formatTime(schedule.recurrent_at),
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
