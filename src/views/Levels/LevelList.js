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

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";


class LevelList extends React.Component {

  constructor(props) {
    super(props)
    this.state = { levels: [], all: [] }
  }

  componentDidMount(){
    if(this.props.levels !== this.state.all){
      const { levels } = this.props
      this.setState({ levels, all: levels })
    }
  }

  componentDidUpdate(){
    if(this.props.levels !== this.state.all){
      const { levels } = this.props
      this.setState({ levels, all: levels })
    }
  }

  search(event){
    const lookup = event.target.value.trim().toLowerCase();
    var list = this.state.all
    if(lookup !== ''){
      list = list.filter(function(item){
        return (
          item.name.toLowerCase().includes(lookup)
        )
      }) || []
    }

    this.setState({ ...this.state, levels: list })
  }

  new(){
    this.props.history.push('/levels/new');
  }

  show(level){
    this.props.history.push('/levels/' + level.id, { level });
  }

  edit(level){
    this.props.history.push('/levels/' + level.id + '/edit', { level });
  }

  delete(level){
    const self = this
    API.delete(
      'levels',
      level.id,
      function(result){
        self.props.notifySuccess("Level has been deleted succesfully")
        window.location.reload()
      },
      function(error){
        console.log(error);
      }
    )
  }

  render() {
    const { classes } = this.props
    const { levels } = this.state

    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <div style={{ float: "left" }}>
                <h4 className={classes.cardTitleWhite}>Levels</h4>
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
                tableHead={['Order', 'Name', 'Actions']}
                tableData={
                  levels.map(level => {
                    return [
                      level.order,
											level.name,
                      <div>
                        <Button color="info" aria-label="show" justIcon round
                                onClick={ this.show.bind(this, level)} >
                          <ShowIcon />
                        </Button>
                        &nbsp;&nbsp;
                        <Button color="primary" aria-label="edit" justIcon round
                                onClick={ this.edit.bind(this, level)} >
                          <EditIcon />
                        </Button>
                        &nbsp;&nbsp;
                        <Button color="danger" aria-label="delete" justIcon round
                                onClick={ this.delete.bind(this, level)} >
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

export default withStyles(styles, { withTheme: true })(LevelList);
