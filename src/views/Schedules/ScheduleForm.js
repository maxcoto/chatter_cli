import React from 'react'

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CardBody from "components/Card/CardBody.js";
import TimePicker from "components/DateTime/TimePicker.js"
import DatePicker from "components/DateTime/DatePicker.js"

//[++]
//[+import_constants+]

export default class ScheduleForm extends React.Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)
  }

  onChange(event){
    const { schedule } = this.props
    var [schedule_date, schedule_time] = schedule.recurrent_at.split("T")
    var { name, value } = event.target

    if(name === "schedule_date" || name === "schedule_time"){
      const date = new Date(value)
      window.test = date
      if(name === "schedule_date"){
        const year = date.getFullYear() + "-"
        const month = date.getMonth() + 1 + "-"
        const day = date.getDate()
        schedule_date = year + month + day
      }
      if(name === "schedule_time"){
        schedule_time = value.split("T")[1]
      }
      name = "recurrent_at"
      value = schedule_date + "T" + schedule_time
    }

    console.log(name, value);
    this.props.onChange(this.props.index, { target: { name, value } })
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

        { schedule.meet_link &&
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
        }
      </CardBody>
    )
  }
}
