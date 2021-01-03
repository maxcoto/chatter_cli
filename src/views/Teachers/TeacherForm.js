import React from 'react'

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomSelect from "components/CustomSelect/CustomSelect.js";
import CardBody from "components/Card/CardBody.js";

import { _status } from 'variables/general'


export default class TeacherForm extends React.Component {
  render() {
    const { teacher, onChange } = this.props
    if(!teacher) return null
 
    return(
      <CardBody>
        
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <CustomInput
              labelText='First Name'
              id='first_name'
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                name: 'first_name',
                value: teacher.first_name
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <CustomInput
              labelText='Last Name'
              id='last_name'
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                name: 'last_name',
                value: teacher.last_name
              }}
            />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <CustomInput
              labelText='Email'
              id='email'
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                name: 'email',
                value: teacher.email
              }}
            />
          </GridItem>
          
          <GridItem xs={12} sm={12} md={6}>
            <CustomSelect
              labelText='Status'
              id='status'
              formControlProps={{ fullWidth: true }}
              values={ _status }
              onChange={onChange}
              inputProps={{
                name: 'status',
                value: teacher.status
              }}
            />
          </GridItem>
        </GridContainer>
      

        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <CustomInput
              labelText='Calendar ID'
              id='calendar_id'
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                name: 'calendar_id',
                value: teacher.calendar_id
              }}
            />
          </GridItem>
        </GridContainer>
      
      </CardBody>
    )
  }
}


