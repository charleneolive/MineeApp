import React from 'react';
import 'date-fns';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import useStyles from './styles/ProfilePage2Styles'
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {InputLabel,MenuItem,FormControl,Select} from '@material-ui/core'

export default function ProfilePage2(props) {

  const classes = useStyles();
  const {state,setState}=props;

  const handleChange = event => {
    const value= event.target.value
    const name=event.target.name
    setState((prevState,event)=> {
      return({
        ...prevState,
        [name]:value
      })
    })
  };

  const handleDateOfBirth = (date,event) => {
    const value= date;
    setState((prevState)=> {
      return({
        ...prevState,
        dateOfBirth:value
      })
    })
  };
  // generate a unique identifier for each user based on their username 

  // useEffect(()=> {
  //   axios.get('http://localhost:5000/profile/'+this.props.match.params.id)
  //     .then(response=>{
  //       setState({
  //         firstName:response.data.firstName,
  //         lastName:response.data.lastName,
  //         gender:response.data.gender,
  //         occupation:response.data.occupation,
  //         postalCode:response.data.postalCode,
  //         country:response.data.country,
  //         nationality:response.data.nationality
  //       }),
  //       setDateOfBirth({
  //         dateOfBirth:response.data.DateOfBirth
  //       })
  //     })
  // },[])

  return (
    <div styles={{paddingTop:"5rem"}}>
      <Typography variant="h6" gutterBottom>
        My Particulars
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="firstName" name="firstName" value={state.firstName} onChange={handleChange} label="First Name" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="lastName" name="lastName" value={state.lastName} onChange={handleChange} label="Last Name" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
            <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="gender"
              value={state.gender}
              onChange={handleChange}
            >
              <MenuItem value={10}>Female</MenuItem>
              <MenuItem value={20}>Male</MenuItem>
              <MenuItem value={30}>Transgender</MenuItem>
              <MenuItem value={40}>Prefer not to say</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date of Birth"
                name="dateOfBirth"
                value={state.dateOfBirth}
                onChange={handleDateOfBirth}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
            />
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField required id="occupation" name="occupation" label="Occupation" value={state.occupation} onChange={handleChange} fullWidth />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField required id="postalCode" name="postalCode" label="Postal Code" value={state.postalCode} onChange={handleChange} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="country" name="country" label="Country" value={state.country} onChange={handleChange} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="nationality" name="nationality" label="Nationality" value={state.nationality} onChange={handleChange} fullWidth />
        </Grid>
      </Grid>
    </div>
  );
}