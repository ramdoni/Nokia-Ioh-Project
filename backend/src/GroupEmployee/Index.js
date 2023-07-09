import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select'

export default function Index(){

    const [show,setShow] = useState(false)
    const [isInsert,setIsInsert] = useState(false)
    const [arrEmployee,setArrEmployee] = useState([])
    const [optionsEmployee,setOptionEmployee] = useState([])
    let [groupName,setGroupName] = useState();
      
    useEffect(()=>{
        fetchEmployee();
    },[])

    const history = useNavigate();
    const handleButtonClick = (state) => {}
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (state)=>{
        // setGroupName(state.target.value)
        groupName = state.target.value;
        console.log(groupName);
    }

    const handleInsert = (state) => {
        setIsInsert(state)
    }
    const handleDelete = (state) => {
        console.log(state);
    }
    const setSelectedOption = (state)=>{
        arrEmployee.push({id:state.value,value:state.label})
        handleInsert(false)
    }
    const deleteEmployeeItem = (key)=>{
        console.log(key);
        arrEmployee.slice(key,1)
    }
    const columns = [
        {
            name: 'NO',
            selector: row => row.id,
        },
        {
            name: 'NAME',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'TOTAL EMPLOYEE',
            selector: row => row.email,
            sortable: true
        },
        {
            name: 'ACTION',
            selector: row => row.id,
            cell:(row)=>(
                <div>
                    <Link className="text-info icon-menu px-1" to="/group-employee/detail" onClick={()=>{handleButtonClick(row)}}><i className='fa fa-edit'></i> </Link>
                    <Link className="text-info icon-menu px-1" to="/group-employee/delete"><i className='fa fa-trash text-danger'></i></Link>
                </div>
            ),
        },
    ];

    const fetchEmployee = async ()=>{
        axios(
            {
                method: 'get',
                url: process.env.REACT_APP_URL_API + '/employee/index-select2',
                headers: {
                  'Authorization': 'Bearer '+localStorage.getItem('token')
                }
            }
        ).then(function (response) {
            setOptionEmployee(response.data.data)
        })
        .catch(function (error) {
            if(error.response.status===401){
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
                                <i className="fa fa-arrow-left text-info mr-2 ml-2"></i>  <label style={{fontSize:"18px"}}>Group Employee</label>
                            </div>
                            <div className="col-md-10 text-right">
                                <Button className="btn btn-info rounded-circle" onClick={handleShow}><i className="fa fa-plus"></i></Button>
                            </div>
                        </div>
                        <hr />
                    </div> 
                    <div className="body">
                        <div className="table-responsive">
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <div className='modal-header'>
                    <h4 className='modal-title'>Add Group Employee</h4>
                    <button type="button" className="close" onClick={handleClose} aria-label="Close">
                        <span aria-hidden="true close-btn">×</span>
                    </button>
                </div>
                <Modal.Body>
                    <div className='form-group'>
                        <label>Group Name</label>
                        <input type="text" className='form-control' name="groupName" onInput={handleChange} />
                    </div>
                    <table className='table'>
                        <thead style={{background: '#eee'}}>
                            <tr>
                                <th>No</th>
                                <th>Name / Phone</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                arrEmployee.map((item,i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{i+1}</td>
                                            <td>{item.value}</td>
                                            <td>
                                                <i className='fa fa-trash text-danger cursor-pointer' onClick={()=>deleteEmployeeItem(i)}></i>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            {isInsert===true &&
                                <tr>
                                    <td colSpan={2}>
                                        <Select options={optionsEmployee} onChange={setSelectedOption} />
                                    </td>
                                    <td style={{width: '50px'}}>
                                        <button className='btn btn-danger cursor-pointer' onClick={()=> handleInsert(false)}><i className='fa fa-close'></i> </button>
                                    </td>
                                </tr>
                            }
                            <tr>
                                <td colSpan="4" className='text-center'>
                                    {isInsert===false&&
                                        <button className="badge badge-info cursor-pointer" onClick={()=> handleInsert(true) }><i className='fa fa-plus'></i> Add Employee</button>
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            
        </div>);
}