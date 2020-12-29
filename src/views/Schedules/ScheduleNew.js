import React from 'react'
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
import { defaultSchedule } from 'variables/general'
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


class ScheduleNew extends React.Component {

  constructor(props) {
    super(props)

    this.state = { schedule: defaultSchedule }

    this.onSuccess = this.onSuccess.bind(this)
    this.onFailure = this.onFailure.bind(this)

    this.onClick = this.onClick.bind(this)
    this.onChange = this.onChange.bind(this)

    API.configure(props.token)
  }

  onSuccess(response){
    const { id } = response
    this.props.history.push('/schedules/' + id, { schedule: response} );
    this.props.notifySuccess("Schedule created succesfully")
  }
  
  onFailure(error){
    this.props.notifyError(error)
  }
  
  onClick(){
    API.create('schedules', this.state, this.onSuccess, this.onFailure)
  }

  onChange(event){
    const { name, value } = event.target
    this.setState({ schedule: {...this.state.schedule, [name]: value } });
  }

  render() {
    const { classes, course } = this.props
    const { schedule } = this.state
    if(!schedule) return null
 
    return(
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>New Schedule</h4>
          </CardHeader>

          <ScheduleForm schedule={schedule} onChange={this.onChange} course={course} />

          <CardFooter>
            <Button color="primary" onClick={this.onClick} >
              Create
            </Button>
          </CardFooter>
        </Card>
      </GridItem>
    )
  }
}

export default withStyles(styles, { withTheme: true })(ScheduleNew);

