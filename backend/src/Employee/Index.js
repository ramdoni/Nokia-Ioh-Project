import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

export default function Index(){
    const [anggotas,setAnggotas] = useState([]);
    useEffect(()=>{
        fetchData();
    },[])

    const history = useNavigate();

    const handleDelete = (row) => {
        if(window.confirm("Delete this data ? ")){
            var config = {
                headers: { 
                  'Authorization': 'Bearer '+ localStorage.getItem('token')
                }
            };
            axios.post(process.env.REACT_APP_URL_API + '/employee/delete', {'id':row.id}, config)
                .then(res => {
                    fetchData();
                })
                .catch(err => {
                    console.log(err)
                }
            )
        }
    }

    const goTo = ()=>{
        history('/')
    }

    const columns = [
        {
            name: 'NO',
            selector: row => row.id,
        },
        {
            name: 'NIK',
            selector: row => row.nik,
        },
        {
            name: 'NAME',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'EMAIL',
            selector: row => row.email,
            sortable: true
        },
        {
            name: 'PHONE',
            selector: row => row.phone,
            sortable: true
        },
        {
            name: 'ACTION',
            selector: row => row.id,
            cell:(row)=>(
                <div>
                    <Link className="text-info icon-menu px-1" to={'/employee/detail/'+row.id}><i className='fa fa-edit'></i> </Link>
                    <Link className="text-info icon-menu px-1" onClick={()=>handleDelete(row)}><i className='fa fa-trash text-danger'></i></Link>
                </div>
            ),
        },
    ];

    var config = {
        method: 'get',
        url: process.env.REACT_APP_URL_API + '/employee/index',
        headers: { 
          'Authorization': 'Bearer '+localStorage.getItem('token')
        }
      };

    const fetchData = async ()=>{
        axios(config).then(function (response) {
            setAnggotas(response.data.data)
        })
        .catch(function (error) {
            console.log(error);
            if(error.response.status==401){
                history('/login');
            }
        });
    }

    return (
        <div className="clearfix row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="header pb-0">
                        <div className="row">
                            <div className="col-md-2">
                                <Link to="/"><i className="fa fa-home text-info mr-2 ml-2 cursor-pointer" style={{fontSize:'20px'}}></i> </Link>
                                <label style={{fontSize:"18px"}}>Employee</label>
                            </div>
                            <div className="col-md-10 text-right">
                                <Link className="btn btn-info rounded-circle" to="/employee/insert"><i className="fa fa-plus"></i></Link>
                            </div>
                        </div>
                        <hr />
                    </div> 
                    <div className="body">
                        <div className="table-responsive">
                            <DataTable headerColor="ddw-primary" columns={columns} data={anggotas} pagination className="table table-bordered table-hover m-b-0 c_list" fixedHeader fixedHeaderScrollHeight="500px" />
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}