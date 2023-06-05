import React from "react";
import axios from "axios";

class General extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isInsert:false,
            nama:""
        }
        this.handleInsert = this.handleInsert.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleInsert(event){
        const data = {
            name:  this.state.nama,
        };

        var config = {
            headers: { 
              'Authorization': 'Bearer 2|FR7C7kExqtDBwp5B9DhBir9E8e3OUdTLm2fxX83c'
            }
        };

        axios.post('http://127.0.0.1:8000/api/type-transaksi/store', data, config)
            .then(res => {
                this.props.handleInsertFalse();
            })
            .catch(err => {
                console.log(err)
            }
        )

        event.preventDefault();
    }

    handleChange(event){
        this.setState({
            nama: event.target.value
        });
    }

    render(){
        return (
            <form className="row mt-4" onSubmit={this.handleInsert}>
                <div className="col-md-6">
                    <div className="row">
                        <div className="form-group col-md-12">
                            <input type="text" className="form-control" placeholder="Nama Koperasi" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-12">
                            <input type="text" className="form-control" placeholder="Alamat" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" placeholder="No Telepon" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" placeholder="Fax" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-12">
                            <hr />
                            <button type="submit" className="btn btn-info btm-sm"><i className="fa fa-save"></i> Simpan</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default General;