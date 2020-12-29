import React from 'react'

// core components
import GridItem from "components/Grid/GridItem.js"
import GridContainer from "components/Grid/GridContainer.js"
import CustomInput from "components/CustomInput/CustomInput.js"
import CustomSelect from "components/CustomSelect/CustomSelect.js"
import CardBody from "components/Card/CardBody.js"
import DatePicker from "components/DateTime/DatePicker.js"
import ScheduleForm from "../Schedules/ScheduleForm.js"

import { _kind, _group_periods, _individual_periods, } from 'variables/general'

export default class SubscriptionForm extends React.Component {

  teacherToSelect(list){
    return list.map(function(item){ return { id: item.id, name: item.first_name + ' ' + item.last_name } })
  }

  onPeriodChange(event){
    const { subscription: { kind }, onChange } = this.props
    const self = this;
    var callback = function(){};

    if( kind === "Individual"){
      const newEvent = { target: { name: "hours_left", value: event.target.value } }
      callback = function(){ onChange(newEvent) };
    }
    
    onChange(event, callback)
  }
  
  onStartDateChange(event){
    const { subscription: { kind, period }, onChange } = this.props
    const self = this;
    var callback = function(){};

    if( kind === "Group"){
      const newDate = new Date(event.target.value);
      newDate.setDate(newDate.getDate() + period * 30);
      const newEvent = { target: { name: "renewal_date", value: newDate.toString() } }
      callback = function(){ onChange(newEvent) };
    }
    
    if( kind === "Individual"){
      const newDate = new Date(event.target.value);
      newDate.setDate(newDate.getDate() + period * 30);
      const newEvent = { target: { name: "renewal_date", value: newDate.toString() } }
      callback = function(){ onChange(newEvent) };
    }

    onChange(event, callback)
  }

  render() {
    const { subscription, onChange, courses, student, teachers } = this.props
    if(!subscription) return null
 
    const filteredCourses = courses.filter(function(c){
       return c.max_students > 1 && c.level_id === student.level_id
    })

    const filteredCoursesIds = filteredCourses.map(function(f){ return f.id })
    const course_id = filteredCoursesIds.includes(course_id) ? subscription.course_id : ''
    const isGroup = subscription.kind === "Group"
    const isIndividual = subscription.kind === "Individual"

    var periods = []
    if(isGroup) periods = _group_periods;
    if(isIndividual) periods = _individual_periods;
 
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
          
          { isGroup &&
            <GridItem xs={12} sm={12} md={6}>
              <CustomSelect
                labelText='Course'
                id='course'
                formControlProps={{ fullWidth: true }}
                values={ filteredCourses }
                onChange={onChange}
                inputProps={{
                  name: 'course_id',
                  value: course_id,
                  disabled: true
                }}
              />
            </GridItem>
          }
          
          { isIndividual &&
            <GridItem xs={12} sm={12} md={6}>
              <CustomSelect
                labelText='Teacher'
                id='teacher'
                formControlProps={{ fullWidth: true }}
                values={ this.teacherToSelect(teachers) }
                onChange={onChange}
                inputProps={{
                  name: 'teacher_id',
                  value: subscription.teacher_id || ''
                }}
              />
            </GridItem>
          }
        </GridContainer>
      
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <CustomSelect
              labelText='Period'
              id='period'
              formControlProps={{ fullWidth: true }}
              values={ periods }
              onChange={ this.onPeriodChange.bind(this) }
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
              onChange={ this.onStartDateChange.bind(this) }
              inputProps={{
                name: 'start_date',
                value: subscription.start_date
              }}
            />
          </GridItem>
        </GridContainer>

        { isIndividual &&
          <ScheduleForm />
        }

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
        <GridContainer>
          <GridItem xs={12} sm={12} md={6} />
          { isIndividual &&
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
          }
        </GridContainer>

      </CardBody>
    )
  }
}


