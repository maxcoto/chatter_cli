import React from 'react'

// core components
import GridItem from "components/Grid/GridItem.js"
import GridContainer from "components/Grid/GridContainer.js"
import CustomInput from "components/CustomInput/CustomInput.js"
import CardBody from "components/Card/CardBody.js"


export default class LevelForm extends React.Component {
  render() {
    const { level, onChange } = this.props
    if(!level) return null
 
    return(
      <CardBody>
        
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText='Order'
              id='order'
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                name: 'order',
                value: level.order,
                type: 'number'
              }}
            />
          </GridItem>
        </GridContainer>
      

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText='Name'
              id='name'
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                name: 'name',
                value: level.name,
                type: 'number'
              }}
            />
          </GridItem>
        </GridContainer>
      
      </CardBody>
    )
  }
}


