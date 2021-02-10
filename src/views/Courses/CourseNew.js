import React from 'react'
import API from '../../library/API'

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CourseForm from './CourseForm.js'
import ScheduleNew from "../Schedules/ScheduleNew.js"


import { defaultCourse } from 'variables/general'

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";


class CourseNew extends React.Component {

  constructor(props) {
    super(props)

    this.state = { course: defaultCourse }

    this.onSuccess = this.onSuccess.bind(this)
    this.onFailure = this.onFailure.bind(this)

    this.onClick = this.onClick.bind(this)
    this.onChange = this.onChange.bind(this)

    API.configure(props.token)
  }

  onSuccess(response){
    const { id } = response
    this.props.history.push('/courses/' + id + '/edit', { course: response } );
    this.props.notifySuccess("Course created succesfully")
  }

  onFailure(error){
    this.props.notifyError(error)
  }

  onClick(){
    API.create('courses', this.state, this.onSuccess, this.onFailure)
  }

  onChange(event){
    const { name, value } = event.target
    this.setState({ course: {...this.state.course, [name]: value } });
  }

  render() {
    const { classes, levels, teachers } = this.props
    //[++]
    const { course } = this.state

    return(
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>New Course</h4>
            </CardHeader>

            <CourseForm
              course={course}
              levels={levels}
              teachers={teachers}
              onChange={this.onChange}
            />

            <CardFooter>
              <Button color="primary" onClick={this.onClick} >
                Create
              </Button>
            </CardFooter>
          </Card>
        </GridItem>

        <ScheduleNew course={course} onChange={this.onChange} />

      </GridContainer>
    )
  }
}

export default withStyles(styles, { withTheme: true })(CourseNew);
