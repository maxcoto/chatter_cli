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
//import { statuses, levels, leadSources, contactMethods } from 'variables/general'

export default class ScheduleForm extends React.Component {
  courseToSelect(list){
    return list.map(function(item){ return { id: item.id, name: item.name } })
  }
  
  render() {
    //[++]
    const { schedule, onChange, courses } = this.props
    //if(!schedule) return null
 
    return(
      <React.Fragment>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <TimePicker
              labelText='Monday At'
              id='monday_at'
              name='monday_at'
              onChange={onChange}
              inputProps={{
                name: 'monday_at',
                //value: schedule.monday_at
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <CustomInput
              labelText='Duration (hs)'
              id='monday_duration'
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                name: 'monday_duration',
                //value: schedule.monday_duration,
                type: 'number'
              }}
            />
          </GridItem>
        </GridContainer>
        
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <TimePicker
              labelText='Tuesday At'
              id='tuesday_at'
              name='tuesday_at'
              onChange={onChange}
              inputProps={{
                name: 'tuesday_at',
                //value: schedule.tuesday_at
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <CustomInput
              labelText='Duration (hs)'
              id='tuesday_duration'
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                name: 'tuesday_duration',
                //value: schedule.tuesday_duration,
                type: 'number'
              }}
            />
          </GridItem>
        </GridContainer>
        
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <TimePicker
              labelText='Tuesday At'
              id='tuesday_at'
              name='tuesday_at'
              onChange={onChange}
              inputProps={{
                name: 'tuesday_at',
                //value: schedule.tuesday_at
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <CustomInput
              labelText='Duration (hs)'
              id='tuesday_duration'
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                name: 'tuesday_duration',
                //value: schedule.tuesday_duration,
                type: 'number'
              }}
            />
          </GridItem>
        </GridContainer>
        
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <TimePicker
              labelText='Tuesday At'
              id='tuesday_at'
              name='tuesday_at'
              onChange={onChange}
              inputProps={{
                name: 'tuesday_at',
                //value: schedule.tuesday_at
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <CustomInput
              labelText='Duration (hs)'
              id='tuesday_duration'
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                name: 'tuesday_duration',
                //value: schedule.tuesday_duration,
                type: 'number'
              }}
            />
          </GridItem>
        </GridContainer>
        
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <TimePicker
              labelText='Tuesday At'
              id='tuesday_at'
              name='tuesday_at'
              onChange={onChange}
              inputProps={{
                name: 'tuesday_at',
                //value: schedule.tuesday_at
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <CustomInput
              labelText='Duration (hs)'
              id='tuesday_duration'
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                name: 'tuesday_duration',
                //value: schedule.tuesday_duration,
                type: 'number'
              }}
            />
          </GridItem>
        </GridContainer>
        
      </React.Fragment>
    )
  }
}


