import React from "react";
import API from '../../library/API'

// core components
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import SubscriptionForm from './SubscriptionForm.js'

import { withStyles } from "@material-ui/core/styles";

import { defaultSubscription } from 'variables/general'

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

class SubscriptionEdit extends React.Component {

  constructor(props) {
    super(props)

    this.onSuccess = this.onSuccess.bind(this)
    this.onFailure = this.onFailure.bind(this)

    this.onClick = this.onClick.bind(this)
    this.onChange = this.onChange.bind(this)

    this.state = this.props.student.subscription || { subscription: null }
  }

  onSuccess(response){
    this.setState({ subscription: response });
    this.props.notifySuccess("Subscription saved successfully")
  }
  
  onFailure(error){
    console.log(error);
    this.props.notifyError(error)
  }
  
  onClick(){
    if(this.state.subscription.id){
      API.update('subscriptions', this.state.subscription.id, this.state, this.onSuccess, this.onFailure)  
    } else {
      API.create('subscriptions', this.state, this.onSuccess, this.onFailure)
    }
    
  }
  
  onChange(event){
    const { name, value } = event.target
    this.setState({ subscription: {...this.state.subscription, [name]: value } });
  }

  render() {
    const { classes, student, courses, teachers } = this.props
    const { subscription } = this.state
    //if(!subscription) return null
 
    return(
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Edit Subscription</h4>
          </CardHeader>

          <SubscriptionForm
            subscription={subscription || defaultSubscription}
            student={student}
            courses={courses}
            teachers={teachers}
            onChange={this.onChange}
          />

          <CardFooter>
            <Button color="primary" onClick={this.onUpdateSubscription}>Save</Button>
          </CardFooter>
        </Card>
      </GridItem>
    )
  }
}

export default withStyles(styles, { withTheme: true })(SubscriptionEdit);


