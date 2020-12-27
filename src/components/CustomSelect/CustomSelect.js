import React from 'react';

// import SyntaxHighlighter from 'react-syntax-highlighter/prism';
// import { prism } from 'react-syntax-highlighter/styles/prism';

// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

//import styles from "assets/jss/material-dashboard-pro-react/customSelectStyle.js";

const styles = {
  selectFormControl: {
    paddingBottom: "10px",
    margin: "27px 0 0 0",
    position: "relative",
    verticalAlign: "unset"
  },
  selectLabel: {},
  selectMenu: {},
  select: {},
  selectMenuItem: {},
  selectMenuItemSelected: {},
};

const useStyles = makeStyles(styles);

export default function CustomSelect(props){
  const [simpleSelect, setSimpleSelect] = React.useState("");
  const handleSimple = event => {
    setSimpleSelect(event.target.value);
    props.onChange(event)
  };
  const classes = useStyles();
  return (
    <FormControl fullWidth className={classes.selectFormControl}>
      <InputLabel
        htmlFor={props.id}
        className={classes.selectLabel}
      >
        {props.labelText}
      </InputLabel>
      <Select
        MenuProps={{ className: classes.selectMenu }}
        classes={{ select: classes.select }}
        value={simpleSelect || ""}
        onChange={handleSimple}
        inputProps={{
          id: props.id,
          value: props.inputProps.value || "",
          name: props.inputProps.name
        }}
      >
        <MenuItem disabled classes={{ root: classes.selectMenuItem }}>
          {props.labelText}
        </MenuItem>

        {
          props.values.map((value, index) => {
            return (
              <MenuItem
                classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
                name={ value.name }
                value={ value.id }
                key={ index }
              >
                { value.name }
              </MenuItem>
            )
          })
        }
      </Select>
    </FormControl>
  );
}