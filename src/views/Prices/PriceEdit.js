import React from "react";
import API from '../../library/API'

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import PriceForm from './PriceForm.js'
import DeleteIcon from "@material-ui/icons/Delete";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

class PriceEdit extends React.Component {

  constructor(props) {
    super(props)

    this.onSuccess = this.onSuccess.bind(this)
    this.onFailure = this.onFailure.bind(this)

    this.onClick = this.onClick.bind(this)
    this.onChange = this.onChange.bind(this)

    this.state = this.props.location.state || { price: null }

    API.configure(props.token)

    if(!this.state.price){
      const id = this.props.location.pathname.split("/")[2]
      API.get('prices', id,
        function(response){
          this.setState({ price: response })
        }.bind(this),
        function(error){
          this.props.notifyError(error)
        }.bind(this)
      )
    }
  }

  onSuccess(response){
    const { id } = response
    this.props.history.push('/prices/' + id, this.state);
    this.props.notifySuccess("Price updated successfully")
  }

  onFailure(error){
    console.log(error);
    this.props.notifyError(error)
  }

  onClick(){
    API.update('prices', this.state.price.id, this.state, this.onSuccess, this.onFailure)
  }

  onChange(event){
    const { name, value } = event.target
    this.setState({ price: {...this.state.price, [name]: value } });
  }
  
  delete(price){
    const self = this
    API.delete(
      'prices',
      price.id,
      function(result){
        self.props.notifySuccess("Price has been deleted succesfully")
        window.location = "/prices"
      },
      function(error){
        console.log(error);
      }
    )
  }

  render() {
    const { classes, levels } = this.props
    const { price } = this.state
    if(!price) return null

    return(
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Price {price.id}</h4>
            </CardHeader>

            <PriceForm price={price} onChange={this.onChange} levels={levels} />

            <CardFooter>
              <Button color="primary" onClick={this.onClick}>Update</Button>
              
              <Button color="danger" aria-label="delete" justIcon round onClick={ this.delete.bind(this, price)} >
                <DeleteIcon />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    )
  }
}

export default withStyles(styles, { withTheme: true })(PriceEdit);
