import React from "react";
import API from '../../library/API'

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import StudentForm from './StudentForm.js'
import SubscriptionForm from '../Subscriptions/SubscriptionForm.js'

import { withStyles } from "@material-ui/core/styles";
import { defaultSubscription } from 'variables/general'

const styles = {
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

class EditStudent extends React.Component {

  constructor(props) {
    super(props)

    this.onSuccess = this.onSuccess.bind(this)
    this.onFailure = this.onFailure.bind(this)

    this.onUpdateStudent = this.onUpdateStudent.bind(this)
    this.onUpdateSubscription = this.onUpdateSubscription.bind(this)
    this.onChangeStudent = this.onChangeStudent.bind(this)
    this.onChangeSubscription = this.onChangeSubscription.bind(this)

    this.state = this.props.location.state || { student: null }

    API.configure(props.token)
  
    if(!this.state.student){
      const id = this.props.location.pathname.split("/")[2]
      API.get('students', id,
        function(response){
          this.setState({ student: response })
        }.bind(this),
        function(error){
          this.props.notifyError(error)
        }.bind(this)
      )
    }
  }

  onSuccess(response){
    const { id } = response
    this.props.history.push('/students/' + id, this.state);
    this.props.notifySuccess("Updated successfully")
  }
  
  onFailure(error){
    console.log(error);
    this.props.notifyError(error)
  }
  
  onUpdateStudent(){
    API.update('students', this.state.student.id, { student: this.state.student }, this.onSuccess, this.onFailure)
  }
  
  onUpdateSubscription(){
    API.update('subscriptions', this.state.student.subscription.id, { subscription: this.state.student.subscription }, this.onSuccess, this.onFailure)
  }
  
  onChangeStudent(event){
    const { name, value } = event.target
    this.setState({ student: {...this.state.student, [name]: value } });
  }
  
  onChangeSubscription(event, callback = function(){} ){
    const { name, value } = event.target
    this.setState({ student: {...this.state.student, subscription: { ...this.state.student.subscription, [name]: value } } }, callback);
  }
  
  show(student){
    this.props.history.push('/students/' + student.id, { student });
  }

  render() {
    const { classes, levels, courses, teachers } = this.props
    const { student } = this.state
    if(!student) return null
 
    return(
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Student</h4>
            </CardHeader>

            <StudentForm
              student={student}
              levels={levels}
              onChange={this.onChangeStudent}
            />

            <CardFooter>
              <Button color="primary" onClick={this.onUpdateStudent}>Update</Button>
            </CardFooter>
          </Card>
        </GridItem>
        
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Subscription</h4>
            </CardHeader>

            <SubscriptionForm
              subscription={student.subscription || defaultSubscription}
              student={student}
              courses={courses}
              teachers={teachers}
              onChange={this.onChangeSubscription}
            />

            <CardFooter>
              <Button color="primary" onClick={this.onUpdateSubscription}>Update</Button>
            </CardFooter>
          </Card>
        </GridItem>
        
      </GridContainer>
    )
  }
}

export default withStyles(styles, { withTheme: true })(EditStudent);


