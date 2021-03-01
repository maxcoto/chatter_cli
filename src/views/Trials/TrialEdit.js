import React from "react";
import API from '../../library/API'

// core components
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import TrialForm from './TrialForm.js'

import { defaultTrial } from 'variables/general'

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

class TrialEdit extends React.Component {

  constructor(props) {
    super(props)

    this.onSuccess = this.onSuccess.bind(this)
    this.onFailure = this.onFailure.bind(this)

    this.onClick = this.onClick.bind(this)
    this.onChange = this.onChange.bind(this)

    var trial = this.props.student.trial || defaultTrial
    trial.student_id = this.props.student.id
    this.state = { trial }
  }

  onSuccess(response){
    this.setState({ trial: response });
    this.props.notifySuccess("Trial saved successfully")
  }

  onFailure(error){
    console.log(error);
    this.props.notifyError(error)
  }

  onClick(){
    if(this.state.trial.id){
      API.update('trials', this.state.trial.id, this.state, this.onSuccess, this.onFailure)
    } else {
      API.create('trials', this.state, this.onSuccess, this.onFailure)
    }

  }

  onChange(event){
    const { name, value } = event.target
    this.setState({ trial: {...this.state.trial, [name]: value } });
  }

  render() {
    const { classes, student, courses } = this.props
    const { trial } = this.state

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
        </CardFooter>
      </Card>
    )
  }
}

export default withStyles(styles, { withTheme: true })(TrialEdit);
