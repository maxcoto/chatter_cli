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

import CardIcon from "components/Card/CardIcon.js";
import Icon from "@material-ui/core/Icon";
import CardFooter from "components/Card/CardFooter.js";
import DateRange from "@material-ui/icons/DateRange";


import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { defaultStats } from 'variables/general'

styles["cardCategoryWhite"] = {
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
}
styles["cardTitleWhite"] = {
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
};


class TeacherList extends React.Component {

  constructor(props) {
    super(props)
    this.state = { teachers: [], all: [] }
  }

  componentDidMount(){
    if(this.props.teachers !== this.state.all){
      const { teachers } = this.props
      this.setState({ teachers, all: teachers })
    }
  }

  componentDidUpdate(){
    if(this.props.teachers !== this.state.all){
      const { teachers } = this.props
      this.setState({ teachers, all: teachers })
    }
  }

  search(event){
    const lookup = event.target.value.trim().toLowerCase();
    var list = this.state.all
    if(lookup !== ''){
      list = list.filter(function(item){
        return (
          item.first_name.toLowerCase().includes(lookup) ||
					item.last_name.toLowerCase().includes(lookup) ||
					item.email.toLowerCase().includes(lookup)
        )
      }) || []
    }

    this.setState({ ...this.state, teachers: list })
  }

  new(){
    this.props.history.push('/teachers/new');
  }

  show(teacher){
    this.props.history.push('/teachers/' + teacher.id, { teacher });
  }

  edit(teacher){
    this.props.history.push('/teachers/' + teacher.id + '/edit', { teacher });
  }

  delete(teacher){
    const self = this
    API.delete(
      'teachers',
      teacher.id,
      function(result){
        self.props.notifySuccess("Teacher has been deleted succesfully")
        window.location.reload()
      },
      function(error){
        console.log(error);
      }
    )
  }

  render() {
    const { classes } = this.props
    const { teachers } = this.state
    const stats = this.props.stats || defaultStats;

    const activeTeachersCount = teachers.filter(function(t){ return t.active === true }).length

    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="primary" stats icon>
                <CardIcon color="primary">
                  <Icon>school</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Active Teachers</p>
                <h3 className={classes.cardTitle}>{activeTeachersCount}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange /> Current
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Icon>schedule</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Hours of Class</p>
                <h3 className={classes.cardTitle}>{stats.hours_of_class_this_month}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange /> This Month
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>account_balance</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Teacher Pay Due</p>
                <h3 className={classes.cardTitle}><small>$</small> {stats.teacher_pay_due_this_month}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange /> This Month
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
                  <h4 className={classes.cardTitleWhite}>Teachers</h4>
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
                  tableHead={['Name', '# Groups', '# Inviduals', 'Total Students', 'Monthly Hours', 'Pay Due', 'Active', 'Actions']}
                  tableData={
                    teachers.map(teacher => {
                      const courses = this.props.courses.filter(function(c){ return c.teacher_id === teacher.id });
                      const individualCount = courses.filter(function(c){ return c.max_students === 1 }).length;
                      const groupCount = courses.length - individualCount;
                      const totalStudents = courses.reduce(function(count, c) { return (count + c.occupants) }, 0);

                      return [
                        teacher.first_name + " " + teacher.last_name,
                        groupCount,
                        individualCount,
                        totalStudents,
                        teacher.monthly_hours,
                        "$ " + (teacher.monthly_hours * teacher.hourly_rate),
  											teacher.active.toString(),
                        <div>
                          <Button color="info" aria-label="show" justIcon round onClick={ this.show.bind(this, teacher)} >
                            <ShowIcon />
                          </Button>
                          &nbsp;&nbsp;
                          <Button color="primary" aria-label="edit" justIcon round onClick={ this.edit.bind(this, teacher)} >
                            <EditIcon />
                          </Button>
                          &nbsp;&nbsp;
                          <Button color="danger" aria-label="delete" justIcon round onClick={ this.delete.bind(this, teacher)} >
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
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(TeacherList);
