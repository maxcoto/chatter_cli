import React from 'react'

// core components
import GridItem from "components/Grid/GridItem.js"
import GridContainer from "components/Grid/GridContainer.js"
import CustomInput from "components/CustomInput/CustomInput.js"
import CustomSelect from "components/CustomSelect/CustomSelect.js"
import CardBody from "components/Card/CardBody.js"
import DatePicker from "components/DatePicker/DatePicker.js"

import { _kind } from 'variables/general'

export default class SubscriptionForm extends React.Component {
  
  studentToSelect(list){
    return list.map(function(item){ return { id: item.id, name: item.first_name + ' ' + item.last_name } })
  }
  
  render() {
    const { subscription, onChange, students, courses } = this.props
    if(!subscription) return null
 
    console.log("form:", subscription);
 
    return(
      <CardBody>
        
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomSelect
              labelText='Student'
              id='student'
              formControlProps={{ fullWidth: true }}
              values={ this.studentToSelect(students) }
              onChange={onChange}
              inputProps={{
                name: 'student_id',
                value: subscription.student_id || ''
              }}
            />
          </GridItem>
        </GridContainer>
      

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomSelect
              labelText='Course'
              id='course'
              formControlProps={{ fullWidth: true }}
              values={ courses }
              onChange={onChange}
              inputProps={{
                name: 'course_id',
                value: subscription.course_id || ''
              }}
            />
          </GridItem>
        </GridContainer>
      

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
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
        </GridContainer>
      

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <DatePicker
              labelText='Start Date'
              id='start_date'
              name='start_date'
              onChange={onChange}
              inputProps={{
                name: 'start_date',
                value: subscription.start_date
              }}
            />
          </GridItem>
        </GridContainer>
      

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <DatePicker
              labelText='Renewal Date'
              id='renewal_date'
              name='renewal_date'
              onChange={onChange}
              inputProps={{
                name: 'renewal_date',
                value: subscription.renewal_date
              }}
            />
          </GridItem>
        </GridContainer>
      

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText='Period'
              id='period'
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                name: 'period',
                value: subscription.period,
                type: 'number'
              }}
            />
          </GridItem>
        </GridContainer>
      

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText='Price'
              id='price'
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                name: 'price',
                value: subscription.price,
                type: 'number'
              }}
            />
          </GridItem>
        </GridContainer>
      

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText='Hours Left'
              id='hours_left'
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                name: 'hours_left',
                value: subscription.hours_left,
                type: 'number'
              }}
            />
          </GridItem>
        </GridContainer>
      
      </CardBody>
    )
  }
}


