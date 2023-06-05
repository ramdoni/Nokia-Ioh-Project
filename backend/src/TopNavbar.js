import React from "react";
import { Link } from "react-router-dom";
class TopNavbar extends React.Component{
    constructor(){
        super();
        this.state = {
            name : "Koperasi Karyawan Incoe",
        }
    }
    render(){
        return(
            <nav className="navbar navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-btn">
                        <button type="button" className="btn-toggle-offcanvas"><i className="lnr lnr-menu fa fa-bars"></i></button>
                    </div>
                    <div className="navbar-brand">
                        {/* <a href="/"><img src="" className="img-responsive logo"></a> */}
                    </div>
                    <div className="navbar-right">
                        <form id="navbar-search" className="navbar-form search-form col-md-9">
                            <div id="navbar-menu float-left">
                                <ul className="nav navbar-nav">
                                    <li><Link className="text-info icon-menu px-1" to="/anggota">Anggota</Link></li>
                                    <li><Link className="text-info icon-menu px-1" to="/shu">SHU</Link></li>
                                    <li><Link className="text-info icon-menu px-1" to="/pengaturan">Pengaturan</Link></li>
                                </ul>
                            </div>
                        </form>
                        <div id="navbar-menu">
                            <ul className="nav navbar-nav">
                                <li className="d-none d-sm-inline-block d-md-none d-lg-inline-block">
                                    {this.state.name}
                                </li>
                                <li className="dropdown">
                                    <a href="{void(0)}" className="dropdown-toggle icon-menu" data-toggle="dropdown"><i
                                            className="icon-equalizer"></i></a>
                                    <ul className="dropdown-menu user-menu menu-icon">
                                        <li className="menu-heading">ACCOUNT SETTINGS</li>
                                        <li><a href="{{ route('profile') }}"><i className="icon-note"></i> <span>My Profile</span></a>
                                        </li>
                                        <li><a href="{{ route('setting') }}"><i className="icon-equalizer"></i>
                                                <span>Setting</span></a>
                                        </li>
                                        <li><a href="{{ route('back-to-admin') }}" className="text-danger"><i
                                                    className="fa fa-arrow-right"></i> <span>Back to Admin</span></a></li>
                                    </ul>
                                </li>
                                <li><a href="{void(0)}" className="icon-menu"><i className="icon-login"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default TopNavbar;