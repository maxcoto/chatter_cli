import React from 'react'

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomSwitch from "components/CustomSwitch/CustomSwitch.js";
import CustomSelect from "components/CustomSelect/CustomSelect.js";
import CardBody from "components/Card/CardBody.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";

import { _statuses, _lead_sources, _contact_methods } from 'variables/general'

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

class StudentHistory extends React.Component {

  render() {
    const { histories, classes } = this.props
    if(!histories) return null

    console.log(histories);

    return(
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>History</h4>
          </CardHeader>

          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={['Teacher', 'Course', 'Event Id', 'Duration', 'Started At']}
              tableData={
                histories.map(history => {
                  return [
                    history.teacher.first_name + " " + history.teacher.last_name,
                    history.summary,
                    history.event_id,
                    history.duration,
                    history.created_at
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
