import React from 'react'

// core components
import GridItem from "components/Grid/GridItem.js"
import GridContainer from "components/Grid/GridContainer.js"
import CustomSelect from "components/CustomSelect/CustomSelect.js"
import CardBody from "components/Card/CardBody.js"
import DatePicker from "components/DateTime/DatePicker.js"

export default class TrialForm extends React.Component {

  render() {
    const { trial, onChange, courses, student } = this.props
    if(!trial) return null

    var filteredCourses = []

    filteredCourses = courses.filter(function(c){
      return c.max_students > 1 && c.level_id === student.level_id
    })

    filteredCourses = filteredCourses.map(function(c){
      return { id: c.id, name: c.name, disabled: c.seats === 0 }
    })

    const filteredCoursesIds = filteredCourses.map(function(f){ return f.id })
    const course_id = filteredCoursesIds.includes(trial.course_id) ? trial.course_id : ''


    // TODO - RESOLVE CLASS DATETIME FROM AVAILABILITY

    return(
      <CardBody>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <CustomSelect
              labelText='Course'
              id='course'
              formControlProps={{ fullWidth: true }}
              values={ filteredCourses }
              onChange={onChange}
              inputProps={{
                name: 'course_id',
                value: course_id
              }}
            />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <DatePicker
              labelText='Class Date'
              id='class_date'
              name='class_date'
              onChange={ onChange }
              inputProps={{
                name: 'class_date',
                value: trial.class_date
              }}
            />
          </GridItem>
        </GridContainer>

      </CardBody>
    )
  }
}
