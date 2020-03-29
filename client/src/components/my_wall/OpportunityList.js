import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import categories from '../constants/categories'
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from '@material-ui/core';
import {withAuthorization} from '../session'

const Opportunity = props => (
    <TableRow>
      <TableCell align="center">{props.opportunity.name}</TableCell>
      <TableCell align="center">{categories[props.opportunity.category]}</TableCell>
      <TableCell align="center">{props.opportunity.description}</TableCell>
      <TableCell align="center">{props.opportunity.starting_date.substring(0,10)}</TableCell>
      <TableCell align="center">{props.opportunity.ending_date.substring(0,10)}</TableCell>
      <TableCell align="center">
        <Link to={"/mywall/edit/"+props.opportunity._id}>edit</Link> | <Link to="#" onClick={() => { props.deleteOpportunity(props.opportunity._id) }}>delete</Link>
      </TableCell>
    </TableRow>
  )

class OpportunityList extends Component {
    constructor(props){
        super(props);
        this.deleteOpportunity=this.deleteOpportunity.bind(this);
        this.state={opportunities:[]};
    }
    

    deleteOpportunity(id){
        axios.delete('http://localhost:5000/mywall/'+id)
        .then(res=> console.log(res.data))
        // delete the required exercise
        // _id is automatically created when we created the object
        this.setState({
            opportunities: this.state.opportunities.filter(el=> el._id!==id)
        })
    }

    componentDidMount() {
        axios.get('http://localhost:5000/mywall/list/')
            .then(response=>{
                this.setState({opportunities:response.data})
            })
            .catch((error)=> {
                console.log(error)
            })
    }

    opportunityList() {
        return this.state.opportunities.map(currentopportunity => {
          return <Opportunity opportunity={currentopportunity} deleteOpportunity={this.deleteOpportunity} key={currentopportunity._id}/>;
        })
      }
    render() {
        return (
          <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Category</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Starting Date</TableCell>
                <TableCell align="center">Ending Date</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            { this.opportunityList() }
            </TableBody>
          </Table>
        </TableContainer>
        )
    }
}

const condition = authUser=> !!authUser;
export default withAuthorization(condition)(OpportunityList);
