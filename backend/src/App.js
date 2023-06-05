import React from 'react';
import './App.css';
import Topnavbar from './TopNavbar';
import {
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";
import AnggotaIndex from './Anggota/Index';
import AnggotaInsert from './Anggota/Insert';
import AnggotaDetail from './Anggota/Detail';
import Shu from './Shu';
import PengaturanIndex from './Pengaturan/Index';

function App() {
  return (
        <Router>
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
                <Routes>
                  <Route path="/anggota" element={<AnggotaIndex />} />
                  <Route path="/anggota/insert" element={<AnggotaInsert />} />
                  <Route path="/anggota/detail/:id" element={<AnggotaDetail />} />
                  <Route path="/shu" element={<Shu/>} />
                  <Route path="/pengaturan" element={<PengaturanIndex/>} />
              </Routes>
            </div>
          </div>
        </Router>
  );
}

export default App;
