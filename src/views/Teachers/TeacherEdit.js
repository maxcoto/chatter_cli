import React from "react";
import API from '../../library/API'

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import TeacherForm from './TeacherForm.js'
import Table from "components/Table/Table.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

class TeacherEdit extends React.Component {

  constructor(props) {
    super(props)

    this.onSuccess = this.onSuccess.bind(this)
    this.onFailure = this.onFailure.bind(this)

    this.onClick = this.onClick.bind(this)
    this.onChange = this.onChange.bind(this)

    this.state = this.props.location.state || { teacher: null }

    API.configure(props.token)

    if(!this.state.teacher){
      const id = this.props.location.pathname.split("/")[2]
      API.get('teachers', id,
        function(response){
          this.setState({ teacher: response })
        }.bind(this),
        function(error){
          this.props.notifyError(error)
        }.bind(this)
      )
    }
  }

  onSuccess(response){
    const { id } = response
    this.props.history.push('/teachers/' + id, this.state);
    this.props.notifySuccess("Teacher updated successfully")
  }

  onFailure(error){
    console.log(error);
    this.props.notifyError(error)
  }

  onClick(){
    API.update('teachers', this.state.teacher.id, this.state, this.onSuccess, this.onFailure)
  }

  onChange(event){
    const { name, value } = event.target
    this.setState({ teacher: {...this.state.teacher, [name]: value } });
  }

  show(teacher){
    this.props.history.push('/teachers/' + teacher.id, { teacher });
  }

  render() {
    const { classes } = this.props
    const { teacher } = this.state
    if(!teacher) return null

    const courses = this.props.courses.filter(function(c){ return c.teacher_id === teacher.id });

    const individuals = courses.filter(function(c) { return c.max_students === 1 });
    const groups      = courses.filter(function(c) { return c.max_students > 1 });

    return(
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>{teacher.full_name}</h4>
            </CardHeader>

            <TeacherForm teacher={teacher} onChange={this.onChange} />

            <CardFooter>
              <Button color="primary" onClick={this.onClick}>Update</Button>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Groups</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={['Name', 'Level', 'Capacity', 'Occupants', 'Seats']}
                tableData={
                  groups.map(course => {
                    return [
                      course.name,
                      course.level.name,
                      course.max_students,
                      course.occupants,
                      course.seats
                    ]}
                  )
                }
              />
            </CardBody>
          </Card>
        </GridItem>


        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Individuals</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={['Name', 'Level', 'Capacity', 'Occupants', 'Seats']}
                tableData={
                  individuals.map(course => {
                    return [
                      course.name,
                      course.level.name,
                      course.max_students,
                      course.occupants,
                      course.seats
                    ]}
                  )
                }
              />
            </CardBody>
          </Card>
        </GridItem>


      </GridContainer>
    )
  }
}

export default withStyles(styles, { withTheme: true })(TeacherEdit);
