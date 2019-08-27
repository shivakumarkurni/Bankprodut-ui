import React from 'react'
import axios, { post } from 'axios';
import LeftBar from '../left-bar/left-bar'

class FileUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: '',
            file: null
        }
        // this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        // this.fileUpload = this.fileUpload.bind(this)
    }

    onChange(e) {
        this.setState({ file: e.target.files[0] })
    }

    //   onFormSubmit(e){
    //     e.preventDefault() // Stop form submit
    //     this.fileUpload(this.state.file).then((response)=>{
    //       console.log(response.data);
    //     })
    //   }

    //   fileUpload(file){
    //     const url = 'http://example.com/file-upload';
    //     const formData = new FormData();
    //     formData.append('file',file)
    //     const config = {
    //         headers: {
    //             'content-type': 'multipart/form-data'
    //         }
    //     }
    //     return  post(url, formData,config)
    //   }

    fileUpload = (event) => {
        event.preventDefault();
        const { formData } = this.state;
        // console.log(this.state.file.name);
        var data = new FormData()
        data.append('file', this.state.file)
        axios.post('http://10.117.189.75:9093/bank/products', data).then((response) => {

            console.log(response.data);
            this.props.history.push('/home');
        }).catch((error) => {
        });
    }

    render() {
        return (
            //   <form onSubmit={this.onFormSubmit}>
            <div className=" row">
                <div className="col-md-2">
                    <LeftBar />
                </div>
                <div className="col-md-10">
                    <form encType="multipart/form-data" action="">
                        <h1>File Upload</h1>
                        <input type="file" onChange={this.onChange} />
                        <button type="submit" onClick={this.fileUpload}>Upload</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default FileUpload