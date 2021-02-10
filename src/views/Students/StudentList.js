import React from "react";
import API from '../../library/API'
// core components
import CustomInput from "components/CustomInput/CustomInput.js";

import AddIcon from "@material-ui/icons/Add";
import ShowIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "components/CustomButtons/Button.js";


// @material-ui/core
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import Accessibility from "@material-ui/icons/Accessibility";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import Stat from "../Stats/Stat.js"

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { defaultStats } from 'variables/general'

class StudentList extends React.Component {

  constructor(props) {
    super(props)
    this.state = { students: [], all: [] }
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

    this.setState({ ...this.state, students: list })
  }

  new(){
    this.props.history.push('/students/new');
  }

  show(student){
    this.props.history.push('/students/' + student.id, { student });
  }

  edit(student){
    this.props.history.push('/students/' + student.id + '/edit', { student });
  }

  delete(student){
    const self = this
    API.delete(
      'students',
      student.id,
      function(result){
        self.props.notifySuccess("Student has been deleted succesfully")
        window.location.reload()
      },
      function(error){
        console.log(error);
      }
    )
  }

  render() {
    const { classes } = this.props
    const { students } = this.state

    const stats = this.props.stats || defaultStats;

    const potentials = students.filter(function(s) { return s.active === false })
    const active = students.filter(function(s) { return s.active === true })

    return (
      <React.Fragment>

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
                <Table
                  tableHeaderColor="primary"
                  tableHead={["Name", "Email", "Level", "Status", "Actions"]}
                  tableData={
                    potentials.map(student => {
                      return [
                        student.first_name + " " + student.last_name,
                        student.email,
                        student.level.name,
                        student.status,
                        <div>
                          <Button color="info" aria-label="show" justIcon round
                                  onClick={ this.show.bind(this, student)} >
                            <ShowIcon />
                          </Button>
                          &nbsp;&nbsp;
                          <Button color="primary" aria-label="edit" justIcon round
                                  onClick={ this.edit.bind(this, student)} >
                            <EditIcon />
                          </Button>
                          &nbsp;&nbsp;
                          <Button color="danger" aria-label="delete" justIcon round
                                  onClick={ this.delete.bind(this, student)} >
                            <DeleteIcon />
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
                <Table
                  tableHeaderColor="primary"
                  tableHead={["Name", "Email", "Level", "Status", "Actions"]}
                  tableData={
                    active.map(student => {
                      return [
                        student.first_name + " " + student.last_name,
                        student.email,
                        student.level.name,
                        student.status,
                        <div>
                          <Button color="info" aria-label="show" justIcon round
                                  onClick={ this.show.bind(this, student)} >
                            <ShowIcon />
                          </Button>
                          &nbsp;&nbsp;
                          <Button color="primary" aria-label="edit" justIcon round
                                  onClick={ this.edit.bind(this, student)} >
                            <EditIcon />
                          </Button>
                          &nbsp;&nbsp;
                          <Button color="danger" aria-label="delete" justIcon round
                                  onClick={ this.delete.bind(this, student)} >
                            <DeleteIcon />
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

export default withStyles(styles, { withTheme: true })(StudentList);
