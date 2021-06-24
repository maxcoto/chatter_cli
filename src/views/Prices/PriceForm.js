import React from 'react'

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomSelect from "components/CustomSelect/CustomSelect.js";
import CardBody from "components/Card/CardBody.js";

import { _kind, _group_periods, _individual_periods } from 'variables/general'

export default class PriceForm extends React.Component {
  render() {
    const { price, onChange, levels } = this.props
    if(!price) return null
    
    
    const isGroup = price.kind === "Group"
    const isIndividual = price.kind === "Individual"
    var periods = []
    
    if(isGroup) {
      periods = _group_periods;
    }
    if(isIndividual) {
      periods = _individual_periods;
    }
 
    return(
      <CardBody>
        
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
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
          <GridItem xs={12} sm={12} md={6}>
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
          <GridItem xs={12} sm={12} md={6}>
            <CustomSelect
              labelText='Period'
              id='period'
              formControlProps={{ fullWidth: true }}
              values={ periods }
              onChange={ onChange }
              inputProps={{
                name: 'period',
                value: price.period || '',
              }}
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={6}>
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
        
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <CustomInput
              labelText='MercadoPago'
              id='mercadopago_link'
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                name: 'mercadopago_link',
                value: price.mercadopago_link
              }}
            />
          </GridItem>
        </GridContainer>
      
      </CardBody>
    )
  }
}


