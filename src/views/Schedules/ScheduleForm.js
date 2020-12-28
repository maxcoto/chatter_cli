import React from 'react'

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomSelect from "components/CustomSelect/CustomSelect.js";
import CardBody from "components/Card/CardBody.js";
import DatePicker from "components/DatePicker/DatePicker.js"

//[++]
//[+import_constants+]
//import { statuses, levels, leadSources, contactMethods } from 'variables/general'

export default class ScheduleForm extends React.Component {
  courseToSelect(list){
    return list.map(function(item){ return { id: item.id, name: item.name } })
  }
  
  render() {
    //[++]
    const { schedule, onChange, courses } = this.props
    if(!schedule) return null
 
    return(
      <CardBody>
        
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomSelect
              labelText='Course'
              id='course'
              formControlProps={{ fullWidth: true }}
              values={ this.courseToSelect(courses) }
              onChange={onChange}
              inputProps={{
                name: 'course_id',
                value: schedule.course_id || ''
              }}
            />
          </GridItem>
        </GridContainer>
      

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <DatePicker
              labelText='Recurrent At'
              id='recurrent_at'
              inputProps={{
                onChange,
                name: 'recurrent_at',
                value: schedule.recurrent_at
              }}
            />
          </GridItem>
        </GridContainer>
      

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText='Duration'
              id='duration'
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                name: 'duration',
                value: schedule.duration,
                type: 'number'
              }}
            />
          </GridItem>
        </GridContainer>
      
      </CardBody>
    )
  }
}


