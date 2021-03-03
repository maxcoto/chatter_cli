import React from "react";
import ChartistGraph from "react-chartist";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { studentForTime } from "variables/charts.js";

class TeacherGraphs extends React.Component {

  render() {
    const { classes, teacher } = this.props

    if(!teacher) return null

    return (
      <React.Fragment>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="primary">
              <ChartistGraph
                className="ct-chart"
                data={teacher.pay_per_months}
                type="Bar"
                options={studentForTime.options}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Monthtly Payments</h4>
            </CardBody>
          </Card>
        </GridItem>
        {/*  */}
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="primary">
              <ChartistGraph
                className="ct-chart"
                data={teacher.longevity_per_month}
                type="Bar"
                options={studentForTime.options}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Students Loyalty</h4>
            </CardBody>
          </Card>
        </GridItem>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(TeacherGraphs);
