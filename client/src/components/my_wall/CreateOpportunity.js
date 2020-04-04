import React, { Component } from 'react';
import 'date-fns';
import axios from 'axios';
import categories from '../constants/categories'
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import {Grid, TextField,Button,FormControl,InputLabel,Select,FormHelperText} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import "react-datepicker/dist/react-datepicker.css";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from './styles/CreateOpportunityStyles'
import {uuid} from 'uuidv4'

class CreateOpportunity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      category: '',
      description:'',
      starting_date: new Date(),
      ending_date: new Date(),
    }
    this.onChange=this.onChange.bind(this)
    this.onChangeStartingDate=this.onChangeStartingDate.bind(this)
    this.onChangeEndingDate=this.onChangeEndingDate.bind(this)
    this.onSubmit=this.onSubmit.bind(this)

  }

  onChange(e) {
    const value=e.target.value;
    this.setState({
        [e.target.name]:value
    })
  }

  onChangeStartingDate(date) {
    this.setState({
      starting_date: date
    })
  }

  onChangeEndingDate(date) {
    this.setState({
      ending_date: date
    })
  }


  onSubmit(e) {
    e.preventDefault();

    const opportunity = {
      name: this.state.name,
      category: this.state.category,
      description: this.state.description,
      starting_date: this.state.starting_date,
      ending_date: this.state.ending_date
    }

    axios.post('/add/', opportunity)
      .then(res => console.log(res.data));
    alert('Opportunity Submitted')
    // window.location = '/mywall';
  }

  render() {

    const {classes}= this.props

    return (
    <div className={classes.CreateOpportunity}>
      <h3>Create New Opportunity</h3>
      <form className={classes.CreateOpportunityForm} onSubmit={this.onSubmit}>
        <TextField required id="outlined-basic" label="Name" variant="outlined" value={this.state.name} name="name" onChange={this.onChange} fullWidth/>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-category-native-simple">Category</InputLabel>
          <Select
            native
            value={this.state.category}
            onChange={this.onChange}
            label="Category"
            inputProps={{
              name: 'category',
              id: 'outlined-category-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            {categories.map((category,index)=> <option key={uuid()} value={index}>{category}</option>)}
          </Select>
          <FormHelperText>Select your category</FormHelperText>
        </FormControl>
        <TextField required multiline rowsMax="4" id="filled-textarea" label="Description" variant="outlined" name="description" value={this.state.description} onChange={this.onChange} fullWidth/>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Starting Date"
              name="starting_date"
              value={this.state.starting_date}
              onChange={this.onChangeStartingDate}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
          />
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Ending Date"
              name="ending_date"
              value={this.state.ending_date}
              onChange={this.onChangeEndingDate}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
          />
          </Grid>
        </MuiPickersUtilsProvider>

        <Button type="submit" className={classes.CreateOpportunityButton} variant="contained">Submit</Button>
      </form>
    </div>
    )
  }
}

export default withStyles(styles)(CreateOpportunity)