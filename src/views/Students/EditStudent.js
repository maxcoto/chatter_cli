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
import SubscriptionEdit from '../Subscriptions/SubscriptionEdit.js'

import { withStyles } from "@material-ui/core/styles";

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

    this.onClick = this.onClick.bind(this)
    this.onChange = this.onChange.bind(this)

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
  
  onClick(){
    API.update('students', this.state.student.id, { student: this.state.student }, this.onSuccess, this.onFailure)
  }
  
  onChange(event){
    const { name, value } = event.target
    this.setState({ student: {...this.state.student, [name]: value } });
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
              onChange={this.onChange}
            />

            <CardFooter>
              <Button color="primary" onClick={this.onClick}>Update</Button>
            </CardFooter>
          </Card>
        </GridItem>
        
        <SubscriptionEdit
          student={student}
          courses={courses}
          teachers={teachers}
        />
        
      </GridContainer>
    )
  }
}

export default withStyles(styles, { withTheme: true })(EditStudent);


