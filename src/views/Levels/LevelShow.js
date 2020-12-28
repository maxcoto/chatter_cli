import React from 'react'
import API from '../../library/API'

import Button from "components/CustomButtons/Button.js";
import { withStyles } from "@material-ui/core/styles";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import LevelFields from './LevelFields.js'

import avatar from "assets/img/faces/marc.jpg";

const styles = {};

class LevelShow extends React.Component {  
  constructor(props) {
    super(props)

    this.state = this.props.location.state || { level: null }

    API.configure(props.token)
  
    if(!this.state.level){
      const id = this.props.location.pathname.split("/")[2]
      API.get('levels', id,
        function(response){
          this.setState({ level: response })
        }.bind(this),
        function(error){
          this.props.notifyError(error)
        }.bind(this)
      )
    }
  }

  onClick(){
    const { id } = this.state.level
    this.props.history.push('/levels/' + id + '/edit', this.state);
  }

  render() {
    const { level } = this.state
    if(!level) return null
    
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
              <LevelFields level={level} />
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

export default withStyles(styles, { withTheme: true })(LevelShow);
