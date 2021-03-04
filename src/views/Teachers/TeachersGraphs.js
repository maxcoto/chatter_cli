import React from "react";
import ChartistGraph from "react-chartist";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import DateRange from "@material-ui/icons/DateRange";
import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { studentByLevel, studentForTime } from "variables/charts.js";

class TeachersGraphs extends React.Component {

  render() {
    const { classes, stats, teachers } = this.props
    const { hours_per_teacher, pay_per_teacher } = stats

    if(!hours_per_teacher || !pay_per_teacher) return null

    return (
      <React.Fragment>
        <GridContainer>
        {/* hours x techer */}
          <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader color="primary">
                <ChartistGraph
                  className="ct-donut"
                  data={hours_per_teacher}
                  type="Pie"
                  options={studentByLevel.options}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Monthly Hours Per Teacher</h4>
                {
                  teachers.map((t, i) => {
                    return (
                      <p className={classes.cardCategory} key={i}>
                        { t.first_name[0].toUpperCase() + t.last_name[0].toUpperCase() + ": " + t.full_name }
                      </p>
                    )
                  })
                }
              </CardBody>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange /> {"This Month"}
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          {/* active vs new students */}
          <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader color="primary">
                <ChartistGraph
                  className="ct-chart"
                  data={pay_per_teacher}
                  type="Bar"
                  options={studentForTime.options}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Pay Due per Teacher</h4>
              </CardBody>
            </Card>
          </GridItem>
          {/*
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="primary">
                <ChartistGraph
                  className="ct-chart"
                  data={hours_per_teacher}
                  type="Bar"
                  options={studentForTime.options}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Students by Longevity</h4>
                <p className={classes.cardCategory}></p>
              </CardBody>
            </Card>
          </GridItem>*/}
        </GridContainer>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(TeachersGraphs);
