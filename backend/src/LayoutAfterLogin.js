import { Outlet, Link } from "react-router-dom";
import Topnavbar from './TopNavbar';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

function LayoutAfterLogin(){
  //define history
  const history = useNavigate();

  //hook useEffect
  useEffect(() => {
      //check token
        if(localStorage.getItem('token') == "") {
            history('/login');
        }
  }, []);
  
  return (
    <>
        <Topnavbar />
          <div id="main-content">
            <div className="container-fluid">
                <div className="block-header">
                    <div className="alert alert-danger alert-dismissible" role="alert" style={{display:"none"}}>
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                        <i className="fa fa-times-circle"></i> <span className="message"></span>
                    </div>
                    <div className="alert alert-success alert-dismissible" role="alert" style={{display:"none"}}>
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                        <i className="fa fa-check-circle"></i> <span className="message"></span>
                    </div>
                </div>
            <Outlet />
            </div>
        </div>
    </>
  )

} 

// const LayoutAfterLogin = () => {
  
// };

export default LayoutAfterLogin;