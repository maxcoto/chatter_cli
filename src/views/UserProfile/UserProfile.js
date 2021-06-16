import React from "react";
// @material-ui/core components

//import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
//import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";

import URI from 'library/api/service.js'

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function UserProfile(props) {
  const classes = useStyles();

  const onClick = () => {
    window.location = URI + '/redirect'
  }
  
  const cron = props.stats?.cron
  if (!cron) return null

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Profile</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Email"
                    id="email"
                    formControlProps={{ fullWidth: true }}
                    inputProps={{
                      disabled: true,
                      value: "chloeegott@gmail.com"
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={onClick}>Connect with Google Calendar</Button>
            </CardFooter>
          </Card>
        </GridItem>
        
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Server Status</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  { cron.status && <Button color="success" onClick={onClick}>operational</Button> }
                  { 
                    !cron.status && 
                      <div>
                        <Button color="danger" onClick={onClick}>crashed</Button>
                        <br /><br />
                        <div>
                          { cron.message }
                        </div>
                      </div>
                  }
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
