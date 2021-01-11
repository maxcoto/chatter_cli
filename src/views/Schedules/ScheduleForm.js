import React from 'react'

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomSelect from "components/CustomSelect/CustomSelect.js";
import CardBody from "components/Card/CardBody.js";
import TimePicker from "components/DateTime/TimePicker.js"
import DatePicker from "components/DateTime/DatePicker.js"

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

    const [schedule_date, schedule_time] = schedule.recurrent_at.split("T")

    return(
      <CardBody>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <DatePicker
              labelText='Date'
              id='schedule_date'
              name='schedule_date'
              onChange={this.onChange}
              inputProps={{
                name: 'schedule_date',
                value: schedule_date
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <TimePicker
              labelText='Time'
              id='schedule_time'
              name='schedule_time'
              onChange={ this.onChange }
              inputProps={{
                name: 'schedule_time',
                value: schedule_time
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
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <CustomInput
              labelText='Meeting Link'
              id='meeting_link'
              disabled='true'
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange: this.onChange,
                name: 'meeting_link',
                value: schedule.meet_link,
                disabled: true
              }}
            />
          </GridItem>
        </GridContainer>
      </CardBody>
    )
  }
}
