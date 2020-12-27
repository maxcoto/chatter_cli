import React from 'react'

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomSelect from "components/CustomSelect/CustomSelect.js";
import CardBody from "components/Card/CardBody.js";

import { _teacher_ids } from 'variables/general'


export default class CourseForm extends React.Component {
  render() {
    const { course, onChange } = this.props
    if(!course) return null
 
    return(
      <CardBody>
        
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText='Name'
              id='name'
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                name: 'name',
                value: course.name
              }}
            />
          </GridItem>
        </GridContainer>
      

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText='Classroom Link'
              id='classroom_link'
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                name: 'classroom_link',
                value: course.classroom_link
              }}
            />
          </GridItem>
        </GridContainer>
      

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText='Meet Link'
              id='meet_link'
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                name: 'meet_link',
                value: course.meet_link
              }}
            />
          </GridItem>
        </GridContainer>
      

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText='Event Id'
              id='event_id'
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                name: 'event_id',
                value: course.event_id
              }}
            />
          </GridItem>
        </GridContainer>
      

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText='Level'
              id='level'
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                name: 'level',
                value: course.level
              }}
            />
          </GridItem>
        </GridContainer>
      

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomSelect
              labelText='Teacher Id'
              id='teacher_id'
              formControlProps={{ fullWidth: true }}
              values={ _teacher_ids }
              onChange={onChange}
              inputProps={{
                name: 'teacher_id',
                value: course.teacher_id
              }}
            />
          </GridItem>
        </GridContainer>
      
      </CardBody>
    )
  }
}


