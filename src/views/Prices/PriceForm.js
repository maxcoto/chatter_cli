import React from 'react'

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomSelect from "components/CustomSelect/CustomSelect.js";
import CardBody from "components/Card/CardBody.js";

import { _kind, _frecuency } from 'variables/general'

export default class PriceForm extends React.Component {
  render() {
    const { price, onChange, levels } = this.props
    if(!price) return null
 
    return(
      <CardBody>
        
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomSelect
              labelText='Level'
              id='level'
              formControlProps={{ fullWidth: true }}
              values={ levels }
              onChange={onChange}
              inputProps={{
                name: 'level_id',
                value: price.level_id || ''
              }}
            />
          </GridItem>
        </GridContainer>
      

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomSelect
              labelText='Kind'
              id='kind'
              formControlProps={{ fullWidth: true }}
              values={ _kind }
              onChange={onChange}
              inputProps={{
                name: 'kind',
                value: price.kind
              }}
            />
          </GridItem>
        </GridContainer>
      

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText='Period'
              id='period'
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                name: 'period',
                value: price.period,
                type: 'number'
              }}
            />
          </GridItem>
        </GridContainer>
      

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomSelect
              labelText='Frecuency'
              id='frecuency'
              formControlProps={{ fullWidth: true }}
              values={ _frecuency }
              onChange={onChange}
              inputProps={{
                name: 'frecuency',
                value: price.frecuency
              }}
            />
          </GridItem>
        </GridContainer>
      

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText='Amount'
              id='amount'
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                name: 'amount',
                value: price.amount,
                type: 'number'
              }}
            />
          </GridItem>
        </GridContainer>
      
      </CardBody>
    )
  }
}


