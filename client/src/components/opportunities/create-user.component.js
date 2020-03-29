import React, {Component} from 'react';
import axios from 'axios';

export default class CreateUsers extends Component {
    constructor(props){
        super(props);
        this.state={
            username:"",
        }
        this.onChange=this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }

    componentDidMount() {
        this.setState({
            username:'test user'
        })
    }

    onChange(e) {
        const value=e.target.value;
        this.setState({
            [e.target.name]:value,
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const user= {
            username: this.state.username,
        }
        console.log(user)
        axios.post('http://localhost:5000/users/add', user)
            .then(res=> console.log(res.data));
        // take cursor back to home page
        this.setState({
            username:''
        })


    }

    render() {
        return (
            <div>
            <h3>Create New User</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Username: </label>
                <input  type="text"
                    required
                    name="username"
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChange}
                    />
              </div>
              <div className="form-group">
                <input type="submit" value="Create User" className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
    }
}