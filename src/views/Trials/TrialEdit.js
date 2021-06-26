import React from "react";
import API from '../../library/API'

// core components
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import TrialForm from './TrialForm.js'

import CircularProgress from '@material-ui/core/CircularProgress';

import { defaultTrial } from 'variables/general'

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

class TrialEdit extends React.Component {

  constructor(props) {
    super(props)

    this.onSuccess = this.onSuccess.bind(this)
    this.onWelcomeSuccess = this.onWelcomeSuccess.bind(this)
    this.onFailure = this.onFailure.bind(this)

    this.onClick = this.onClick.bind(this)
    this.sendWelcomeEmail = this.sendWelcomeEmail.bind(this)
    this.onChange = this.onChange.bind(this)

    var trial = this.props.student.trial || defaultTrial
    trial.student_id = this.props.student.id
    this.state = { trial }
  }

  onSuccess(response){
    this.setState({ trial: response, progress: false });
    this.props.notifySuccess("Trial saved successfully")
  }

  onFailure(error){
    console.log(error);
    this.setState({ progress: false })
    this.props.notifyError(error)
  }

  onClick(){
    this.setState({ progress: true })
    if(this.state.trial.id){
      API.update('trials', this.state.trial.id, this.state, this.onSuccess, this.onFailure)
    } else {
      API.create('trials', this.state, this.onSuccess, this.onFailure)
    }
  }
  
  onWelcomeSuccess(response){
    this.setState({ trial: response, progress: false });
    this.props.notifySuccess("Email sent successfully")
  }

  sendWelcomeEmail(){
    const { id } = this.state.trial
    this.setState({ progress: true })
    API.post('trials/' + id + '/welcome', {}, this.onWelcomeSuccess, this.onFailure)
  }

  onChange(event){
    const { name, value } = event.target
    this.setState({ trial: {...this.state.trial, [name]: value } });
  }

  render() {
    const { classes, student, courses } = this.props
    const { trial, progress } = this.state

    return(
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Trial</h4>
        </CardHeader>

        <TrialForm
          trial={trial}
          student={student}
          courses={courses}
          onChange={this.onChange}
        />

        <CardFooter>
          <Button color="primary" onClick={this.onClick}>Save</Button>
          {progress && <CircularProgress color="inherit" style={{ color: "#9c27b0" }}/>}

          {!progress && trial.id && !trial.welcome_email_sent && <Button color="success" onClick={this.sendWelcomeEmail}>Send Welcome Email</Button> }
        </CardFooter>
      </Card>
    )
  }
}

export default withStyles(styles, { withTheme: true })(TrialEdit);
