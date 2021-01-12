import React from 'react'
import API from '../../library/API'

import Button from "components/CustomButtons/Button.js";
import { withStyles } from "@material-ui/core/styles";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import TeacherFields from './TeacherFields.js'

import avatar from "assets/img/faces/marc.jpg";

const styles = {};

class TeacherShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.location.state || { teacher: null }

    API.configure(props.token)

    if(!this.state.teacher){
      const id = this.props.location.pathname.split("/")[2]
      API.get('teachers', id,
        function(response){
          this.setState({ teacher: response })
        }.bind(this),
        function(error){
          this.props.notifyError(error)
        }.bind(this)
      )
    }
  }

  onClick(){
    const { id } = this.state.teacher
    this.props.history.push('/teachers/' + id + '/edit', this.state);
  }

  render() {
    const { teacher } = this.state
    if(!teacher) return null

    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <TeacherFields teacher={teacher} />
              <Button color="primary" onClick={this.onClick.bind(this)} >
                Edit
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    )
  }
}

export default withStyles(styles, { withTheme: true })(TeacherShow);
