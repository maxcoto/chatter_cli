import React from "react";
import API from '../../library/API'
// core components
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { formatDateTime } from 'library/helpers/functions.js'

class TrialList extends React.Component {

  constructor(props) {
    super(props)
    API.configure(props.token)
  }

  render() {
    const { classes, trials } = this.props

    return (
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Scheduled Trial Classes</h4>
            <p className={classes.cardCategoryWhite}>This Week</p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Potential", "Class Date", "Group"]}
              tableData={
                trials.map(trial => {
                  return [
                    trial.student.full_name,
                    formatDateTime(trial.class_date),
                    trial.course.name
                  ]
                })
              }
            />
          </CardBody>
        </Card>
      </GridItem>
    );
  }
}

export default withStyles(styles, { withTheme: true })(TrialList);
