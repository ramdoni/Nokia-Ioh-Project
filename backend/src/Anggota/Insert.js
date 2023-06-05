import React from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

class Insert extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
          nama : "",
          telepon : "",
          alamat : ""
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
            nama:  this.state.nama,
            telepon : this.state.telepon,
            alamat : this.state.alamat
        };

        var config = {
            headers: { 
              'Authorization': 'Bearer 2|FR7C7kExqtDBwp5B9DhBir9E8e3OUdTLm2fxX83c'
            }
        };

        axios.post('http://127.0.0.1:8000/api/anggota/insert', data, config)
            .then(res => {
                window.location.href = '/anggota';
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
                                <div className="col-md-2"><i className="fa fa-arrow-left text-info mr-2 ml-2"></i>  <label style={{fontSize:"18px"}}>Tambah Anggota</label></div>
                                <div className="col-md-10 text-right">
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className="body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>Nama</label>
                                    <input type="text" className="form-control" name="nama" value={this.state.nama} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Telepon</label>
                                    <input type="text" className="form-control" name="telepon" value={this.state.telepon} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Alamat</label>
                                    <input type="text" className="form-control" name="alamat" value={this.state.alamat} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <Link className="" to="/anggota"><i className="fa fa-arrow-left"></i> Kembali</Link>
                                    <button type="submit" className="btn btn-info"><i className="fa fa-save"></i> Simpan</button>
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
