import React,{Component} from 'react';
import { Button, TextField } from '@material-ui/core';
import {withStyles} from '@material-ui/core';
import {withFirebase} from '../Firebase';
import styles from './styles/PasswordChangePageStyles.js'

const INITIAL_STATE={
    passwordOne:'',
    passwordTwo:'',
    error:null,
}

class PasswordChangeForm extends Component {
    constructor(props){
        super(props);
        this.state={...INITIAL_STATE};
    }
    
    onSubmit=event=> {
        const{passwordOne}=this.state;
        this.props.firebase
            .doPasswordUpdate(passwordOne)
            .then(()=> {
                this.setState({...INITIAL_STATE})
            })
            .catch(error=> {
                this.setState({error});
            })
        event.preventDefault();
    }
    onChange=event=> {
        this.setState({[event.target.name]:event.target.value});
    };
    render(){
        const {classes}=this.props;
        const {passwordOne, passwordTwo, error}=this.state;
        const isInvalid =
            passwordOne !== passwordTwo || passwordOne==='';
        return (
            <form onSubmit={this.onSubmit} className={classes.PasswordChangeFields}>
                <TextField
                classes={classes.PasswordChange}
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="New Password"/>
                <TextField
                classes={classes.PasswordChange}
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm New Password" />
                <Button size="large" variant="contained" disabled={isInvalid} type="submit" color="primary" href="#contained-buttons">
                Reset my Password
                </Button>

                {error && <p>{error.message}</p>}
            </form>
        )
    }
}

export default withFirebase(withStyles(styles)(PasswordChangeForm))