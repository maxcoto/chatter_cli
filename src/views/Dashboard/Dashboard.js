import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { withStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import DateRange from "@material-ui/icons/DateRange";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import TrialList from "../Trials/TrialList.js"

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { defaultStats } from 'variables/general'

class Dashboard extends React.Component {

  render(){
    const { classes } = this.props;
    const stats = this.props.stats || defaultStats;

    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="primary" stats icon>
                <CardIcon color="primary">
                  <Icon>school</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Active Students</p>
                <h3 className={classes.cardTitle}>{stats.current_active_students}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange /> Current
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Icon>thumb_up</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>New Students</p>
                <h3 className={classes.cardTitle}>{stats.new_students_this_week}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange /> This Week
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <Icon>thumb_down</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Dropped Students</p>
                <h3 className={classes.cardTitle}>{stats.dropped_students_this_week}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange /> This Week
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Icon>schedule</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Hours of Class</p>
                <h3 className={classes.cardTitle}>{stats.hours_of_class_this_month}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange /> This Month
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>

          <TrialList trials={this.props.trials} />

          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="danger">
                <h4 className={classes.cardTitleWhite}>Unpaid Subscriptions</h4>
                <p className={classes.cardCategoryWhite}>2 Weeks Overdue</p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="danger"
                  tableHead={["Student", "Renewal Date", "Price", "Group"]}
                  tableData={
                    stats.overdue_subscriptions.map(subscription => {
                      const datetime = subscription.renewal_date.split("T")
                      const date = datetime[0]
                      const times = datetime[1].split(":")
                      const hour = times[0]
                      const minutes = times[1]
                      return [
                        subscription.student.first_name + " " + subscription.student.last_name,
                        date + " @ " + hour + ":" + minutes,
                        "$ " + subscription.price,
                        subscription.course.name
                      ]
                    })
                  }
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Dashboard);



// TASKS LIST EXAMPLES

// <GridItem xs={12} sm={12} md={6}>
//   <CustomTabs
//     title="Tasks:"
//     headerColor="primary"
//     tabs={[
//       {
//         tabName: "Bugs",
//         tabIcon: BugReport,
//         tabContent: (
//           <Tasks
//             checkedIndexes={[0, 3]}
//             tasksIndexes={[0, 1, 2, 3]}
//             tasks={bugs}
//           />
//         )
//       },
//       {
//         tabName: "Website",
//         tabIcon: Code,
//         tabContent: (
//           <Tasks
//             checkedIndexes={[0]}
//             tasksIndexes={[0, 1]}
//             tasks={website}
//           />
//         )
//       },
//       {
//         tabName: "Server",
//         tabIcon: Cloud,
//         tabContent: (
//           <Tasks
//             checkedIndexes={[1]}
//             tasksIndexes={[0, 1, 2]}
//             tasks={server}
//           />
//         )
//       }
//     ]}
//   />
// </GridItem>

// GRAPHS EXAMPLES

// <GridContainer>
//   <GridItem xs={12} sm={12} md={4}>
//     <Card chart>
//       <CardHeader color="success">
//         <ChartistGraph
//           className="ct-chart"
//           data={dailySalesChart.data}
//           type="Line"
//           options={dailySalesChart.options}
//           listener={dailySalesChart.animation}
//         />
//       </CardHeader>
//       <CardBody>
//         <h4 className={classes.cardTitle}>Daily Sales</h4>
//         <p className={classes.cardCategory}>
//           <span className={classes.successText}>
//             <ArrowUpward className={classes.upArrowCardCategory} /> 55%
//           </span>{" "}
//           increase in today sales.
//         </p>
//       </CardBody>
//       <CardFooter chart>
//         <div className={classes.stats}>
//           <AccessTime /> updated 4 minutes ago
//         </div>
//       </CardFooter>
//     </Card>
//   </GridItem>
//   <GridItem xs={12} sm={12} md={4}>
//     <Card chart>
//       <CardHeader color="warning">
//         <ChartistGraph
//           className="ct-chart"
//           data={emailsSubscriptionChart.data}
//           type="Bar"
//           options={emailsSubscriptionChart.options}
//           responsiveOptions={emailsSubscriptionChart.responsiveOptions}
//           listener={emailsSubscriptionChart.animation}
//         />
//       </CardHeader>
//       <CardBody>
//         <h4 className={classes.cardTitle}>Email Subscriptions</h4>
//         <p className={classes.cardCategory}>Last Campaign Performance</p>
//       </CardBody>
//       <CardFooter chart>
//         <div className={classes.stats}>
//           <AccessTime /> campaign sent 2 days ago
//         </div>
//       </CardFooter>
//     </Card>
//   </GridItem>
//   <GridItem xs={12} sm={12} md={4}>
//     <Card chart>
//       <CardHeader color="danger">
//         <ChartistGraph
//           className="ct-chart"
//           data={completedTasksChart.data}
//           type="Line"
//           options={completedTasksChart.options}
//           listener={completedTasksChart.animation}
//         />
//       </CardHeader>
//       <CardBody>
//         <h4 className={classes.cardTitle}>Completed Tasks</h4>
//         <p className={classes.cardCategory}>Last Campaign Performance</p>
//       </CardBody>
//       <CardFooter chart>
//         <div className={classes.stats}>
//           <AccessTime /> campaign sent 2 days ago
//         </div>
//       </CardFooter>
//     </Card>
//   </GridItem>
// </GridContainer>
