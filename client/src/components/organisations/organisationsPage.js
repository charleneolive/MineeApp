import React, {Component} from 'react';
import {withAuthorization} from '../session'


class organisationsPage extends Component {
    render() {
        return (
            <div style={{paddingTop:"5rem",paddingLeft:"240px"}}>
                You're staring at the organisations
            </div>
        )
    }
}

const condition = authUser=> !!authUser;
export default withAuthorization(condition)(organisationsPage);