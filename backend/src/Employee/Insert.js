import React from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

class Insert extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
          nik : "",
          name : "",
          phone : "",
          address : "",
          email : ""
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const nama = target.name;

        this.setState({[nama]:value});
    }

    handleSubmit(event) {
        const data = {
            name:  this.state.name,
            phone : this.state.phone,
            address : this.state.address,
            email : this.state.email,
            nik : this.state.nik,
        };

        var config = {
            headers: { 
              'Authorization': 'Bearer '+ localStorage.getItem('token')
            }
        };

        axios.post(process.env.REACT_APP_URL_API + '/employee/store', data, config)
            .then(res => {
                window.location.href = '/employee';
            })
            .catch(err => {
                console.log(err)
            }
        )
        event.preventDefault();
    }
    render(){
        return (
            <div className="clearfix row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="header pb-0">
                            <div className="row">
                                <div className="col-md-2"><i className="fa fa-arrow-left text-info mr-2 ml-2"></i>  <label style={{fontSize:"18px"}}>Add Employee</label></div>
                                <div className="col-md-10 text-right">
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className="body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>NIK</label>
                                            <input type="text" className="form-control" name="nik" value={this.state.nik} onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input type="text" className="form-control" name="name" value={this.state.nama} onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input type="text" className="form-control" name="phone" value={this.state.phone} onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Address</label>
                                            <input type="text" className="form-control" name="address" value={this.state.address} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="form-group">
                                    <Link className="mr-2" to="/employee"><i className="fa fa-arrow-left"></i> Back</Link>
                                    <button type="submit" className="btn btn-info"><i className="fa fa-save"></i> Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Insert;
