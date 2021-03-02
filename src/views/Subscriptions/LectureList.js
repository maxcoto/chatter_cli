import React from "react";

// core components
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomSwitch from "components/CustomSwitch/CustomSwitch.js";
import Schedule from "@material-ui/icons/Schedule";

import { formatDateTime } from 'library/helpers/functions.js'
import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";


class LectureList extends React.Component {
  toggle(lecture){
    return null;
  }

  render() {
    const { classes, student } = this.props
    const { lectures } = student

    const hoursTaken = lectures ? lectures.filter((l) => l.taken).reduce(function(sum, lecture) { return (sum + lecture.duration) }, 0) : 0
    const hoursLeft = student.subscription ? student.subscription.hours_left - hoursTaken : 0;
    const hoursRemanent = student.subscription ? student.subscription.hours_remanent : 0;

    if(!lectures) return null;

    return (
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Lectures Plan</h4>
        </CardHeader>
        <CardBody>
          <Table
            tableHeaderColor="primary"
            tableHead={['Teacher', 'Day', 'At', 'Duration', 'Taken']}
            tableData={
              lectures.map(lecture => {
                return [
                  lecture.teacher_name,
                  lecture.day,
                  formatDateTime(lecture.starts_at),
                  lecture.duration,
                  <CustomSwitch
                    name="taken"
                    checked={lecture.taken}
                    onChange={this.toggle.bind(this, lecture)}
                    disabled={true}
                  />
                ]
              })
            }
          />
        </CardBody>
        <CardFooter stats>
          <div className={classes.stats}>
            <Schedule /> Hours Left: { hoursLeft }
          </div>
          <div className={classes.stats}>
            <Schedule /> Hours Remanent: { hoursRemanent }
          </div>
        </CardFooter>
      </Card>
    );
  }
}

export default withStyles(styles, { withTheme: true })(LectureList);
