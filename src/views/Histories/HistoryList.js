import React from "react";
import API from '../../library/API'

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

import { formatDateTime } from 'library/helpers/functions.js'
import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

class HistoryList extends React.Component {

  constructor(props) {
    super(props)
    this.state = { histories: [], all: [] }

    API.configure(props.token)
    API.all(
      'histories',
      function(data){
        this.setState({ histories: data, all: data })
        this.props.notifySuccess("Histories loaded !!")
      }.bind(this),
      function(error){
        console.log(error)
        this.props.notifyError("Histories not loaded :( => " + error)
      }.bind(this)
    )
  }

  search(event){
    const lookup = event.target.value.trim().toLowerCase();
    var list = this.state.all
    if(lookup !== ''){
      list = list.filter(function(item){
        return (
          item.teacher.first_name.toLowerCase().includes(lookup) ||
          item.teacher.last_name.toLowerCase().includes(lookup)
        )
      }) || []
    }

    this.setState({ ...this.state, histories: list })
  }

  new(){
    this.props.history.push('/histories/new');
  }

  show(history){
    this.props.history.push('/histories/' + history.id, { history });
  }

  edit(history){
    this.props.history.push('/histories/' + history.id + '/edit', { history });
  }

  delete(history){
    const self = this
    API.delete(
      'histories',
      history.id,
      function(result){
        self.props.notifySuccess("History has been deleted succesfully")
        window.location.reload()
      },
      function(error){
        console.log(error);
      }
    )
  }

  render() {
    const { classes } = this.props
    const { histories } = this.state

    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <div style={{ float: "left" }}>
                <h4 className={classes.cardTitleWhite}>Histories</h4>
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
                tableHead={['Teacher', 'Course', 'Event Id', 'Duration', 'Attended At', 'Actions']}
                tableData={
                  histories.map(history => {
                    return [
                      history.teacher.first_name + " " + history.teacher.last_name,
                      history.summary,
											history.event_id,
											history.duration,
											formatDateTime(history.created_at),
                      <div>
                        <Button color="info" aria-label="show" justIcon round
                                onClick={ this.show.bind(this, history)} >
                          <ShowIcon />
                        </Button>
                        &nbsp;&nbsp;
                        <Button color="primary" aria-label="edit" justIcon round
                                onClick={ this.edit.bind(this, history)} >
                          <EditIcon />
                        </Button>
                        &nbsp;&nbsp;
                        <Button color="danger" aria-label="delete" justIcon round
                                onClick={ this.delete.bind(this, history)} >
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

export default withStyles(styles, { withTheme: true })(HistoryList);
