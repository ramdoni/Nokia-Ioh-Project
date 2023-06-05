import React from "react";
import axios from "axios";

class InsertJenisTransaksi extends React.Component{
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
                <div className="col-md-8">
                    <input type="text" className="form-control" placeholder="Jenis Transaksi" onChange={this.handleChange} />
                </div>
                <div className="col-md-4">
                    <button type="submit" className="btn btn-info btm-sm"><i className="fa fa-save"></i> Simpan</button>
                </div>
            </form>
        );
    }
}

export default InsertJenisTransaksi;