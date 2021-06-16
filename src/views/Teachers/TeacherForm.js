import React from 'react'
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomSwitch from "components/CustomSwitch/CustomSwitch.js";
import CardBody from "components/Card/CardBody.js";

export default class TeacherForm extends React.Component {
  render() {
    const { teacher, onChange } = this.props

    if(!teacher) return null

    return(
      <CardBody>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <CustomSwitch
              label="Active"
              id="active"
              name="active"
              formControlProps={{ fullWidth: true }}
              onChange={onChange}
              checked={teacher.active}
            />
          </GridItem>
        </GridContainer>
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
        </GridContainer>


        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <CustomInput
              labelText='Calendar ID'
              id='calendar_id'
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                name: 'calendar_id',
                value: teacher.calendar_id || ""
              }}
            />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <CustomInput
              labelText='Hourly Rate'
              id='hourly_rate'
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                name: 'hourly_rate',
                value: teacher.hourly_rate
              }}
            />
          </GridItem>
        </GridContainer>

      </CardBody>
    )
  }
}
