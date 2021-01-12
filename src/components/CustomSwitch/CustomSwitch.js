import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function CustomSwitch(props) {
  const [state, setState] = React.useState({
    checked: props.checked
  });

  const handleChange = (event) => {
    const { name, checked }  = event.target
    setState({ ...state, checked });
    props.onChange({ target: { name, value: checked } })
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            checked={state.checked}
            onChange={handleChange}
            name={props.name}
            color="primary"
          />
        }
        label={props.label}
      />
    </FormGroup>
  );
}
