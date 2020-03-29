import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/core';
import {withFirebase} from '../Firebase';
import * as ROUTES from '../constants/routes';
import { Button, Paper,TextField } from '@material-ui/core';
import styles from './styles/PasswordForgetPageStyles.js'

const PasswordForgetPage=({classes})=> (
    <div className={classes.PasswordForgetPageTotal}>
        <Paper elevation={3} className={classes.PasswordForgetForm}>
        <h1>Password Forget</h1>
        <PasswordForgetForm classes={classes}/>
        </Paper>
    </div>
);

const INITIAL_STATE={
    email:'',
    error:null,
}

class PasswordForgetFormBase extends Component {
    constructor(props){
        super(props);
        this.state={...INITIAL_STATE}
    }
    onSubmit = event => {
        const { email } = this.state;
        this.props.firebase
          .doPasswordReset(email)
          .then(() => {
            this.setState({ ...INITIAL_STATE });
          })
          .catch(error => {
            this.setState({ error });
          });
        event.preventDefault();
      };
      onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };
    render(){
        const{email,error}=this.state;
        const isInvalid=email==='';
        const {classes}=this.props;

        return (
            <form onSubmit={this.onSubmit} className={classes.PasswordForgetFields}>
                <TextField
                    className={classes.PasswordForget}
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <Button size="large" variant="contained" disabled={isInvalid} type="submit" color="primary">
                Reset my Password
                </Button>
                {error && <p>{error.message}</p>}
            </form>
        )
    }
}

const PasswordForgetLink=()=> (
    <p>
        <Link to={ROUTES.PASSWORD_FORGET}>Forget Password?</Link>
    </p>
)

export default withStyles(styles)(PasswordForgetPage);
const PasswordForgetForm=withFirebase(PasswordForgetFormBase);
export {PasswordForgetForm, PasswordForgetLink}