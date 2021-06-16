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

    this.onRenewSuccess = this.onRenewSuccess.bind(this)
    this.onPaySuccess = this.onPaySuccess.bind(this)
    this.onFailure = this.onFailure.bind(this)

    this.onRenew = this.onRenew.bind(this)
    this.onDelete = this.onDelete.bind(this)
    this.onPay = this.onPay.bind(this)
    this.onChange = this.onChange.bind(this)

    var { subscriptions } = this.props.student
    
    defaultSubscription.student_id = this.props.student.id
    subscriptions.push(defaultSubscription)

    const count = subscriptions.length
    var idx = 1
    if(count > 1) idx = 2
    const subscription = subscriptions[count-idx]

    this.state = { subscription, subscriptions }
  }

  onRenewSuccess(response){
    const { subscriptions } = this.state
    var index = subscriptions.length-1;
    this.setState({
      subscriptions: [
        ...subscriptions.slice(0, index),
        response,
        ...subscriptions.slice(index)
      ],
      subscription: subscriptions[subscriptions.length-2],
      progress: false
    });
    
    this.props.notifySuccess("Subscription created successfully")
  }

  onFailure(error){
    console.log(error);
    this.setState({ progress: false })
    this.props.notifyError(error)
  }

  onRenew(){
    this.setState({ progress: true })
    API.create('subscriptions', { subscription: this.state.subscription }, this.onRenewSuccess, this.onFailure)
  }
  
  onDelete(){
    const { subscription, subscriptions } = this.state
    
    API.delete('subscriptions', subscription.id, () => false, this.onFailure)

    var ss = [...subscriptions];
    ss.splice(ss.indexOf(subscription), 1);
    this.setState({ subscriptions: ss, subscription: subscriptions[subscriptions.length-1] });
  }
  
  onPaySuccess(response){
    const { subscriptions, subscription } = this.state
    const index = subscriptions.indexOf(subscription)

    //update state value.
    this.setState({
      subscriptions: [
        ...subscriptions.slice(0, index),
        response,
        ...subscriptions.slice(index + 1)
      ],
      subscription: response
    })
    
    this.props.notifySuccess("Subscription saved successfully")
  }

  onPay(){
    const self = this
    const { subscription } = this.state
    API.update('subscriptions', subscription.id, { paid: !subscription.paid }, self.onPaySuccess, self.onFailure)
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
            <div style={{ float: "left" }}>
              <h4 className={classes.cardTitleWhite}>Subscriptions</h4>
              <p className={classes.cardCategoryWhite}>All</p>
            </div>

            <div style={{ float: "right" }}>
              <Button
                justIcon round
                disabled={index === 0}
                color="warning"
                onClick={ this.move.bind(this, index, -1) }
              >
                <ArrowBackIosIcon />
              </Button>
              <Button
                justIcon round
                disabled={index === subscriptions.length-1}
                color="warning"
                onClick={ this.move.bind(this, index, 1) }
              >
                <ArrowForwardIosIcon />
              </Button>
            </div>
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
            { subscription.id && <Button color="danger" onClick={this.onDelete}>Delete</Button> }
            { subscription.id && !subscription.paid && <Button color="success" onClick={this.onPay}>Pay</Button> }
            { subscription.id && subscription.paid && <Button color="warning" onClick={this.onPay}>Un-Pay</Button> }
            { !subscription.id && <Button color="primary" onClick={this.onRenew}>Renew</Button> }
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
