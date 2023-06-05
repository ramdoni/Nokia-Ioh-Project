import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

export default function Index(){
    const [anggotas,setAnggotas] = useState([]);
    
    useEffect(()=>{
        fetchData()
    },[])

    const handleButtonClick = (state) => {
        console.log(state.target);
    }

    const handleDelete = (state) => {
        console.log(state);
    }

    const columns = [
        {
            name: 'No',
            selector: row => row.id
        },
        {
            name: 'Nama',
            selector: row => row.nama,
            sortable: true,
        },
        {
            name: 'No KTP',
            selector: row => row.no_ktp,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true
        },
        {
            name: 'Action',
            selector: row => row.id,
            cell:(row)=>(
                <Link className="text-info icon-menu px-1" to="/anggota/detail">Detail</Link>
            ),
        },
    ];

    var config = {
        method: 'get',
        url: 'http://127.0.0.1:8000/api/anggota/index',
        headers: { 
          'Authorization': 'Bearer 2|FR7C7kExqtDBwp5B9DhBir9E8e3OUdTLm2fxX83c'
        }
      };

    const fetchData = async ()=>{
        axios(config).then(function (response) {
            setAnggotas(response.data.data)
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div className="clearfix row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="header pb-0">
                        <div className="row">
                            <div className="col-md-2">
                                <i className="fa fa-arrow-left text-info mr-2 ml-2"></i>  <label style={{fontSize:"18px"}}>Anggota</label>
                            </div>
                            <div className="col-md-10 text-right">
                                <Link className="btn btn-info rounded-circle" to="/anggota/insert"><i className="fa fa-plus"></i></Link>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="body">
                        <div className="table-responsive">
                            <DataTable columns={columns} data={anggotas} pagination className="table table-striped table-hover m-b-0 c_list" fixedHeader fixedHeaderScrollHeight="500px" />
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}