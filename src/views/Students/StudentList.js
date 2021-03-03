import React from "react";
//import API from '../../library/API'
// core components
import CustomInput from "components/CustomInput/CustomInput.js";

import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import Button from "components/CustomButtons/Button.js";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import CustomSelect from "components/CustomSelect/CustomSelect.js"
import CustomSwitch from "components/CustomSwitch/CustomSwitch.js";

import Stat from "../Stats/Stat.js"
import StudentGraphs from "./StudentGraphs"

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { defaultStats, _statuses, _status } from 'variables/general'
import { formatDate } from 'library/helpers/functions.js'

_statuses.push({ id: null, name: 'all' })
_status.push({ id: null, name: 'all' })

class StudentList extends React.Component {

  constructor(props) {
    super(props)
    this.state = { students: [], all: [], filters: {} }
  }

  componentDidMount(){
    if(this.props.students !== this.state.all){
      const { students } = this.props
      this.setState({ students, all: students })
    }
  }

  componentDidUpdate(){
    if(this.props.students !== this.state.all){
      const { students } = this.props
      this.setState({ students, all: students })
    }
  }

  filter(key){
    return function(event){
      const value = event.target.value;
      var list = this.state.all
      if(value !== null){
        list = list.filter(function(item){
          return item[key] === value
        }) || []
      }

      const filters = {}
      filters[key] = value

      this.setState({ ...this.state, students: list, filters })
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
          item.email.toLowerCase().includes(lookup) ||
          (item.status && item.status.toLowerCase().includes(lookup))
        )
      }) || []
    }

    this.setState({ ...this.state, students: list })
  }

  new(){
    this.props.history.push('/students/new');
  }

  edit(student){
    this.props.history.push('/students/' + student.id, { student });
  }

  toggle(student, event){
    // console.log(student);
    // console.log(event);
  }

  render() {
    const { classes, levels } = this.props
    const { students } = this.state

    const stats = this.props.stats || defaultStats;

    const potentials = students.filter(function(s) { return s.activated_at === null })
    const active = students.filter(function(s) { return s.activated_at !== null })

    return (
      <React.Fragment>

        <StudentGraphs classes={classes} stats={stats} levels={levels} />

        <GridContainer>
          <Stat
            title={"Active Students"}
            value={stats.current_active_students}
            icon={"school"}
            width={4}
          />

          <Stat
            title={"New Students"}
            value={stats.new_students_this_month}
            range={"This Month"}
            color={"success"}
            width={4}
          />

          <Stat
            title={"Dropped Students"}
            value={stats.dropped_students_this_month}
            range={"This Month"}
            color={"danger"}
            width={4}
            icon={"thumb_down"}
          />

        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <div style={{ float: "left" }}>
                  <h4 className={classes.cardTitleWhite}>Potentials</h4>
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

                <GridItem xs={12} sm={12} md={3}>
                  <CustomSelect
                    labelText='Status'
                    formControlProps={{ fullWidth: true }}
                    values={ _statuses }
                    onChange={this.filter("status").bind(this)}
                    inputProps={{
                      name: 'status',
                      value: this.state.filters["status"]
                    }}
                  />
                </GridItem>

                <Table
                  tableHeaderColor="primary"
                  tableHead={["Name", "Course", "Level", "Trial Date", "Status", "Notes", "Actions"]}
                  tableData={
                    potentials.map(student => {
                      return [
                        student.full_name,
                        student.trial_course ? student.trial_course.name : "", //.name,
                        student.level.name,
                        formatDate((student.trial && student.trial.class_date)),
                        student.status,
                        student.notes,
                        <div>
                          <Button color="primary" aria-label="edit" justIcon round onClick={ this.edit.bind(this, student)} >
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
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <div style={{ float: "left" }}>
                  <h4 className={classes.cardTitleWhite}>Students</h4>
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

                <GridItem xs={12} sm={12} md={3}>
                  <CustomSelect
                    labelText='Status'
                    formControlProps={{ fullWidth: true }}
                    values={ _status }
                    onChange={this.filter("active").bind(this)}
                    inputProps={{
                      name: 'active',
                      value: this.state.filters["active"]
                    }}
                  />
                </GridItem>

                <Table
                  tableHeaderColor="primary"
                  tableHead={["Name", "Course", "Level", "Months Active", "Status", "Actions"]}
                  tableData={
                    active.map(student => {
                      return [
                        student.full_name,
                        student.subscription_course ? student.subscription_course.name : "",
                        student.level.name,
                        student.longevity,
                        <CustomSwitch
                          name="active"
                          checked={student.active}
                          onChange={this.toggle.bind(this, student)}
                          disabled={true}
                        />,
                        <Button color="primary" aria-label="edit" justIcon round
                                onClick={ this.edit.bind(this, student)} >
                          <EditIcon />
                        </Button>
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

export default withStyles(styles, { withTheme: true })(StudentList);



// DELETE FUCTIONALITY

// import ShowIcon from "@material-ui/icons/Visibility";
// import DeleteIcon from "@material-ui/icons/Delete";

// delete(student){
//   const self = this
//   API.delete(
//     'students',
//     student.id,
//     function(result){
//       self.props.notifySuccess("Student has been deleted succesfully")
//       window.location.reload()
//     },
//     function(error){
//       console.log(error);
//     }
//   )
// }


// <Button color="danger" aria-label="delete" justIcon round
//         onClick={ this.delete.bind(this, student)} >
//   <DeleteIcon />
// </Button>
