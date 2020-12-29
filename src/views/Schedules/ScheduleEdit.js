import React from "react";
import API from '../../library/API'

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import ScheduleForm from './ScheduleForm.js'
import ScheduleFields from './ScheduleFields.js'

import { withStyles } from "@material-ui/core/styles";
import avatar from "assets/img/faces/marc.jpg";



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

class ScheduleEdit extends React.Component {

  constructor(props) {
    super(props)

    this.onSuccess = this.onSuccess.bind(this)
    this.onFailure = this.onFailure.bind(this)

    this.onClick = this.onClick.bind(this)
    this.onChange = this.onChange.bind(this)

    this.state = this.props.course.schedule || { schedule: null }
  }

  onSuccess(response){
    const { id } = response
    this.props.notifySuccess("Schedule updated successfully")
  }
  
  onFailure(error){
    console.log(error);
    this.props.notifyError(error)
  }
  
  onClick(){
    API.update('schedules', this.state.schedule.id, this.state, this.onSuccess, this.onFailure)
  }
  
  onChange(event){
    const { name, value } = event.target
    this.setState({ schedule: {...this.state.schedule, [name]: value } });
  }

  render() {
    //[++] refs
    const { classes, courses } = this.props
    const { schedule } = this.state
 
    return(
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Edit Schedule</h4>
          </CardHeader>

          <ScheduleForm schedule={schedule} onChange={this.onChange} courses={courses} />

          <CardFooter>
            <Button color="primary" onClick={this.onClick}>Save</Button>
          </CardFooter>
        </Card>
      </GridItem>
    )
  }
}

export default withStyles(styles, { withTheme: true })(ScheduleEdit);


