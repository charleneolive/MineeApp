import React, {Component} from 'react';
import {withAuthorization} from '../session'


class inboxPage extends Component {
    render() {
        return (
            <div style={{paddingTop:"5rem",paddingLeft:"240px"}}>
                You're staring at the Inbox
            </div>
        )
    }
}

const condition = authUser=> !!authUser;
export default withAuthorization(condition)(inboxPage);