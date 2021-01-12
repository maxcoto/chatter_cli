import React from 'react'

// core components
import GridItem from "components/Grid/GridItem.js"
import GridContainer from "components/Grid/GridContainer.js"
import CustomInput from "components/CustomInput/CustomInput.js"
import CustomSelect from "components/CustomSelect/CustomSelect.js"
import CardBody from "components/Card/CardBody.js"
import DatePicker from "components/DateTime/DatePicker.js"

import { _kind, _group_periods, _individual_periods, } from 'variables/general'

export default class SubscriptionForm extends React.Component {

  render() {
    const { subscription, onChange, courses, student } = this.props
    if(!subscription) return null

    const isGroup = subscription.kind === "Group"
    const isIndividual = subscription.kind === "Individual"

    var periods = []
    var filteredCourses = []

    if(isGroup) {
      periods = _group_periods;
      filteredCourses = courses.filter(function(c){
        return c.max_students > 1 && c.level_id === student.level_id
      })
    }
    if(isIndividual) {
      periods = _individual_periods;
      filteredCourses = courses.filter(function(c){
        return c.max_students === 1 && c.level_id === student.level_id
      })
    }

    filteredCourses = filteredCourses.map(function(c){
      return { id: c.id, name: c.name, disabled: c.seats === 0 }
    })

    const filteredCoursesIds = filteredCourses.map(function(f){ return f.id })
    const course_id = filteredCoursesIds.includes(subscription.course_id) ? subscription.course_id : ''

    console.log("form:", subscription);

    return(
      <CardBody>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <CustomSelect
              labelText='Kind'
              id='kind'
              formControlProps={{ fullWidth: true }}
              values={ _kind }
              onChange={onChange}
              inputProps={{
                name: 'kind',
                value: subscription.kind
              }}
            />
          </GridItem>

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
            <CustomSelect
              labelText='Period'
              id='period'
              formControlProps={{ fullWidth: true }}
              values={ periods }
              onChange={ onChange }
              inputProps={{
                name: 'period',
                value: subscription.period || '',
              }}
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={6}>
            <DatePicker
              labelText='Start Date'
              id='start_date'
              name='start_date'
              onChange={ onChange }
              inputProps={{
                name: 'start_date',
                value: subscription.start_date
              }}
            />
          </GridItem>
        </GridContainer>

        { subscription.renewal_date &&
          <GridContainer>
            <GridItem xs={12} sm={12} md={6} />
            <GridItem xs={12} sm={12} md={6}>
              <DatePicker
                disabled={true}
                labelText='Renewal Date'
                id='renewal_date'
                name='renewal_date'
                inputProps={{
                  name: 'renewal_date',
                  value: subscription.renewal_date
                }}
              />
            </GridItem>
          </GridContainer>
        }

        { subscription.price > 0 &&
          <GridContainer>
            <GridItem xs={12} sm={12} md={6} />
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText='Price'
                id='price'
                formControlProps={{ fullWidth: true }}
                inputProps={{
                  onChange,
                  name: 'price',
                  value: subscription.price,
                  type: 'number',
                  disabled: true
                }}
              />
            </GridItem>
          </GridContainer>
        }

        { subscription.hours_left > 0 && isIndividual &&
          <GridContainer>
            <GridItem xs={12} sm={12} md={6} />
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText='Hours Left'
                id='hours_left'
                formControlProps={{ fullWidth: true }}
                inputProps={{
                  onChange,
                  name: 'hours_left',
                  value: subscription.hours_left,
                  type: 'number',
                  disabled: true
                }}
              />
            </GridItem>
          </GridContainer>
        }

      </CardBody>
    )
  }
}
