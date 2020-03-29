import React from 'react';
import 'date-fns';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles/ProfilePage2Styles'
import FileUploadComponent from './FileUploadComponent'
import {InputLabel,MenuItem,FormControl,Select} from '@material-ui/core'

export default function ProfilePage4(props) {

  const classes = useStyles();
  const {state,setState}=props;
  const [dateOfBirth,setDateOfBirth]=React.useState(new Date());
  const onSubmit=e=>{
    e.preventDefault();
    const user = {
      firstName:state.firstName,
      lastName:state.lastName,
      gender:state.gender,
      occupation:state.occupation,
      postalCode:state.postalCode,
      country:state.country,
      nationality:state.nationality,
      dateOfBirth:dateOfBirth
    }
    console.log(user)
    // axios.post('http://localhost:5000/profile/add',user)
    //   .then(res=> console.log(res.data))
  }

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

  return (
    <div className={classes.profilePage4}>
      <Typography variant="h6" gutterBottom>
        My Volunteering Interests
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
            <FormControl className={classes.formControl} fullWidth>
            <InputLabel id="demo-simple-select-label">Type of Charity</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="charityType"
              value={state.charityType}
              onChange={handleChange}
            >
              <MenuItem value={10}>Animal</MenuItem>
              <MenuItem value={20}>Environmental</MenuItem>
              <MenuItem value={30}>Health</MenuItem>
              <MenuItem value={40}>Education</MenuItem>
              <MenuItem value={50}>Arts and Culture</MenuItem>
              <MenuItem value={60}>LGBT Rights</MenuItem>
              <MenuItem value={70}>Women Rights</MenuItem>
              <MenuItem value={80}>Others</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
            <FormControl className={classes.formControl} fullWidth>
            <InputLabel id="demo-simple-select-label">Interests</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="interests"
              value={state.interests}
              onChange={handleChange}
            >
              <MenuItem value={10}>Web Development</MenuItem>
              <MenuItem value={20}>Web Design</MenuItem>
              <MenuItem value={30}>Photography</MenuItem>
              <MenuItem value={40}>Social Media Marketing</MenuItem>
              <MenuItem value={50}>Graphic Design</MenuItem>
              <MenuItem value={60}>Others</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <FileUploadComponent state={state} setState={setState} />
        
      </Grid>
      
    </div>
  );
}