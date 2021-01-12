import React from "react";

// core components
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import ScheduleForm from './ScheduleForm.js'

import AddIcon from "@material-ui/icons/Add";

import { withStyles } from "@material-ui/core/styles";
import { defaultSchedule } from 'variables/general'

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

    this.add = this.add.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onDelete = this.onDelete.bind(this)

    this.state = { schedules: this.props.schedules || [defaultSchedule] }
  }

  add(event){
    this.setState({ schedules: [...this.state.schedules, defaultSchedule] })
  }

  onChange(index, event){
    const { name, value } = event.target
    let schedules = this.state.schedules
    const schedule = {...schedules[index], [name]: value }
    schedules[index] = schedule
    this.setState({ schedules: schedules });
    this.props.onChange({ target: { name: "schedules", value: schedules } })
  }

  onDelete(index) {
    const schedules = this.state.schedules
    const result = [...schedules.slice(0, index), ...schedules.slice(index + 1)];
    this.setState({ schedules: result });
    this.props.onChange({ target: { name: "schedules", value: result } })
  }

  render() {
    //[++] refs
    const { classes } = this.props
    const { schedules } = this.state

    return(
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Schedule</h4>
          </CardHeader>

          {
            schedules.map((schedule, index) => {
              return (
                <ScheduleForm
                  key={index}
                  index={index}
                  schedule={schedule}
                  onChange={this.onChange}
                  onDelete={this.onDelete}
                />
              )
            })
          }

          <CardFooter>
            <Button color="warning" aria-label="add" justIcon round onClick={ this.add.bind(this)} >
              <AddIcon />
            </Button>
          </CardFooter>
        </Card>
      </GridItem>
    )
  }
}

export default withStyles(styles, { withTheme: true })(ScheduleEdit);
