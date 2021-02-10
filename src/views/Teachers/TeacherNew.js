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
import TeacherForm from './TeacherForm.js'
import TeacherFields from './TeacherFields.js'

import { defaultTeacher } from 'variables/general'
import avatar from "assets/img/faces/marc.jpg";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

class TeacherNew extends React.Component {

  constructor(props) {
    super(props)

    this.state = { teacher: defaultTeacher }

    this.onSuccess = this.onSuccess.bind(this)
    this.onFailure = this.onFailure.bind(this)

    this.onClick = this.onClick.bind(this)
    this.onChange = this.onChange.bind(this)

    API.configure(props.token)
  }

  onSuccess(response){
    const { id } = response
    this.props.history.push('/teachers/' + id, { teacher: response} );
    this.props.notifySuccess("Teacher created succesfully")
  }

  onFailure(error){
    this.props.notifyError(error)
  }

  onClick(){
    API.create('teachers', this.state, this.onSuccess, this.onFailure)
  }

  onChange(event){
    const { name, value } = event.target
    this.setState({ teacher: {...this.state.teacher, [name]: value } });
  }

  render() {
    const { classes } = this.props
    const { teacher } = this.state
    if(!teacher) return null

    return(
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>New Teacher</h4>
            </CardHeader>

            <TeacherForm teacher={teacher} onChange={this.onChange} />

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
              <TeacherFields teacher={teacher} />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    )
  }
}

export default withStyles(styles, { withTheme: true })(TeacherNew);
