import React from "react";
import CustomInput from "components/CustomInput/CustomInput.js";

import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import Button from "components/CustomButtons/Button.js";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import CustomSelect from "components/CustomSelect/CustomSelect.js"
//import CustomSwitch from "components/CustomSwitch/CustomSwitch.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { _statuses } from 'variables/general'
import { formatDate } from 'library/helpers/functions.js'

_statuses.push({ id: null, name: 'all' })

class PotentialList extends React.Component {

  constructor(props) {
    super(props)
    this.state = { potentials: [], all: [], filters: {} }
  }

  componentDidMount(){
    if(this.props.potentials !== this.state.all){
      const { potentials } = this.props
      this.setState({ potentials, all: potentials })
    }
  }

  componentDidUpdate(){
    if(this.props.potentials !== this.state.all){
      const { potentials } = this.props
      this.setState({ potentials, all: potentials })
    }
  }

  filter(key){
    return function(event){
      const value = event.target.value;
      var list = this.state.all
      if(value !== null){
        list = list.filter(function(item){
          return item[key] === value
        }) || []
      }

      const filters = {}
      filters[key] = value

      this.setState({ ...this.state, potentials: list, filters })
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
          item.email.toLowerCase().includes(lookup) ||
          (item.status && item.status.toLowerCase().includes(lookup))
        )
      }) || []
    }

    this.setState({ ...this.state, potentials: list })
  }

  new(){
    this.props.history.push('/potentials/new');
  }

  edit(student){
    this.props.history.push('/students/' + student.id, { student });
  }

  toggle(student, event){
    // console.log(student);
    // console.log(event);
  }

  render() {
    const { classes } = this.props
    const { potentials } = this.state

    return (
      <React.Fragment>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <div style={{ float: "left" }}>
                  <h4 className={classes.cardTitleWhite}>Potentials</h4>
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

                <GridItem xs={12} sm={12} md={3}>
                  <CustomSelect
                    labelText='Status'
                    formControlProps={{ fullWidth: true }}
                    values={ _statuses }
                    onChange={this.filter("status").bind(this)}
                    inputProps={{
                      name: 'status',
                      value: this.state.filters["status"]
                    }}
                  />
                </GridItem>

                <Table
                  tableHeaderColor="primary"
                  tableHead={["Name", "Course", "Level", "Trial Date", "Status", "Notes", "Actions"]}
                  tableData={
                    potentials.map(potential => {
                      return [
                        potential.full_name,
                        potential.trial_course ? potential.trial_course.name : "", //.name,
                        potential.level.name,
                        formatDate((potential.trial && potential.trial.class_date)),
                        potential.status,
                        potential.notes,
                        <div>
                          <Button color="primary" aria-label="edit" justIcon round onClick={ this.edit.bind(this, potential)} >
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

export default withStyles(styles, { withTheme: true })(PotentialList);
