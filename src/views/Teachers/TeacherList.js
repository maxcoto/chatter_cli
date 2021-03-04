import React from "react";
//import API from '../../library/API'

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import Button from "components/CustomButtons/Button.js";

import CustomSwitch from "components/CustomSwitch/CustomSwitch.js";
import Stat from "../Stats/Stat.js"

import TeachersGraphs from "./TeachersGraphs"

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { defaultStats } from 'variables/general'


class TeacherList extends React.Component {

  constructor(props) {
    super(props)
    this.state = { teachers: [], all: [] }
  }

  componentDidMount(){
    if(this.props.teachers !== this.state.all){
      const { teachers } = this.props
      this.setState({ teachers, all: teachers })
    }
  }

  componentDidUpdate(){
    if(this.props.teachers !== this.state.all){
      const { teachers } = this.props
      this.setState({ teachers, all: teachers })
    }
  }

  search(event){
    const lookup = event.target.value.trim().toLowerCase();
    var list = this.state.all
    if(lookup !== ''){
      list = list.filter(function(item){
        return (
          item.first_name.toLowerCase().includes(lookup) ||
					item.last_name.toLowerCase().includes(lookup) ||
					item.email.toLowerCase().includes(lookup)
        )
      }) || []
    }

    this.setState({ ...this.state, teachers: list })
  }

  new(){
    this.props.history.push('/teachers/new');
  }

  edit(teacher){
    this.props.history.push('/teachers/' + teacher.id, { teacher });
  }

  toggle(teacher, event){
    // console.log(teacher);
    // console.log(event);
  }

  render() {
    const { classes } = this.props
    const { teachers } = this.state
    const stats = this.props.stats || defaultStats;

    const activeTeachersCount = teachers.filter(function(t){ return t.active === true }).length

    return (
      <React.Fragment>
        <TeachersGraphs classes={classes} stats={stats} teachers={teachers} />
        <GridContainer>
          <Stat
            title={"Active Teachers"}
            value={activeTeachersCount}
            icon={"school"}
            width={4}
          />

          <Stat
            title={"Hours of Class"}
            value={stats.hours_of_class_this_month.toFixed(2)}
            range={"This Month"}
            color={"info"}
            icon={"schedule"}
            width={4}
          />

          <Stat
            title={"Teacher Pay Due"}
            value={"$ " + stats.teacher_pay_due_this_month}
            range={"This Month"}
            color={"warning"}
            width={4}
            icon={"account_balance"}
          />

        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <div style={{ float: "left" }}>
                  <h4 className={classes.cardTitleWhite}>Teachers</h4>
                  <p className={classes.cardCategoryWhite}>All</p>
                </div>

                <div style={{ float: "right" }}>
                  <CustomInput
                    labelText="Search"
                    inputProps={{ onChange: this.search.bind(this) }}
                    formControlProps={{ style: { margin: 0 }, fullWidth: true }}
                  />
                </div>
              </CardHeader>
              <CardBody>
                <Button color="warning" aria-label="add" justIcon round onClick={ this.new.bind(this)} >
                  <AddIcon />
                </Button>
                <Table
                  tableHeaderColor="primary"
                  tableHead={['Name', '# Groups', '# Inviduals', 'Total Students', 'Monthly Hours', 'Pay Due', 'Active', 'Actions']}
                  tableData={
                    teachers.map(teacher => {
                      const courses = this.props.courses.filter(function(c){ return c.teacher_id === teacher.id });
                      const individualCount = courses.filter(function(c){ return c.max_students === 1 }).length;
                      const groupCount = courses.length - individualCount;
                      const totalStudents = courses.reduce(function(count, c) { return (count + c.occupants) }, 0);

                      return [
                        teacher.full_name,
                        groupCount,
                        individualCount,
                        totalStudents,
                        teacher.monthly_hours,
                        "$ " + (teacher.monthly_hours * teacher.hourly_rate),
                        <CustomSwitch
                          name="active"
                          checked={teacher.active}
                          onChange={this.toggle.bind(this, teacher)}
                          disabled={true}
                        />,
                        <div>
                          <Button color="primary" aria-label="edit" justIcon round onClick={ this.edit.bind(this, teacher)} >
                            <EditIcon />
                          </Button>
                        </div>
                      ]}
                    )
                  }
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(TeacherList);


// DELETE FUNCTIONALITY

// import ShowIcon from "@material-ui/icons/Visibility";
// import DeleteIcon from "@material-ui/icons/Delete";

// delete(teacher){
//   const self = this
//   API.delete(
//     'teachers',
//     teacher.id,
//     function(result){
//       self.props.notifySuccess("Teacher has been deleted succesfully")
//       window.location.reload()
//     },
//     function(error){
//       console.log(error);
//     }
//   )
// }
//
// <Button color="danger" aria-label="delete" justIcon round onClick={ this.delete.bind(this, teacher)} >
//   <DeleteIcon />
// </Button>
