import React from 'react'

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CardBody from "components/Card/CardBody.js";
import TimePicker from "components/DateTime/TimePicker.js"
import DatePicker from "components/DateTime/DatePicker.js"
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "components/CustomButtons/Button.js";

//[++]
//[+import_constants+]

export default class ScheduleForm extends React.Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)
  }

  onChange(event){
    const { schedule } = this.props
    const datetime = new Date(schedule.recurrent_at)
    var { name, value } = event.target

    if(name === "schedule_date" || name === "schedule_time"){
      const date = new Date(value)
      window.test = date
      if(name === "schedule_date"){
        datetime.setFullYear(date.getFullYear())
        datetime.setMonth(date.getMonth())
        datetime.setDate(date.getDate())
      }
      if(name === "schedule_time"){
        datetime.setHours(date.getHours())
        datetime.setMinutes(date.getMinutes())
      }
      name = "recurrent_at"
      value = datetime.toString()
    }

    this.props.onChange(this.props.index, { target: { name, value } })
  }

  delete(){
    this.props.onDelete(this.props.index)
  }

  render() {
    //[++]
    const { schedule } = this.props

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
                value: schedule.recurrent_at
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
                value: schedule.recurrent_at
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
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
          <GridItem xs={12} sm={12} md={1}>
            <Button style={{ marginTop: "27px" }} color="danger" aria-label="delete" justIcon round onClick={ this.delete.bind(this)} >
              <DeleteIcon />
            </Button>
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
