import React from "react";
import API from '../../library/API'

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import ShowIcon from "@material-ui/icons/Visibility";
import SyncIcon from "@material-ui/icons/Sync";
import Button from "components/CustomButtons/Button.js";

import { formatDate } from 'library/helpers/functions.js'
import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

class HistoryList extends React.Component {

  constructor(props) {
    super(props)
    this.state = { history_lists: [] }

    //API.configure(props.token)
    API.all(
      'histories',
      function(data){
        this.setState({ history_lists: data, all: data })
      }.bind(this),
      function(error){
        console.log(error)
        this.props.notifyError("History Lists not loaded :( => " + error)
      }.bind(this)
    )
  }

  pull(created_at){
    const self = this
    API.create(
      'histories',
      { created_at },
      function(result){
        self.props.notifySuccess("History List has been pulled succesfully")
        window.location.reload()
      },
      function(error){
        self.props.notifyError(error)
        console.log(error);
      }
    )
  }

  show(history_list){
    this.props.history.push('/histories/' + history_list.id, { history_list });
  }

  render() {
    const { classes } = this.props
    const { history_lists } = this.state

    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Histories</h4>
            </CardHeader>
            <CardBody>
              <Button color="warning" aria-label="add" onClick={ this.pull.bind(this, (new Date()))} >
                Pull Today
              </Button>
              <Table
                tableHeaderColor="primary"
                tableHead={['Day', 'Status', 'Actions']}
                tableData={
                  history_lists.map(history_list => {
                    return [
                      formatDate(history_list.created_at),
                      history_list.loaded ? "success" : "error",
                      <div>
                        <Button color="info" aria-label="show" justIcon round onClick={ this.show.bind(this, history_list)} >
                          <ShowIcon />
                        </Button>
                        &nbsp;&nbsp;
                        <Button color="primary" aria-label="edit" justIcon round onClick={ this.pull.bind(this, history_list.created_at)} >
                          <SyncIcon />
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
