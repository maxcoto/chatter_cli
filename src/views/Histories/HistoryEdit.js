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
import HistoryForm from './HistoryForm.js'
import HistoryFields from './HistoryFields.js'

import avatar from "assets/img/faces/marc.jpg";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

class HistoryEdit extends React.Component {

  constructor(props) {
    super(props)

    this.onSuccess = this.onSuccess.bind(this)
    this.onFailure = this.onFailure.bind(this)

    this.onClick = this.onClick.bind(this)
    this.onChange = this.onChange.bind(this)

    this.state = this.props.location.state || { history: null }

    API.configure(props.token)

    if(!this.state.history){
      const id = this.props.location.pathname.split("/")[2]
      API.get('histories', id,
        function(response){
          this.setState({ history: response })
        }.bind(this),
        function(error){
          this.props.notifyError(error)
        }.bind(this)
      )
    }
  }

  onSuccess(response){
    const { id } = response
    this.props.history.push('/histories/' + id, this.state);
    this.props.notifySuccess("History updated successfully")
  }

  onFailure(error){
    console.log(error);
    this.props.notifyError(error)
  }

  onClick(){
    API.update('histories', this.state.history.id, this.state, this.onSuccess, this.onFailure)
  }

  onChange(event){
    const { name, value } = event.target
    this.setState({ history: {...this.state.history, [name]: value } });
  }

  show(history){
    this.props.history.push('/histories/' + history.id, { history });
  }

  render() {
    const { classes, teachers } = this.props
    const { history } = this.state
    if(!history) return null

    return(
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit History {history.id}</h4>
            </CardHeader>

            <HistoryForm history={history} onChange={this.onChange} teachers={teachers} />

            <CardFooter>
              <Button color="primary" onClick={this.onClick}>Update</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    )
  }
}

export default withStyles(styles, { withTheme: true })(HistoryEdit);
