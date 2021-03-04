import React from "react";
import ChartistGraph from "react-chartist";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { studentsForMonthChart, studentByLevel, studentForTime } from "variables/charts.js";

class StudentGraphs extends React.Component {

  render() {
    const { classes, stats, levels } = this.props
    const { students_by_months, students_by_levels, students_by_categories} = stats

    if(!students_by_categories || !students_by_levels || !students_by_months) return null

    return (
      <React.Fragment>
        <GridContainer>
          {/* active vs new students */}
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="primary">
                <ChartistGraph
                  className="ct-chart"
                  data={students_by_months}
                  type="Bar"
                  options={studentsForMonthChart.options}
                  responsiveOptions={studentsForMonthChart.responsiveOptions}
                  listener={studentsForMonthChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Active students vs New students</h4>
                <p className={classes.cardCategory}>Last 12 months</p>
              </CardBody>
            </Card>
          </GridItem>
          {/* students by level */}
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="primary">
                <ChartistGraph
                  className="ct-donut"
                  data={students_by_levels}
                  type="Pie"
                  options={studentByLevel.options}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Students Per Level</h4>
                {
                  levels.map((l, i) => {
                    return (
                      <p className={classes.cardCategory} key={i}>
                        { l.name[0].toUpperCase() + ": " + l.name }
                      </p>
                    )
                  })
                }
              </CardBody>
            </Card>
          </GridItem>
          {/* */}
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="primary">
                <ChartistGraph
                  className="ct-chart"
                  data={students_by_categories}
                  type="Bar"
                  options={studentForTime.options}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Students by Longevity</h4>
                <p className={classes.cardCategory}></p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(StudentGraphs);
