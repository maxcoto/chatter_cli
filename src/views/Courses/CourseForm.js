import React from 'react'

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomSelect from "components/CustomSelect/CustomSelect.js";
import CardBody from "components/Card/CardBody.js";


export default class CourseForm extends React.Component {

  //[++]
  teacherToSelect(list){
    return list.map(function(item){ return { id: item.id, name: item.first_name + ' ' + item.last_name } })
  }
  
  render() {
    const { course, onChange, levels, teachers } = this.props
    //[++]
    if(!course) return null
 
    return(
      <CardBody>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
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
          <GridItem xs={12} sm={12} md={6}>
            <CustomInput
              labelText='Max Students'
              id='max_students'
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                name: 'max_students',
                value: course.max_students,
                type: 'number'
              }}
            />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
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
          <GridItem xs={12} sm={12} md={12}>
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
          <GridItem xs={12} sm={12} md={12}>
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
          <GridItem xs={12} sm={12} md={6}>
            <CustomSelect
              labelText="Level"
              id="level"
              formControlProps={{ fullWidth: true }}
              values={ levels }
              onChange={onChange}
              inputProps={{
                name: "level_id",
                value: course.level_id || ''
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <CustomSelect
              labelText="Teacher"
              id="teacher"
              formControlProps={{ fullWidth: true }}
              values={ this.teacherToSelect(teachers) }
              onChange={ onChange }
              inputProps={{
                name: "teacher_id",
                value: course.teacher_id || ''
              }}
            />
          </GridItem>
        </GridContainer>
      
      </CardBody>
    )
  }
}


