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
import SubscriptionForm from './SubscriptionForm.js'
import SubscriptionFields from './SubscriptionFields.js'

import { withStyles } from "@material-ui/core/styles";
import { defaultSubscription } from 'variables/general'
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


class SubscriptionNew extends React.Component {

  constructor(props) {
    super(props)

    this.state = { subscription: defaultSubscription }

    this.onSuccess = this.onSuccess.bind(this)
    this.onFailure = this.onFailure.bind(this)

    this.onClick = this.onClick.bind(this)
    this.onChange = this.onChange.bind(this)

    API.configure(props.token)
  }

  onSuccess(response){
    const { id } = response
    this.props.history.push('/subscriptions/' + id, { subscription: response} );
    this.props.notifySuccess("Subscription created succesfully")
  }
  
  onFailure(error){
    this.props.notifyError(error)
  }
  
  onClick(){
    API.create('subscriptions', this.state, this.onSuccess, this.onFailure)
  }

  onChange(event){
    const { name, value } = event.target
    this.setState({ subscription: {...this.state.subscription, [name]: value } });
  }

  render() {
    const { classes } = this.props
    const { subscription } = this.state
    if(!subscription) return null
 
    return(
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>New Subscription</h4>
            </CardHeader>

            <SubscriptionForm
              subscription={subscription}
              students={this.props.students}
              courses={this.props.courses}
              onChange={this.onChange}
            />

            <CardFooter>
              <Button color="primary" onClick={this.onClick} >
                Create
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <SubscriptionFields subscription={subscription} />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    )
  }
}

export default withStyles(styles, { withTheme: true })(SubscriptionNew);

