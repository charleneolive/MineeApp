import React from 'react';
import axios from 'axios';
import {CssBaseline,Paper,Stepper,Step,StepLabel,Button,Typography} from '@material-ui/core';
import useStyles from './styles/ProfilePageStyles';
import ProfilePage3 from './ProfilePage3';
import ProfilePage2 from './ProfilePage2';
import ProfilePage4 from './ProfilePage4';
import ImagePage from './ImagePage';
import {withAuthorization} from '../session'

function ProfilePage() {
  const classes = useStyles();
  const steps = ['My Particulars', 'My Experience', 'My Education','My Projects','My Volunteering Interests'];

  const INITIAL_PARTICULARS={
      photoUrl:'',
      firstName:'', 
      lastName:'', 
      gender:'',
      occupation:'',
      postalCode:'',
      country:'',
      dateOfBirth: new Date(),
      nationality:'',
      charityType:"",
      interests:"",
      files:"",
      occupations:[
        {
          heading:"Imaging Intern",
          start_date:"20/10/2019",
          end_date:"20/10/2019",
          body:"Test drive"
        },
      ],
      education:[
        {
          heading:"Nanyang Tech",
          start_date:"20/10/2019",
          end_date:"20/10/2019",
          body:"Test drive"
        },
        {
          heading:"Tech Nanyang",
          start_date:"20/10/2019",
          end_date:"20/10/2019",
          body:"Test drive"
        },
      ],
      projects: [
        {
          heading:"Mini Interface",
          start_date:"20/10/2019",
          end_date:"20/10/2019",
          body:"Test drive"
        },
        {
          heading:"Tech Nanyang",
          start_date:"20/10/2019",
          end_date:"20/10/2019",
          body:"Test drive"
        },
      ]
}
  const [state,setState]=React.useState(INITIAL_PARTICULARS);

  const onSubmit=(e)=>{
    e.preventDefault();

    axios.post('/profile/add', state)
      .then(res => console.log(res.data));
  }

  return (
    <div>
      <CssBaseline />
      <form onSubmit={onSubmit}>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          
          <Typography component="h1" variant="h4" align="center">
            Profile
          </Typography>
          <p>You need to fill up all the fields to submit the form!</p>
          <Stepper className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            <ImagePage style={{width:"600px"}} setState={setState} />
            <ProfilePage2 state={state} setState={setState} />
            <ProfilePage3 state={state} setState={setState} name="My Work Experience" category={state.occupations} type="occupations"/>
            <ProfilePage3 state={state} setState={setState} name="My Education" category={state.education} type="education"/>
            <ProfilePage3 state={state} setState={setState} name="My Projects" category={state.projects} type="projects"/>
            <ProfilePage4 state={state} setState={setState}/>
            
            <div className={classes.buttons}>
                <Button className={classes.button}>
                  Cancel
                </Button>
              <Button variant="contained" color="primary" type="submit" className={classes.button}>
                Submit
              </Button>
            </div>
          </React.Fragment>
        </Paper>
      </main>
      </form>
    </div>
    
  );
}

const condition = authUser=> !!authUser;
export default withAuthorization(condition)(ProfilePage);