//import hook react
import React, { useState } from 'react';

//import hook useHitory from react router dom
import { useNavigate } from 'react-router';

//import axios
import axios from 'axios';

function Login() {

    //define state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //define state validation
    const [validation, setValidation] = useState([]);

    //define history
    const history = useNavigate();

    //function "loginHanlder"
    const loginHandler = async (e) => {
        e.preventDefault();
        
        //initialize formData
        const formData = new FormData();

        //append data to formData
        formData.append('email', email);
        formData.append('password', password);

        //send data to server
        await axios.post(process.env.REACT_APP_URL_API + '/auth-login', formData)
        .then((response) => {
            console.log(response.data.data.token);
            //set token on localStorage
            localStorage.setItem('token', response.data.data.token);
            //redirect to dashboard
            history('/');
        })
        .catch((error) => {
            //assign error to state "validation"
            setValidation(error.response.data);
        })
    };

    return (
        <div id="wrapper">
            <div className="vertical-align-wrap">
                <div className="vertical-align-middle auth-main">
                    <div className="auth-box">
                        {/* <div className="top">
                            <img src="http://template.stalavista.com/assets/img/logo-white.svg" alt="Lucid" />
                        </div> */}
                        <div className="card">
                            <div className="header">
                                <p className="lead">Login to your account</p>
                            </div>
                            <div className="body">
                                <form className="form-auth-small" onSubmit={loginHandler}>
                                    <div className="form-group">
                                        <label for="signin-email" className="control-label sr-only">Email</label>
                                        <input type="email" className="form-control" id="signin-email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <label for="signin-password" className="control-label sr-only">Password</label>
                                        <input type="password" className="form-control" id="signin-password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                    </div>
                                    <div className="form-group clearfix">
                                        <label className="fancy-checkbox element-left">
                                            <input type="checkbox" />
                                            <span>Remember me</span>
                                        </label>								
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg btn-block">LOGIN</button>
                                    <div className="bottom">
                                        <span className="helper-text m-b-10"><i className="fa fa-lock"></i> <a href="#">Forgot password?</a></span>
                                        <span>Don't have an account? <a href="#">Register</a></span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)


        // <div className="container" style={{ marginTop: "120px" }}>
        //     <div className="row justify-content-center">
        //         <div className="col-md-4">
        //             <div className="card border-0 rounded shadow-sm">
        //                 <div className="card-body">
        //                     <h4 className="fw-bold">LOGIN</h4>
        //                     <hr/>
        //                     {
        //                         validation.message && (
        //                             <div className="alert alert-danger">
        //                                 {validation.message}
        //                             </div>
        //                         )
        //                     }
        //                     <form onSubmit={loginHandler}>
        //                         <div className="mb-3">
        //                             <label className="form-label">EMAIL</label>
        //                             <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan Alamat Email"/>
        //                         </div>
        //                         {
        //                             validation.email && (
        //                                 <div className="alert alert-danger">
        //                                     {validation.email[0]}
        //                                 </div>
        //                             )
        //                         }
        //                         <div className="mb-3">
        //                             <label className="form-label">PASSWORD</label>
        //                             <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan Password"/>
        //                         </div>
        //                         {
        //                             validation.password && (
        //                                 <div className="alert alert-danger">
        //                                     {validation.password[0]}
        //                                 </div>
        //                             )
        //                         }
        //                         <div className="d-grid gap-2">
        //                             <button type="submit" className="btn btn-primary btn-block">LOGIN</button>
        //                         </div>
        //                     </form>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    // )

}

export default Login;