import React from 'react'

// core components
import GridItem from "components/Grid/GridItem.js";
import CardBody from "components/Card/CardBody.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";

import { formatDateTime } from 'library/helpers/functions.js'
import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

class StudentHistory extends React.Component {

  render() {
    const { histories, classes, teachers } = this.props
    if(!histories) return null

    return(
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>History</h4>
          </CardHeader>

          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={['Teacher', 'Course', 'Event Id', 'Duration', 'Attended At']}
              tableData={
                histories.map(history => {
                  const teacher = teachers.find(t => t.id === history.teacher_id);
                  return [
                    teacher ? teacher.first_name + " " + teacher.last_name : "",
                    history.summary,
                    history.event_id,
                    history.duration,
                    formatDateTime(history.created_at)
                  ]}
                )
              }
            />
          </CardBody>

        </Card>
      </GridItem>
    )
  }
}

export default withStyles(styles, { withTheme: true })(StudentHistory);
