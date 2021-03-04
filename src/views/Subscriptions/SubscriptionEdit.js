import React from "react";
import API from '../../library/API'

import LectureList from '../Subscriptions/LectureList.js'

// core components
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import SubscriptionForm from './SubscriptionForm.js'
import CircularProgress from '@material-ui/core/CircularProgress';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

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

    var { subscriptions } = this.props.student
    subscriptions = subscriptions.length ? subscriptions : [defaultSubscription]
    var subscription = subscriptions[subscriptions.length-1]
    subscription.student_id = this.props.student.id

    this.state = { subscription, subscriptions }
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
    API.create('subscriptions', this.state, this.onSuccess, this.onFailure)
  }

  pay(){
    const self = this
    const { subscription } = this.state
    self.setState( { subscription: { paid: !subscription.paid, ...subscription } }, function(newState){
      API.update('subscriptions', newState.subscription.id, { paid: newState.subscription.paid }, self.onSuccess, self.onFailure)
    })
  }

  move(index, direction){
    const { subscriptions } = this.state
    this.setState( { subscription: subscriptions[index+direction] } )
  }

  onChange(event){
    const { name, value } = event.target
    this.setState({ subscription: {...this.state.subscription, [name]: value } });
  }

  render() {
    const { classes, student, courses, teachers, hoursLeft } = this.props
    const { subscription, progress, subscriptions } = this.state
    if(!subscription) return null

    const index = subscriptions.indexOf(subscription)

    return(
      <React.Fragment>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Subscription</h4>
            <Button
              justIcon round
              disabled={index === 0}
              color="info"
              onClick={ this.move.bind(this, index, -1) }
            >
              <ArrowBackIosIcon />
            </Button>
            <Button
              justIcon round
              disabled={index === subscriptions.length-1}
              color="info"
              onClick={ this.move.bind(this, index, 1) }
            >
              <ArrowForwardIosIcon />
            </Button>
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
            <Button color="primary" onClick={this.onClick}>{ subscription.id ? "Renew" : "Save" }</Button>
            {progress && <CircularProgress color="inherit" style={{ color: "#9c27b0" }}/>}
          </CardFooter>
        </Card>

        <br />

        <LectureList
          subscription={subscription}
        />
      </React.Fragment>
    )
  }
}

export default withStyles(styles, { withTheme: true })(SubscriptionEdit);
