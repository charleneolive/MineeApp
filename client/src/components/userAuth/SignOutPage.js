import React from 'react';
import {withStyles} from '@material-ui/core';
import {withFirebase} from '../Firebase';
import styles from './styles/SignOutPageStyles'
import {Link,ListItem} from '@material-ui/core';

const SignOutButton=({firebase, text, classes})=> (
    <button type="button" onClick={firebase.doSignOut} className={classes.Button}>
        <Link underline="none" href={`/`} >
            <ListItem button style={{textAlign:"center"}}>
                {text}
            </ListItem>
        </Link>
    </button>
)

export default withFirebase(withStyles(styles)(SignOutButton))