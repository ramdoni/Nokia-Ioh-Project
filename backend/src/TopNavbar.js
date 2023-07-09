import React, { useState }  from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';


function TopNavbar(){
    const [name, setName] = useState("Nokia");

    const history = useNavigate();

    const logout = ()=> {
        localStorage.removeItem("token");
        
        history('/login');
    }

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
                    <form id="navbar-search" className="navbar-form search-form">
                        <input type="text" className="form-control" placeholder="Search here..." style={{width: '400px'}} />
                        <button type="button" className="btn btn-default"><i className="icon-magnifier"></i></button>
                    </form>
                    <div id="navbar-menu">
                        <ul className="nav navbar-nav">
                            <li className="d-none d-sm-inline-block d-md-none d-lg-inline-block">
                                {name}
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
                            <li><a onClick={logout}  className="icon-menu"><i className="icon-login"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

// class TopNavbar extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             name : "Nokia",
//         }
//     }
//     logout(){
//         window.location.href = "/login";
//     }

//     render(){
//         return(
//             <nav className="navbar navbar-fixed-top">
//                 <div className="container-fluid">
//                     <div className="navbar-btn">
//                         <button type="button" className="btn-toggle-offcanvas"><i className="lnr lnr-menu fa fa-bars"></i></button>
//                     </div>
//                     <div className="navbar-brand">
//                         {/* <a href="/"><img src="" className="img-responsive logo"></a> */}
//                     </div>
//                     <div className="navbar-right">
//                         <form id="navbar-search" className="navbar-form search-form">
//                             <div id="navbar-menu float-left">
//                                 <ul className="nav navbar-nav">
//                                     <li className="dropdown px-1">
//                                         <a href="" className="text-info icon-menu px-1  dropdown-toggle " data-toggle="dropdown">Database</a>
//                                         <ul className="dropdown-menu user-menu menu-icon">
//                                             <li><Link to="/employee">Employee</Link></li>
//                                             <li><Link to="/group-employee">Group Employee</Link></li>
//                                         </ul>
//                                     </li>
//                                     <li><Link className="text-info icon-menu px-1" to="/pengaturan">Setting</Link></li>
//                                 </ul>
//                             </div>
//                         </form>
//                         <div id="navbar-menu">
//                             <ul className="nav navbar-nav">
//                                 <li className="d-none d-sm-inline-block d-md-none d-lg-inline-block">
//                                     {this.state.name}
//                                 </li>
//                                 <li className="dropdown">
//                                     <a href="{void(0)}" className="dropdown-toggle icon-menu" data-toggle="dropdown"><i
//                                             className="icon-equalizer"></i></a>
//                                     <ul className="dropdown-menu user-menu menu-icon">
//                                         <li className="menu-heading">ACCOUNT SETTINGS</li>
//                                         <li><a href="{{ route('profile') }}"><i className="icon-note"></i> <span>My Profile</span></a>
//                                         </li>
//                                         <li><a href="{{ route('setting') }}"><i className="icon-equalizer"></i>
//                                                 <span>Setting</span></a>
//                                         </li>
//                                         <li><a href="{{ route('back-to-admin') }}" className="text-danger"><i
//                                                     className="fa fa-arrow-right"></i> <span>Back to Admin</span></a></li>
//                                     </ul>
//                                 </li>
//                                 <li><a href="javascript:void(0)" onClick={this.logout}  className="icon-menu"><i className="icon-login"></i></a></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         );
//     }
// }

export default TopNavbar;