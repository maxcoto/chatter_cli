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
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
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
    
    API.configure(props.token)
    API.all(
      'courses',
      function(data){
        this.setState({ courses: data, all: data })
        this.props.notifySuccess("Courses loaded !!")
      }.bind(this),
      function(error){
        console.log(error)
        this.props.notifyError("Courses not loaded :( => " + error)
      }.bind(this)
    )
  }
  
  search(event){
    const lookup = event.target.value.trim().toLowerCase();
    var list = this.state.all
    if(lookup !== ''){
      list = list.filter(function(item){
        return (
          item.name.toLowerCase().includes(lookup) || 
					item.level.toLowerCase().includes(lookup)
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

    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <div style={{ float: "left" }}>
                <h4 className={classes.cardTitleWhite}>Courses</h4>
                <p className={classes.cardCategoryWhite}>All</p>
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
                tableHead={['Name', 'Classroom Link', 'Meet Link', 'Event Id', 'Max Students', 'Level', 'Teacher Id', 'Actions']}
                tableData={
                  courses.map(course => {
                    return [
                      course.name,
											course.classroom_link,
											course.meet_link,
											course.event_id,
											course.max_students,
											course.level,
											course.teacher_id,
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
    );
  }
}

export default withStyles(styles, { withTheme: true })(CourseList);
