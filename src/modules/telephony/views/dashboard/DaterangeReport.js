import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { Button, makeStyles } from '@material-ui/core';
// import classes from '*.module.css';

export default function MaterialUIPickers(props) {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const useStyles = makeStyles({
    root: {

      "& .MuiInputBase-root": {
        // padding: 0,
        "& .MuiButtonBase-root": {
          // padding: 0,
          // paddingLeft: 10
        },
        "&.MuiFormControl-marginNormal": {

        },
        "& .MuiInputBase-input": {
          padding: 0,
          // paddingLeft: 0,
          marginTop: 0
        }
      }
    }
  });
  const classes = useStyles();

  const handleSubmit = (e) => {
    console.log("i submitted")
    props.getALF(startDate, endDate)
  };

  //console.log(startDate, endDate)

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {/* <Grid item lg={3} sm={6}> */}
      <KeyboardDatePicker
        className={classes.root}
        disableToolbar
        variant="inline"
        format="dd/MM/yyyy"
        margin="normal"
        id="date-picker-inline"
        label="Start Date"
        value={startDate}
        onChange={date => {
          props.handleChange()
          setStartDate(date)
        }}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      /> &nbsp;
      {/* </Grid> */}
      {/* <Grid item lg={3} sm={6}> */}
      <KeyboardDatePicker
        className={classes.root}
        disableToolbar
        variant="inline"
        format="dd/MM/yyyy"
        margin="normal"
        id="date-picker-inline"
        label="End Date"
        value={endDate}
        onChange={date => {
          props.handleChange()
          setEndDate(date)
        }}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
      {/* </Grid> */}
      {/* <Grid item lg={3} sm={6}> */}
      <br />
      <Button size="large" variant="contained" color="primary" onClick={handleSubmit}>Show Profiles</Button>
      {/* </Grid> */}
      {/* <Grid item lg={3} sm={6}> */}
      <br />
      {/* </Grid> */}
    </MuiPickersUtilsProvider>
  );
}
