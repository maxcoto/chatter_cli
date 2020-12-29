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
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)
  }
  
  onChange(event){
    this.props.onChange(this.props.index, event)
  }
  
  render() {
    //[++]
    const { schedule } = this.props
 
    return(
      <CardBody>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomSelect
              labelText='Day'
              id='day'
              formControlProps={{ fullWidth: true }}
              values={ _days }
              onChange={ this.onChange }
              inputProps={{
                name: 'day',
                value: schedule.day || '',
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <TimePicker
              labelText='Recurrent At'
              id='recurrent_at'
              name='recurrent_at'
              onChange={ this.onChange }
              inputProps={{
                name: 'recurrent_at',
                value: schedule.recurrent_at
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText='Duration (hs)'
              id='duration'
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange: this.onChange,
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


