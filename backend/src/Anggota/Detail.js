import React from "react";
import axios from 'axios'
import { Link, useParams } from "react-router-dom";

class Detail extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
         
        };
    
        let {id} = useParams;
    
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
                           <h1>{this.id}</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Detail;
