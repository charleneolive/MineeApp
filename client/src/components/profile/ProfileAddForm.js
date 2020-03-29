import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends Component {
  constructor(props){
    super(props);
    this.state={
      heading:"",
      start_date:new Date(),
      end_date:new Date(),
      body:""
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleClose=this.handleClose.bind(this)
    this.onSubmit=this.onSubmit.bind(this)
  }

  handleClose = () => {
    this.props.setOpen(false)
  };

  handleChange=(e)=>{
    const value=e.target.value;
    this.setState({
      [e.target.name]:value
  })
  }

  onSubmit=(e)=>{
    e.preventDefault();
    const temp ={
      heading:this.state.heading,
      start_date:this.state.start_date,
      end_date:this.state.end_date,
      body:this.state.body
    }
    this.props.setOpen(false)
    this.props.setState(prevState => ({
      ...prevState,
      [this.props.type]: [...prevState[this.props.type], temp]
    }))
    
  }
  render(){
    
  return (
    <div>
      <Dialog open={true} onClose={this.handleClose} aria-labelledby="form-dialog-title">
      <form onSubmit={this.onSubmit}>
        <DialogTitle id="form-dialog-title">
        Add another me:)
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Come and fill me up:P
          </DialogContentText>
          <TextField
          required
            placeholder="My Job Title:P"
            type="text"
            name="heading"
            value={this.state.heading}
            onChange={this.handleChange}
            fullWidth
          />
        <TextField
            id="startDate"
            placeholder="Start Date:P"
            type="date"
            name="start_date"
            onChange={this.handleChange}
            fullWidth
          />
          <TextField
            id="endDate"
            placeholder="End Date:P"
            type="date"
            name="end_date"
            onChange={this.handleChange}
            fullWidth
          />
          <TextField
            multiline
            rows="4"
            placeholder="Description:P"
            type="text"
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">Cancel</Button>
          <Button type="submit" color="primary">Add</Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
}