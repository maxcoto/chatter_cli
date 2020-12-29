import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';

export default function TimePicker(props) {
  const timeProp = props.inputProps.value ? (new Date(props.inputProps.value)) : (new Date());
  const [selectedTime, setSelectedTime] = React.useState(timeProp);

  const handleTimeChange = (time) => {
    setSelectedTime(time);
    props.onChange({ target: { name: props.name, value: time.toString() } })
    console.log("time picker:", time);
  };

  const value = props.disabled ? new Date(props.inputProps.value) : selectedTime

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardTimePicker
          style={{ marginBottom: "0", marginTop: "26px" }}
          disabled={props.disabled}
          fullWidth
          margin="normal"
          id={props.id}
          label={props.labelText}
          value={value}
          onChange={handleTimeChange}
          KeyboardButtonProps={{ 'aria-label': 'change time' }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}

