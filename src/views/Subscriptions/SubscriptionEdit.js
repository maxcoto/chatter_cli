import React from "react";
import API from '../../library/API'

// core components
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import SubscriptionForm from './SubscriptionForm.js'
import CircularProgress from '@material-ui/core/CircularProgress';

import { defaultSubscription } from 'variables/general'

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

class SubscriptionEdit extends React.Component {

  constructor(props) {
    super(props)

    this.onSuccess = this.onSuccess.bind(this)
    this.onFailure = this.onFailure.bind(this)

    this.onClick = this.onClick.bind(this)
    this.onChange = this.onChange.bind(this)

    var subscription = this.props.student.subscription || defaultSubscription
    subscription.student_id = this.props.student.id
    this.state = { subscription }
  }

  onSuccess(response){
    this.setState({ subscription: response, progress: false });
    this.props.notifySuccess("Subscription saved successfully")
  }

  onFailure(error){
    console.log(error);
    this.setState({ progress: false })
    this.props.notifyError(error)
  }

  onClick(){
    this.setState({ progress: true })
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
    const { classes, student, courses, teachers, hoursLeft } = this.props
    const { subscription, progress } = this.state
    //if(!subscription) return null

    return(
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Subscription</h4>
        </CardHeader>

        <SubscriptionForm
          hoursLeft={hoursLeft}
          subscription={subscription}
          student={student}
          courses={courses}
          teachers={teachers}
          onChange={this.onChange}
        />

        <CardFooter>
          <Button color="primary" onClick={this.onClick}>Save</Button>
          {progress && <CircularProgress color="inherit" style={{ color: "#9c27b0" }}/>}
        </CardFooter>
      </Card>
    )
  }
}

export default withStyles(styles, { withTheme: true })(SubscriptionEdit);
