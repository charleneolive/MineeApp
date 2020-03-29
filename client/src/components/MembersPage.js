import React from 'react';
import Link from '@material-ui/core/Link';
import { Button, Typography,Divider } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import styles from './MembersPageStyles'

const MembersPage=({classes})=>{
    return(
    <div className={classes.MembersPageTotal}>
        <div className={classes.MembersPageForm}>
            <Typography variant="h2" component="h1" className={classes.Register}>
                Be.A.Member.
            </Typography>

            <div className={classes.MembersPageItems}>
                <div>
                <Link href="/signup" style={{textDecoration:"none"}}>
                <Button className={classes.MemberLink} type="button" size="large" variant="outlined">       
                    Sign Up
                </Button>
                </Link>
                <p className={classes.MemberText}>I'm a volunteer. Who's that? Introduce yourself!</p>

                </div>
                <Divider orientation="vertical" flexItem/>
                <div>
                <Link href="/signin" style={{textDecoration:"none"}}>
                <Button className={classes.MemberLink} size="large" variant="outlined" type="submit" fullWidth> 
                    Sign In
                </Button>
                </Link>
                <p className={classes.MemberText}>I'm a volunteer. Welcome my long lost friend!</p>
                </div>
            </div>
        </div>
        <div className={classes.MembersPageForm}>
            <Typography variant="h2" component="h1" className={classes.Register}>
                Be.An.Organisation.
            </Typography>

            <div className={classes.MembersPageItems}>
                <div>
                <Link href="/signup" style={{textDecoration:"none"}}>
                <Button className={classes.MemberLink} type="button" size="large" variant="outlined">       
                    Sign Up
                </Button>
                </Link>
                <p className={classes.MemberText}>I'm an organisation. Ready to start!</p>

                </div>
                <Divider orientation="vertical" flexItem/>
                <div>
                <Link href="/signin" style={{textDecoration:"none"}}>
                <Button className={classes.MemberLink} size="large" variant="outlined" type="submit" fullWidth> 
                    Sign In
                </Button>
                </Link>
                <p className={classes.MemberText}>I'm an organisation. Let's find some volunteers!</p>
                </div>
            </div>
        </div>
    </div>
    )

}
export default withStyles(styles)(MembersPage);

