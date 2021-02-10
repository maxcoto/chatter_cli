import React from "react";
import API from '../../library/API'
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
                  const datetime = trial.class_date.split("T")
                  const date = datetime[0]
                  const times = datetime[1].split(":")
                  const hour = times[0]
                  const minutes = times[1]
                  return [
                    trial.student.first_name + " " + trial.student.last_name,
                    date + " @ " + hour + ":" + minutes,
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
