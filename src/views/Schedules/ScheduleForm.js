import React from 'react'

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomSelect from "components/CustomSelect/CustomSelect.js";
import CardBody from "components/Card/CardBody.js";
import TimePicker from "components/DateTime/TimePicker.js"

//[++]
//[+import_constants+]
import { _days } from 'variables/general'

export default class ScheduleForm extends React.Component {
  courseToSelect(list){
    return list.map(function(item){ return { id: item.id, name: item.name } })
  }
  
  render() {
    //[++]
    const { schedule, onChange, courses } = this.props
    //if(!schedule) return null
 
    return(
      <CardBody>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomSelect
              labelText='Day'
              id='day'
              formControlProps={{ fullWidth: true }}
              values={ _days }
              onChange={ onChange }
              inputProps={{
                name: 'day',
                //value: subscription.period || '',
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <TimePicker
              labelText='Recurrent At'
              id='recurrent_at'
              name='recurrent_at'
              onChange={onChange}
              inputProps={{
                name: 'recurrent_at',
                //value: schedule.monday_at
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText='Duration (hs)'
              id='duration'
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                name: 'duration',
                //value: schedule.monday_duration,
                type: 'number'
              }}
            />
          </GridItem>
        </GridContainer>
      </CardBody>
    )
  }
}


