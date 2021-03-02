import React from 'react'

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomSwitch from "components/CustomSwitch/CustomSwitch.js";
import CustomSelect from "components/CustomSelect/CustomSelect.js";
import CardBody from "components/Card/CardBody.js";

import { _statuses, _lead_sources, _contact_methods } from 'variables/general'
import { formatDateTime } from 'library/helpers/functions.js'

export default class StudentForm extends React.Component {

  //[++]
  // what happens if there is something diff than name to be displayed ?
  toSelect(list){
    return list.map(function(item){ return { id: item.id, name: item.name } })
  }

  render() {
    const { student, onChange, levels } = this.props
    //[++]
    if(!student) return null

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
              checked={student.active}
            />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <CustomInput
              labelText="First Name"
              id="first_name"
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                value: student.first_name,
                name: "first_name"
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <CustomInput
              labelText="Last Name"
              id="last_name"
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                name: "last_name",
                value: student.last_name
              }}
            />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <CustomInput
              labelText="Email"
              id="email"
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                name: "email",
                value: student.email
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <CustomInput
              labelText="Phone"
              id="phone"
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                value: student.phone,
                name: "phone"
              }}
            />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <CustomSelect
              labelText="Contact Method"
              id="contact_method"
              formControlProps={{ fullWidth: true }}
              values={ _contact_methods }
              onChange={onChange}
              inputProps={{
                name: "contact_method",
                value: student.contact_method
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <CustomSelect
              labelText="Lead Source"
              id="lead_source"
              formControlProps={{ fullWidth: true }}
              values={ _lead_sources }
              onChange={onChange}
              inputProps={{
                name: "lead_source",
                value: student.lead_source
              }}
            />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <CustomSelect
              labelText="Level"
              id="level_id"
              formControlProps={{ fullWidth: true }}
              values={ this.toSelect(levels) }
              onChange={onChange}
              inputProps={{
                name: "level_id",
                value: student.level_id || ''
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <CustomSelect
              labelText="Status"
              id="status"
              formControlProps={{ fullWidth: true }}
              values={ _statuses }
              onChange={onChange}
              inputProps={{
                name: "status",
                value: student.status
              }}
            />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <CustomInput
              labelText="Objectives"
              id="objectives"
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                multiline: true,
                rows: 5,
                name: "objectives",
                value: student.objectives || ""
              }}
            />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <CustomInput
              labelText="Notes"
              id="notes"
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                multiline: true,
                rows: 5,
                name: "notes",
                value: student.notes || ""
              }}
            />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <CustomInput
              labelText='Start Date'
              formControlProps={{ fullWidth: true }}
              inputProps={{
                name: 'started_at',
                value: student.started_at ? formatDateTime(student.started_at) : "not started",
                disabled: true
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <CustomInput
              labelText='Longevity'
              formControlProps={{ fullWidth: true }}
              inputProps={{
                name: 'longevity',
                value: student.longevity + " Months",
                disabled: true
              }}
            />
          </GridItem>
        </GridContainer>
      </CardBody>
    )
  }
}
