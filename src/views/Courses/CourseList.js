import React from "react";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import Button from "components/CustomButtons/Button.js";

import CustomSelect from "components/CustomSelect/CustomSelect.js"

import CardFooter from "components/Card/CardFooter.js";
import Icon from "@material-ui/core/Icon";
import CardIcon from "components/Card/CardIcon.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";


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
          item.level.name.toLowerCase().includes(lookup) ||
          item.teacher_name.toLowerCase().includes(lookup)
        )
      }) || []
    }

    this.setState({ ...this.state, courses: list })
  }

  new(){
    this.props.history.push('/courses/new');
  }

  edit(course){
    this.props.history.push('/courses/' + course.id, { course });
  }

  studentToSelect(list) {
    return list.map(function(l, i){
      return { id: i, name: l, disabled: true }
    })
  }


  render() {
    const { classes } = this.props
    const { courses } = this.state

    const groups = courses.filter(function(c){ return c.max_students > 1 })
    const individuals = courses.filter(function(c){ return c.max_students === 1 })

    const groupCount = groups.reduce(function(count, group){ return count + group.occupants }, 0)
    const individualCount = individuals.reduce(function(count, individual){ return count + individual.occupants }, 0)

    let totalCount = groupCount + individualCount
    if(totalCount === 0) totalCount = 1 // border case (when sum is zero)

    return (
      <React.Fragment>

        <GridContainer>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Icon>group</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Groups</p>
                <h3 className={classes.cardTitle}>{groups.length}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Icon>group</Icon> Amount
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Icon>person</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Individuals</p>
                <h3 className={classes.cardTitle}>{individuals.length}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Icon>person</Icon> Amount
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Icon>accessibility_new</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Students in Groups vs Individuals</p>
                <h3 className={classes.cardTitle}>{(groupCount/totalCount)*100}% vs {(individualCount/totalCount)*100}%</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Icon>person</Icon> Amount
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>


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
                  tableHead={['Name', 'Level', 'Occupants', 'Seats', 'Teacher', 'Edit']}
                  tableData={
                    groups.map(course => {
                      return [
                        course.name,
                        course.level.name,
                        <CustomSelect
                          labelText={course.occupants}
                          id='students'
                          values={ this.studentToSelect(course.student_names) }
                          onChange={()=> {}}
                          inputProps={{ }}
                          styles={ { marginTop: 0 } }
                        />,
                        course.seats,
  											course.teacher_name,
                        <div>
                          <Button color="primary" aria-label="edit" justIcon round onClick={ this.edit.bind(this, course)} >
                            <EditIcon />
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
                  tableHead={['Name', 'Level', 'Seats', 'Teacher', 'Edit']}
                  tableData={
                    individuals.map(course => {
                      return [
                        course.name,
  											course.level.name,
                        course.seats,
  											course.teacher_name,
                        <div>
                          <Button color="primary" aria-label="edit" justIcon round onClick={ this.edit.bind(this, course)} >
                            <EditIcon />
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
