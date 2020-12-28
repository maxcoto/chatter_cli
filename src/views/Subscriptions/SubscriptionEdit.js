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
import SubscriptionForm from './SubscriptionForm.js'
import SubscriptionFields from './SubscriptionFields.js'

import { withStyles } from "@material-ui/core/styles";
import avatar from "assets/img/faces/marc.jpg";



const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
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

class SubscriptionEdit extends React.Component {

  constructor(props) {
    super(props)

    this.onSuccess = this.onSuccess.bind(this)
    this.onFailure = this.onFailure.bind(this)

    this.onClick = this.onClick.bind(this)
    this.onChange = this.onChange.bind(this)

    this.state = this.props.location.state || { subscription: null }

    API.configure(props.token)
  
    if(!this.state.subscription){
      const id = this.props.location.pathname.split("/")[2]
      API.get('subscriptions', id,
        function(response){
          this.setState({ subscription: response })
        }.bind(this),
        function(error){
          this.props.notifyError(error)
        }.bind(this)
      )
    }
  }

  onSuccess(response){
    const { id } = response
    this.props.history.push('/subscriptions/' + id, this.state);
    this.props.notifySuccess("Subscription updated successfully")
  }
  
  onFailure(error){
    console.log(error);
    this.props.notifyError(error)
  }
  
  onClick(){
    API.update('subscriptions', this.state.subscription.id, this.state, this.onSuccess, this.onFailure)
  }
  
  onChange(event){
    const { name, value } = event.target
    this.setState({ subscription: {...this.state.subscription, [name]: value } });
  }
  
  show(subscription){
    this.props.history.push('/subscriptions/' + subscription.id, { subscription });
  }

  render() {
    const { classes, students, courses, teachers } = this.props
    const { subscription } = this.state
    if(!subscription) return null
 
    return(
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Subscription {subscription.id}</h4>
              <p className={classes.cardCategoryWhite}>what should go here ?</p>
            </CardHeader>

            <SubscriptionForm
              subscription={subscription}
              students={students}
              courses={courses}
              teachers={teachers}
              onChange={this.onChange}
            />

            <CardFooter>
              <Button color="primary" onClick={this.onClick}>Update</Button>
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
              <Button color="primary" onClick={this.show.bind(this, subscription)} >
                Show
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    )
  }
}

export default withStyles(styles, { withTheme: true })(SubscriptionEdit);


