import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import {compose} from 'recompose';
import {PasswordForgetLink} from './PasswordForgetPage'
import {SignUpLink} from './SignUpPage';
import {withFirebase} from '../Firebase';
import * as ROUTES from '../constants/routes';
import { Button, Paper,TextField } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import styles from './styles/SignInPageStyles'

const SignInPage=({classes})=>(
    <div className={classes.SignInTotal}>
        <Paper elevation={3} className={classes.SignInForm}>
            <h1>Sign In</h1>
            <SignInForm classes={classes}/>
            <PasswordForgetLink/>
            <SignUpLink classes={classes}/>
        </Paper>
    </div>
)

const INITIAL_STATE={
    email:'',
    password:'',
    error:null,
}

class SignInFormBase extends Component {

    constructor(props){
        super(props);
        this.state={...INITIAL_STATE};
    }

    onSubmit = event => {
        const { email, password } = this.state;
        this.props.firebase
          .doSignInWithEmailAndPassword(email, password)
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(ROUTES.HOME);
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
        const{email,password,error}=this.state;
        const {classes}=this.props;
        const isInvalid=password===''||email==='';
        return (
            <form onSubmit={this.onSubmit} className={classes.SignInFields}>
                <TextField
                    className={classes.SignIn}
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <TextField
                    className={classes.SignIn}
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <Button size="large" variant="contained" disabled={isInvalid} type="submit" color="primary">
                Sign In
                </Button>
                {error && <p> {error.message}</p>}
            </form>
        )
    }
}


const SignInForm=compose(
    withRouter,
    withFirebase,
)(SignInFormBase);

export default withStyles(styles)(SignInPage);
export {SignInPage};

