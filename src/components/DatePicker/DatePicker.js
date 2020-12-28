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
    console.log("picker:", date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        fullWidth
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        label={props.labelText}
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  );
}