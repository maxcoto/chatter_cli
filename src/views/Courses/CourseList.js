import React from "react";
import API from '../../library/API'
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import AddIcon from "@material-ui/icons/Add";
import ShowIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "components/CustomButtons/Button.js";

const styles = {
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};


class CourseList extends React.Component {

  constructor(props) {
    super(props)
    this.state = { courses: [], all: [] }
  }

  componentDidUpdate(){
    if(this.props.courses !== this.state.all){
      const { courses } = this.props
      this.setState({ courses, all: courses })
    }
  }

  componentDidMount(){
    if(this.props.courses !== this.state.all){
      const { courses } = this.props
      this.setState({ courses, all: courses })
    }
  }

  search(event){
    const lookup = event.target.value.trim().toLowerCase();
    var list = this.state.all
    if(lookup !== ''){
      list = list.filter(function(item){
        return (
          item.name.toLowerCase().includes(lookup) ||
					item.level.name.toLowerCase().includes(lookup)
        )
      }) || []
    }

    this.setState({ ...this.state, courses: list })
  }

  new(){
    this.props.history.push('/courses/new');
  }

  show(course){
    this.props.history.push('/courses/' + course.id, { course });
  }

  edit(course){
    this.props.history.push('/courses/' + course.id + '/edit', { course });
  }

  delete(course){
    const self = this
    API.delete(
      'courses',
      course.id,
      function(result){
        self.props.notifySuccess("Course has been deleted succesfully")
        window.location.reload()
      },
      function(error){
        console.log(error);
      }
    )
  }

  render() {
    const { classes } = this.props
    const { courses } = this.state



    const groups = courses.filter(function(c){ return c.max_students > 1 })
    const individuals = courses.filter(function(c){ return c.max_students === 1 })

    return (
      <React.Fragment>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <div style={{ float: "left" }}>
                  <h4 className={classes.cardTitleWhite}>Groups</h4>
                </div>

                <div style={{ float: "right" }}>
                  <CustomInput
                    labelText="Search"
                    inputProps={{ onChange: this.search.bind(this) }}
                    formControlProps={{ style: { margin: 0 }, fullWidth: true }}
                  />
                </div>
              </CardHeader>
              <CardBody>
                <Button color="warning" aria-label="add" justIcon round onClick={ this.new.bind(this)} >
                  <AddIcon />
                </Button>
                <Table
                  tableHeaderColor="primary"
                  tableHead={['Name', 'Classroom Link', 'Max Students', 'Level', 'Teacher', 'Actions']}
                  tableData={
                    groups.map(course => {
                      return [
                        course.name,
  											course.classroom_link,
  											course.max_students,
  											course.level.name,
  											course.teacher.first_name + ' ' + course.teacher.last_name,
                        <div>
                          <Button color="info" aria-label="show" justIcon round
                                  onClick={ this.show.bind(this, course)} >
                            <ShowIcon />
                          </Button>
                          &nbsp;&nbsp;
                          <Button color="primary" aria-label="edit" justIcon round
                                  onClick={ this.edit.bind(this, course)} >
                            <EditIcon />
                          </Button>
                          &nbsp;&nbsp;
                          <Button color="danger" aria-label="delete" justIcon round
                                  onClick={ this.delete.bind(this, course)} >
                            <DeleteIcon />
                          </Button>
                        </div>
                      ]}
                    )
                  }
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <div style={{ float: "left" }}>
                  <h4 className={classes.cardTitleWhite}>Individuals</h4>
                </div>

                <div style={{ float: "right" }}>
                  <CustomInput
                    labelText="Search"
                    inputProps={{ onChange: this.search.bind(this) }}
                    formControlProps={{ style: { margin: 0 }, fullWidth: true }}
                  />
                </div>
              </CardHeader>
              <CardBody>
                <Button color="warning" aria-label="add" justIcon round onClick={ this.new.bind(this)} >
                  <AddIcon />
                </Button>
                <Table
                  tableHeaderColor="primary"
                  tableHead={['Name', 'Classroom Link', 'Level', 'Teacher', 'Actions']}
                  tableData={
                    individuals.map(course => {
                      return [
                        course.name,
  											course.classroom_link,
  											course.level.name,
  											course.teacher.first_name + ' ' + course.teacher.last_name,
                        <div>
                          <Button color="info" aria-label="show" justIcon round
                                  onClick={ this.show.bind(this, course)} >
                            <ShowIcon />
                          </Button>
                          &nbsp;&nbsp;
                          <Button color="primary" aria-label="edit" justIcon round
                                  onClick={ this.edit.bind(this, course)} >
                            <EditIcon />
                          </Button>
                          &nbsp;&nbsp;
                          <Button color="danger" aria-label="delete" justIcon round
                                  onClick={ this.delete.bind(this, course)} >
                            <DeleteIcon />
                          </Button>
                        </div>
                      ]}
                    )
                  }
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CourseList);
