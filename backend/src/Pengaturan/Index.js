import React from "react";
import PengaturanInsertJenisTransaksi from './InsertJenisTransaksi';
import General from './General';

class PengaturanIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isInsert:false,
            items:[],
            DataLoaded:false
        }
        this.handleInsert = this.handleInsert.bind(this);
        this.handleInsertFalse = this.handleInsertFalse.bind(this);
    }

    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        var config = {
            headers: { 
              'Authorization': 'Bearer 2|FR7C7kExqtDBwp5B9DhBir9E8e3OUdTLm2fxX83c'
            }
        };

        fetch("http://127.0.0.1:8000/api/type-transaksi/data",config)
            .then(res=>res.json())
            .then((json)=>{
                this.setState({
                    items: json.data,
                    DataLoaded:true
                })
            })
    }
    
    handleInsertFalse(){
        this.setState({isInsert:false});
        this.componentDidMount();
    }

    handleInsert(){
        this.setState({isInsert:true});
    }

    render(){
        const {isInsert,items,DataLoaded} = this.state;

        if(!DataLoaded) return <div><h1>Pleses wait some time....</h1></div>;

        return (
            <div className="clearfix row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="header pb-0">
                            <div className="row">
                                <div className="col-md-2"><i className="fa fa-arrow-left text-info mr-2 ml-2"></i>  <label style={{fontSize:"18px"}}>Pengaturan</label></div>
                                <div className="col-md-10 text-right">
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className="body">
                            <ul className="nav nav-tabs">
                                <li className="nav-item"><a className="nav-link active show" data-toggle="tab" href="#general">General</a></li>
                                <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#jenis_transaksi">Jenis Transaksi</a></li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane show active" id="general">
                                    <General />
                                </div>
                                <div className="tab-pane" id="jenis_transaksi">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <table className="table table-hover m-b-0 c_list">
                                                <thead>
                                                    <tr>
                                                        <th>No</th>
                                                        <th>Jenis Transaksi</th>
                                                        <th>Total Amount</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        items.length > 0 && (
                                                            items.map((row, key)=>(
                                                                <tr key={key}>
                                                                    <td>{key+1}</td>
                                                                    <td>{row.name}</td>
                                                                    <td></td>
                                                                </tr>
                                                            )))
                                                    }
                                                    </tbody>
                                            </table>
                                            {isInsert && <PengaturanInsertJenisTransaksi handleInsertFalse={this.handleInsertFalse} />}
                                            {isInsert===false && <button onClick={this.handleInsert} className="mt-4 btn btn-info rounded-circle"><i className="fa fa-plus"></i></button>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PengaturanIndex;