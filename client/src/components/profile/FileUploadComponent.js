import React,{Component} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';


export default class FileUploadComponent extends Component{
    constructor(props) {
        super(props);
        this.state={
            selectedFile: null,
            storedFiles:null,
            open:false
        }
        this.onChange=this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
    onChange=e=> {
        this.setState({
            selectedFile: e.target.files[0],
            loaded:0,
            open:true
        })

    }
    onSubmit=e=> {
        e.preventDefault();
        const file=document.getElementById('inputGroupFile01').files
        const formData= new FormData()
        console.log(file[0])
        formData.append('file',file[0])
        axios.post("http://localhost:5000/upload",formData)
            .then(res=> {
            console.log(res.statusText)
        })

        axios.get('http://localhost:5000/file/'+file[0].name)
        .then(response=>{
            this.props.setState((prevState,event)=> {
                return({
                  ...prevState,
                  files:response.data._id
                })
              })
        })
        .catch((error)=> {
            console.log(error)
        })
        document
            .getElementById('img')
            .setAttribute('src', `http://localhost:5000/file/${file[0].name}`)

    }


    render() {
    return (
        <div>
            <p>Upload Relevant Files</p>
            <div>
                <input type="file" name="file" id="inputGroupFile01" onChange={this.onChange}/>
                {this.state.open&&<Button variant="contained" onClick={this.onSubmit}>Submit</Button>}
                <img id="img" style={{display:"block"}} />
            </div>
        </div>
    )
    }s
}