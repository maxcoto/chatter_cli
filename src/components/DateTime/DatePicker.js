import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

export default function DatePicker(props) {

  const dateProp = props.inputProps.value ? (new Date(props.inputProps.value)) : (new Date());
  const [selectedDate, setSelectedDate] = React.useState(dateProp);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    props.onChange({ target: { name: props.name, value: date.toString() } })
    console.log("date picker:", date);
  };

  const value = props.disabled ? new Date(props.inputProps.value) : selectedDate

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        style={{ marginBottom: "0", marginTop: "26px" }}
        disabled={props.disabled}
        fullWidth
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id={props.id}
        label={props.labelText}
        value={value}
        onChange={handleDateChange}
        KeyboardButtonProps={{ 'aria-label': 'change date' }}
      />
    </MuiPickersUtilsProvider>
  );
}

// <KeyboardDatePicker
//   margin="normal"
//   id="date-picker-dialog"
//   label="Date picker dialog"
//   format="MM/dd/yyyy"
//   value={selectedDate}
//   onChange={handleDateChange}
//   KeyboardButtonProps={{
//     'aria-label': 'change date',
//   }}
// />