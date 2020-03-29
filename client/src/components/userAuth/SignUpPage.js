import React, {Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import {compose} from 'recompose';
import {withFirebase} from '../Firebase/index'
import * as ROUTES from '../constants/routes';
import { Button, Paper,TextField } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import styles from './styles/SignUpPageStyles'

const INITIAL_STATE={
    username:'',
    email:'',
    passwordOne:'',
    passwordTwo:'',
    error:null
};

const SignUpPage =({classes}) => {
    return (
    <div className={classes.SignUpTotal}>
    <Paper elevation={3} className={classes.SignUpForm}>
        <h1>Sign Up</h1>
        <SignUpForm classes={classes}/>
    </Paper>
    </div>
    )
}



class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state={...INITIAL_STATE}
    }
    onSubmit=event=> {
        const {username, email, passwordOne}=this.state;
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser=> {
                return this.props.firebase
                    .user(authUser.user.id)
                    .set({
                        username,
                        email
                    });
            })
            .then(()=> {
                this.setState({...INITIAL_STATE});
                this.props.history.push(ROUTES.HOME)
            })
            .catch(error=> {
                this.setState({error});
            })
            event.preventDefault();

    };
    onChange=event=> {
        this.setState({[event.target.name]:event.target.value})

    };

    render(){
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error
        }=this.state;
        const {classes}=this.props;

        const isInvalid=
            passwordOne !==passwordTwo||
            passwordOne===''||
            email===''||
            username==='';
        return (
            
            <form onSubmit={this.onSubmit} className={classes.SignUpFields}>
            <TextField
            className={classes.SignUp}
            required
            fullWidth
            name="username"
            value={username}
            onChange={this.onChange}
            type="text"
            placeholder="Full Name"
            />
            <TextField
            className={classes.SignUp}
            required
            fullWidth
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email"
            />
            <TextField
            className={classes.SignUp}
            required
            fullWidth
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
            />
            <TextField
            className={classes.SignUp}
            required
            fullWidth
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm Password"
            />
            <Button size="large" variant="contained" disabled={isInvalid} type="submit" color="primary">
            Sign Up
            </Button>
            {error && <p> {error.message}</p>}
            </form>
            
        )
    }
}

const SignUpLink=()=> (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);
const SignUpForm = compose (
    withRouter,
    withFirebase,
)(SignUpFormBase);
export default withStyles(styles)(SignUpPage);

export {SignUpForm, SignUpLink};
